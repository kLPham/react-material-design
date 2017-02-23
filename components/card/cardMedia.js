import React, { PropTypes } from 'react';

const CardMedia = ({ children, src }) => <section style={{ background: `url(${src})` }} className="mdc-card__media">{children}</section>;
CardMedia.propTypes = {
    children: PropTypes.any,
};
export default CardMedia;
