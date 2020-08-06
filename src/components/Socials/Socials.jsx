import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import fetchContent from '../../services/githubApi';
import * as profileActions from '../../actions/profileActions';

import './Socials.scss';

/**
 * Shows the number of followers and following.
 * 
 * @param {Object} props
 * @returns
 */
function Socials(props) {

  const { followersUrl, followingUrl, followersCount, followingCount, setFollowing, setFollowers } = props;

  useEffect(() => {

    const fetchFollowers = async () => {
      const followers = await fetchContent(followersUrl);

      if (followers) {
        setFollowers(followers);
      }
    };

    const fetchFollowings = async (actuatlFollowingUrl) => {
      const following = await fetchContent(actuatlFollowingUrl);

      if (following) {
        setFollowing(following);
      }
    };

    if (followersUrl) {
      fetchFollowers();
    }
    if (followingUrl) {
      const actuatlFollowingUrl = followingUrl.split('{')[0];

      fetchFollowings(actuatlFollowingUrl);
    }

    // eslint-disable-next-line
  }, [ followersUrl, followingUrl ]);



  return (
    <div className="Socials">
      <div className="Socials__followers">
        <p><span className="spray">{followersCount}</span> Followers</p>
      </div>
      <div className="Socials__following">
        <p><span className="spray">{followingCount}</span> Following</p>
      </div>
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
    followersUrl: state.mainData.data.followers_url,
    followingUrl: state.mainData.data.following_url,
    followersCount: Object.keys(state.mainData.followers).length,
    followingCount: Object.keys(state.mainData.following).length,
  };
}

/**
 * Take store.dispatch and map it as props to our component.
 *
 * @param {*} dispatch
 */
function mapDisptachToProps(dispatch) {
  return {
    setFollowing: fetchedData => dispatch(profileActions.setFollowing(fetchedData)),
    setFollowers: fetchedData => dispatch(profileActions.setFollowers(fetchedData)),
  };
}

Socials.propTypes = {
  followersUrl: PropTypes.string,
  followingUrl: PropTypes.string,
  followersCount: PropTypes.number,
  followingCount: PropTypes.number,
  setFollowing: PropTypes.func,
  setFollowers: PropTypes.func
};

export default connect(mapStateToProps, mapDisptachToProps)(Socials);
