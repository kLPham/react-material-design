import React, { PropTypes } from 'react';
import '@material/fab/dist/mdc.fab.css';
import classNames from 'classnames';

// TODO: categorize this as button: floating action button.
// TODO: floating fab @media
// TODO: might be a more elegant way to handle styles.
const cssClasses = {
    plain: 'mdc-button--plain',
    mini: 'mdc-fab--mini',
    absolute: 'app-fab--absolute',
};

const styles = {
    'absolute-bottom-right': {
        position: 'absolute',
        bottom: '1rem',
        right: '1rem',
    },
    'absolute-bottom-left': {
        position: 'absolute',
        bottom: '1rem',
        left: '1rem',
    },
    'absolute-top-right': {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
    },
    'absolute-top-left': {
        position: 'absolute',
        top: '1rem',
        left: '1rem',
    },
    'floating-bottom-right': {
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
    },
    'floating-bottom-left': {
        position: 'fixed',
        bottom: '1rem',
        left: '1rem',
    },
    'floating-top-right': {
        position: 'fixed',
        top: '1rem',
        right: '1rem',
    },
    'floating-top-left': {
        position: 'fixed',
        top: '1rem',
        left: '1rem',
    },
};
const cx = classNames.bind(cssClasses);
// if no type
const FAB = ({ icon, type, location }) =>
    <button
        style={location && styles[location]}
        className={cx('mdc-fab', cssClasses[type], 'material-icons')}
        aria-label={icon}
    >
        <span className="mdc-fab__icon">
            {icon}
        </span>
    </button>;
FAB.propTypes = {
    icon: PropTypes.string.isRequired,
    type: PropTypes.string,
    location: PropTypes.string,
};
export default FAB;
