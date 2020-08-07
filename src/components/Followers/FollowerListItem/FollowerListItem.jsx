import React from 'react';
import PropTypes from 'prop-types';

import './followerListItem.scss';

/**
 * Shows the details of the follower.
 * 
 * @param {Object} props
 * @returns {JSX} Contains the jsx to show user respositories.
 */
function FollowerLisItem(props) {

  const { follower } = props;

  return (
    <div className="FollowerListItem">
      <div className="FollowerListItem__avatar-holder">
        <img className="FollowerListItem__avatar" src={follower.avatar_url} alt={follower.login}></img>
      </div>
      <div className="FollowerListItem__user-details">
        <p className="FollowerListItem__user-id"><a href={follower.html_url} titel={follower.login}>{follower.login}</a></p>
      </div>
    </div>
  );
}

FollowerLisItem.propTypes = {
  follower: PropTypes.object,
};

export default FollowerLisItem;
