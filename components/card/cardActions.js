import React, { PropTypes } from 'react';
import '@material/card/dist/mdc.card.css';

const CardActions = ({ children }) =>
    <section className="mdc-card__actions">
        {children}
    </section>;
CardActions.propTypes = {
    children: PropTypes.any,
};
export default CardActions;
