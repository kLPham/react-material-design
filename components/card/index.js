import React, { PropTypes } from 'react';
import '@material/card/dist/mdc.card.css';

// TODO: Horizontal blocks
// TODO: Cards are taking up full screen.
const Card = ({ children }) =>
    <div className="mdc-card">
        {children}
    </div>;
Card.propTypes = {
    children: PropTypes.any,
    horizontal: PropTypes.bool,
};
export default Card;
