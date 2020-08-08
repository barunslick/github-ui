import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Avatar from '../avatar/Avatar';
import Socials from '../socials/Socials';
import Contacts from '../contacts/Contacts';
import * as routeUrls from '../../constants/route';

import './profile.scss';

/**
 * Shows the user avatar along with details such as name, followers, and other details.
 * 
 * @param {Object} props
 * @returns
 */
function Profile(props) {

  const { name, gitId, url, imageUrl } = props;

  return (
    <div className="Profile">
      <span className="Profile__heading"> {`// Profile --------------------------------------------------------------------------------------------------------------`}</span>
      <div className="Profile__avatar-container">
        <Avatar className="Profile__avatar" src = {imageUrl} alt={name}/>
      </div>
      <div className="Profile__user-details">
        <Link to={routeUrls.BASE}>
          <h1 className="Profile__user-name">{name}</h1>
        </Link>
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
    imageUrl: state.mainData.data.avatar_url,
  };
}

Profile.propTypes = {
  name: PropTypes.string,
  gitId: PropTypes.string,
  url: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default connect(mapStateToProps)(Profile);
