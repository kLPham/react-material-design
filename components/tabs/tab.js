import React, { Component } from 'react';
import '@material/tabs/dist/mdc.tabs.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { MDCTab } from '@material/tabs';

// TODO: Logic to handle only one child.
class Tab extends Component {
    static propTypes = {
        active: PropTypes.bool,
        label: PropTypes.string,
        to: PropTypes.string,
        icon: PropTypes.string,
    };
    componentDidMount() {
        this.tab = new MDCTab(this.mainRoot);
    }
    render() {
        const { active, label, to, icon } = this.props;
        const hasIconAndText = label && icon;

        return (
            <a
                ref={(a) => { this.mainRoot = a; }}
                className={classNames(
                    'mdc-tab',
                    { 'mdc-tab--active': active },
                    { 'mdc-tab--with-icon-and-text': hasIconAndText },
                )}
                href={to}
            >
                {icon && <i className="material-icons mdc-tab__icon" aria-label={icon}>{icon}</i>}
                {hasIconAndText ? <span className="mdc-tab__icon-text">{label}</span> : label}
            </a>
        );
    }
}

export default Tab;
