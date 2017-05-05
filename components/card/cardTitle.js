import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
// TODO: Avatar support
const CardTitle = ({ title, subtitle, larger }) =>
    <section className="mdc-card__primary">
        <h1 className={classNames('mdc-card__title', { 'mdc-card__title--large': larger })}>
            {title}
        </h1>
        <h2 className="mdc-card__subtitle">
            {subtitle}
        </h2>
    </section>;
CardTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    larger: PropTypes.bool,
};
CardTitle.defaultProps = {
    subtitle: '',
    larger: false,
};
export default CardTitle;
