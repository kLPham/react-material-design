import React, { PropTypes } from 'react';
import classNames from 'classnames';

const CardActions = ({ children, vertical }) =>
    <section className={classNames('mdc-card__actions', { 'mdc-card__actions--vertical': vertical })}>
        {children}
    </section>;
CardActions.propTypes = {
    children: PropTypes.any,
    vertical: PropTypes.bool,
};
CardActions.defaultProps = {
    vertical: false,
};
export default CardActions;
