import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './profile.scss';
import Avatar from '../Avatar/Avatar';
import Socials from '../Socials/Socials';
import Contacts from '../Contacts/Contacts';

/**
 * Shows the user avatar along with details such as name, followers, and other details.
 * 
 * @param {Object} props
 * @returns
 */
function Profile(props) {

  const { name, gitId, url } = props;

  return (
    <div className="Profile">
      <span className="Profile__heading"> {`// Profile --------------------------------------------------------------------------------------------------------------`}</span>
      <div className="Profile__avatar-container">
        <Avatar className="Profile__avatar" />
      </div>
      <div className="Profile__user-details">
        <h1 className="Profile__user-name"> <a href = {url}>{name}</a> </h1>
        <p className="Profile__user-id"> <a href = {url}>{gitId}</a> </p>
      </div>
      <Socials />
      <Contacts />
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
    name: state.mainData.data.name,
    gitId: state.mainData.data.login,
    url: state.mainData.data.html_url,
  };
}

Profile.propTypes = {
  name: PropTypes.string,
  gitId: PropTypes.string,
  url: PropTypes.string,
};

export default connect(mapStateToProps)(Profile);
