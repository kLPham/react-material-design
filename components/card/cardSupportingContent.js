import React from 'react';
import PropTypes from 'prop-types';

const CardSupportingContent = ({ children }) =>
    <section className="mdc-card__supporting-text">
        {children}
    </section>;
CardSupportingContent.propTypes = {
    children: PropTypes.any.isRequired,
};
export default CardSupportingContent;
