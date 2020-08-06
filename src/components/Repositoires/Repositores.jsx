import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './repositories.scss';
import fetchContent from '../../services/githubApi';
import * as reposActions from '../../actions/repoActions';
import RepositoryListItem from './RespositoryListItem/RepositoryListItem';

/**
 * Shows the repositores of the user.
 * 
 * @param {Object} props
 * @returns {JSX} Contains the jsx to show user respositories.
 */
function Repositores(props) {

  const [isLoading, setIsLoding] = useState(true);

  const { reposUrl, setRepos, reposData } = props;

  useEffect(() => {

    const fetchRepos = async () => {
      const result = await fetchContent(reposUrl);

      if (result) {
        setRepos(result);
        setIsLoding(false);
      }

    };

    if (reposUrl) {
      fetchRepos();
    }

    // eslint-disable-next-line
  }, [reposUrl]);


  return (
    <div className="Repositories">
      <span className="Repositories__heading"> {`// Repositories ---------------------------------------------------------------------------------------------------------------------------------`}</span>
      {isLoading ?
        <p>Loading....</p>
        :
        <div className = "Repositories__list-container">
          { reposData.map( item=> <RepositoryListItem key={item.id} item={item}/>) }
        </div>
      }
    </div>
  );
}

/**
 * Sends required data from state to props of component.
 *
 * @param {Object} state
 * @returns
 */
function mapStateToProps(state) {
  return {
    reposUrl: state.mainData.data.repos_url,
    reposData: state.repos.reposData,
  };
}

/**
 * Take store.dispatch and map it as props to our component.
 *
 * @param {*} dispatch
 */
function mapDisptachToProps(dispatch) {
  return {
    setRepos: fetchedData => dispatch(reposActions.setRepos(fetchedData)),
  };
}

Repositores.propTypes = {
  reposUrl: PropTypes.string,
  setRepos: PropTypes.func,
  reposData: PropTypes.array,
};

export default connect(mapStateToProps, mapDisptachToProps)(Repositores);
