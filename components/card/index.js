import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import '@material/card/dist/mdc.card.css';

// TODO: Horizontal blocks
// TODO: Cards are taking up full screen.
/** Card */
const Card = ({ children, style, darkTheme }) =>
    (<div style={style} className={classNames('mdc-card', { 'mdc-card--theme-dark': darkTheme })}>
        {children}
    </div>);
Card.propTypes = {
    children: PropTypes.any.isRequired,
    darkTheme: PropTypes.bool,
    horizontal: PropTypes.bool,
    style: PropTypes.object,
};
export default Card;
