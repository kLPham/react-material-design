import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardActions = ({ children, vertical }) =>
    <section className={classNames('mdc-card__actions', { 'mdc-card__actions--vertical': vertical })}>
        {children}
    </section>;
CardActions.propTypes = {
    children: PropTypes.any.isRequired,
    vertical: PropTypes.bool,
};
CardActions.defaultProps = {
    vertical: false,
};
export default CardActions;
