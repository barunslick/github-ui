import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './contacts.scss';

/**
 * Shows the contact details of the user.
 * 
 * @param {Object} props
 * @returns
 */
function Contacts(props) {

  const { blogLink, address } = props;

  return (
    <div className="Contacts">
      <div><i className="fas fa-link icons"></i><span className="Contacts__text-content"><a href={`http://${blogLink}`}>{blogLink}</a></span></div>
      <div><i className="fas fa-map-marker-alt icons"></i><span className="Contacts__text-content">{address}</span></div>
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
    blogLink: state.mainData.data.blog,
    address: state.mainData.data.location,
  };
}

Contacts.propTypes = {
  blogLink: PropTypes.string,
  address: PropTypes.string
};

export default connect(mapStateToProps)(Contacts);
