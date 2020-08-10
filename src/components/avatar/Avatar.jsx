import React from 'react';

import PropTypes from 'prop-types';

/**
 * Returns the avatar of the user.
 *
 * @param {props} props
 * @returns {JSX} Image JSX of the user.
 */
function Avatar(props) {
  return (
    <img className = { props.className } src = { props.src } alt = { props.alt }></img>
  );
}

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Avatar;
