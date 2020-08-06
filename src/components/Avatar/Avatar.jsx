import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Returns the avatar of the user.
 *
 * @param {props} props
 * @returns {JSX} Image JSX of the user.
 */
function Avatar(props) {
  return (
    <img className = { props.className } src = { props.imageUrl } alt="Profile"></img>
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
    imageUrl: state.mainData.data.avatar_url
  };
}

Avatar.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string
};

export default connect(mapStateToProps)(Avatar);
