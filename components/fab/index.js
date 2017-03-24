import '@material/fab/dist/mdc.fab.css';
import classNames from 'classnames';
import React, { PropTypes } from 'react';
import { fabcssClasses } from '../classes';

// TODO: categorize this as button: floating action button.
// TODO: floating fab @media
// TODO: might be a more elegant way to handle styles.
// TODO: if location has absolute, then no reason to require type="absolute".
// TODO: when absolute, don't include className material-icons.

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
const cx = classNames.bind(fabcssClasses);
/**
* Floating Action Button
*/
const FAB = ({ icon, location, ripple, ...rest }) =>
    <button
        style={location && styles[location]}
        className={cx('mdc-fab',
            Object.keys(rest).map(modifier =>
            fabcssClasses[modifier]),
        'material-icons')

        }
        aria-label={icon}
        data-mdc-auto-init={ripple && 'MDCRipple'}
    >
        <span className="mdc-fab__icon">
            {icon}
        </span>
    </button>;
FAB.propTypes = {
    /**
    * Uses Material Design Icon Font, e.g. icon="g_translate". You may use any other icon method you wish.
    */
    icon: PropTypes.string.isRequired,
    /**
    * By default FAB rests in the page where it sits in the content flow. You can re-position it as-needed. Accepts absolute or floating and position on screen e.g., type="absolute-bottom-right"
    */
    location: PropTypes.string,
    ripple: PropTypes.bool,
    /**
    * Makes the FAB smaller (40 x 40 pixels).
    */
    mini: PropTypes.bool,
    /**
    * Makes the FAB have a white background.
    */
    plain: PropTypes.bool,
};
export default FAB;
