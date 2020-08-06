import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Profile from '../Profile/Profile';
import { BASE_URL } from '../../constants/apiUrl';
import fetchContent from '../../services/githubApi';
import Repositores from '../Repositoires/Repositores';
import * as profileActions from '../../actions/profileActions';

import '../../style/style.scss';
import '../../style/reset.scss';


/**
 * Main App wrapper.
 * 
 * @param {Object} props
 * @returns {JSX} 
 */
function Main(props) {

  const { setMainData } = props;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchContent(BASE_URL);

      if (result) {
        setMainData(result);
      }
      
    };

    fetchData();

  // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="MainWrapper">
        <div className="Content">
          <Route path="/" component={Profile} />
          <Route path="/" component={Repositores} />
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