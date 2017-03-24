import React, { PropTypes } from 'react';
import '@material/card/dist/mdc.card.css';

// TODO: Horizontal blocks
// TODO: Cards are taking up full screen.
const Card = ({ children, style }) =>
    <div style={style} className="mdc-card">
        {children}
    </div>;
Card.propTypes = {
    children: PropTypes.any,
    horizontal: PropTypes.bool,
    style: PropTypes.object,
};
export default Card;
