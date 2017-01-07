import React, { PropTypes } from 'react';
import '@material/fab/dist/mdc.fab.css';

// TODO: categorize this as button: floating action button.
// TODO: floating fab
const cssClasses = {
    plain: 'mdc-button--plain',
    mini: 'mdc-fab--mini',
};
// if no type
const FAB = ({ icon, type }) =>
    <button
        className={`mdc-fab ${typeof type !== 'undefined' ? cssClasses[type] : ''} material-icons`}
        aria-label="Favorite"
    >
        <span className="mdc-fab__icon">
            {icon}
  </span>
    </button>;
FAB.propTypes = {
    icon: PropTypes.string.isRequired,
};
export default FAB;
