import React from 'react';
import PropTypes from 'prop-types';

import './followingListItem.scss';

/**
 * Shows the details of the follower.
 * 
 * @param {Object} props
 * @returns {JSX} Contains the jsx to show user respositories.
 */
function FollowingListItem(props) {

  const { following } = props;

  return (
    <div className="FollowingListItem">
      <div className="FollowingListItem__avatar-holder">
        <img className="FollowingListItem__avatar" src={following.avatar_url} alt={following.login}></img>
      </div>
      <div className="FollowingListItem__user-details">
        <p className="FollowingListItem__user-id"><a href={following.html_url} titel={following.login}>{following.login}</a></p>
      </div>
    </div>
  );
}

FollowingListItem.propTypes = {
  following: PropTypes.object,
};

export default FollowingListItem;
