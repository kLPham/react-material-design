import React, { PropTypes } from 'react';
import '@material/fab/dist/mdc.fab.css';
import classNames from 'classnames';

// TODO: categorize this as button: floating action button.
// TODO: floating fab
const cssClasses = {
    plain: 'mdc-button--plain',
    mini: 'mdc-fab--mini',
};
const cx = classNames.bind(cssClasses);
// if no type
const FAB = ({ icon, type }) =>
    <button
        className={cx('mdc-fab', cssClasses[type], 'material-icons')}
        aria-label="Favorite"
    >
        <span className="mdc-fab__icon">
            {icon}
        </span>
    </button>;
FAB.propTypes = {
    icon: PropTypes.string.isRequired,
    type: PropTypes.string,
};
export default FAB;
