import React, { PropTypes } from 'react';
import '@material/card/dist/mdc.card.css';
import classNames from 'classnames';

// TODO: Horizontal blocks
const Card = ({ children }) =>
    <div className="mdc-card">
        {children}
    </div>;
export default Card;
