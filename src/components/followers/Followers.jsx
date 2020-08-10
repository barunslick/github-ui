import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FollowerListItem from './followerListItem/FollowerListItem';

import './followers.scss';

/**
 * Shows the followers of the user account.
 *
 * @param {Object} props
 * @returns
 */
function Followers(props) {

  const { followers } = props;

  return (
    <div className="Followers">
      <span className="Followers__heading"> {`// Followers --------------------------------------------------------------------------------------------------------------`}</span>
      <div className="Followers__list-container">
        {followers && followers.map(follower => <FollowerListItem key={follower.id} follower={follower}/> )}
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
    followers: state.mainData.followers
  };
}

Followers.propTypes = {
  followers: PropTypes.array,
};

export default connect(mapStateToProps)(Followers);
