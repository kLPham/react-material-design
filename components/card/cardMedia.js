import React from 'react';
import PropTypes from 'prop-types';

const CardMedia = ({ children }) => <section className="mdc-card__media">{children}</section>;
CardMedia.propTypes = {
    children: PropTypes.any,
};
export default CardMedia;
