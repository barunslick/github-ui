import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Profile from '../Profile/Profile';
import { BASE_URL } from '../../constants/apiUrl';
import fetchContent from '../../services/githubApi';

import Following from '../Following/Following';
import Followers from '../Followers/Followers';
import Repositores from '../Repositoires/Repositores';
import * as profileActions from '../../actions/profileActions';
import * as routeUrls from '../../constants/route';


import '../../style/style.scss';
import '../../style/reset.scss';


/**
 * Main App wrapper.
 * 
 * @param {Object} props
 * @returns {JSX} 
 */
function Main(props) {

  const [isLoading, setLoading] = useState(true);

  const { setMainData } = props;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchContent(BASE_URL);

      if (result) {
        setMainData(result);
        setLoading(false);
      }

    };

    fetchData();

    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="MainWrapper">
        <div className="Content">
          {isLoading ?
            <p>Laoding.....</p>
            :
            <>
              <Profile />
              <Switch>
                <Route path={routeUrls.BASE} exact component={Repositores} />
                <Route path={routeUrls.FOLLOWERS} exact component={Followers} />
                <Route path={routeUrls.FOLLOWING} exact component={Following} />
              </Switch>
            </>
          }

        </div>
      </div>
    </Router>
  );
}

/**
 * Take store.dispatch and map it as props to our component.
 *
 * @param {*} dispatch
 */
function mapDisptachToProps(dispatch) {
  return {
    setMainData: fetchedData => dispatch(profileActions.setData(fetchedData)),
  };
}

Main.propTypes = {
  setMainData: PropTypes.func
};

export default connect(null, mapDisptachToProps)(Main);
