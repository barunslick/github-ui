import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FollowingListItem from './followingListItem/FollowingListItem';

import './following.scss';

/**
 * Shows the following acoount by the user account.
 *
 * @param {Object} props
 * @returns
 */
function Following(props) {

  const { following } = props;

  return (
    <div className="Following">
      <span className="Following__heading"> {`// Following --------------------------------------------------------------------------------------------------------------`}</span>
      <div className="Following__list-container">
        {following && following.map(following => <FollowingListItem key={following.id} following={following} />)}
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
    following: state.mainData.following
  };
}

Following.propTypes = {
  following: PropTypes.array,
};

export default connect(mapStateToProps)(Following);
