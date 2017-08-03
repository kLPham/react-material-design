import React from 'react';
import PropTypes from 'prop-types';

/** Card Supporting Content */
const CardSupportingContent = ({ children }) =>
    (<section className="mdc-card__supporting-text">
        {children}
    </section>);
CardSupportingContent.propTypes = {
    children: PropTypes.any.isRequired,
};
export default CardSupportingContent;
