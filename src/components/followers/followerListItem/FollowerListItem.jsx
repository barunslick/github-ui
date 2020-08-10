import React from 'react';

import PropTypes from 'prop-types';

import Avatar from '../../avatar/Avatar';

import './followerListItem.scss';

/**
 * Shows the details of the follower.
 * 
 * @param {Object} props
 * @returns {JSX} Contains the jsx to show user respositories.
 */
function FollowerListItem(props) {

  const { follower } = props;

  return (
    <div className="FollowerListItem">
      <div className="FollowerListItem__avatar-holder">
        <Avatar className="FollowerListItem__avatar" src={follower.avatar_url} alt={follower.login} />
      </div>
      <div className="FollowerListItem__user-details">
        <p className="FollowerListItem__user-id"><a href={follower.html_url} titel={follower.login}>{follower.login}</a></p>
      </div>
    </div>
  );
}

FollowerListItem.propTypes = {
  follower: PropTypes.object,
};

export default FollowerListItem;
