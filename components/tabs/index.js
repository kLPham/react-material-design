import React from 'react';
import '@material/tabs/dist/mdc.tabs.css';
import classNames from 'classnames';

const Tabs = ({ children }) => {
    const childProps = Array.isArray(children) ? children.map(child =>
        child.props) : children.props;
    const childHasIcon = childProps.filter(child => child.icon);
    const childHasIconAndText = childHasIcon.some(child => child.label);
    const baseClass = childHasIcon.length > 0 ? 'mdc-tab-bar' : 'basic-tab-bar';
    console.log(childHasIcon, childHasIconAndText);
    const iconAndTextCheck = childHasIconAndText ? 'mdc-tab-bar--icons-with-text' : childHasIcon.length > 0 && 'mdc-tab-bar--icon-tab-bar';
    return (
        <nav className={classNames(baseClass, iconAndTextCheck)}>
            { children }
            <span className="mdc-tab-bar__indicator" />
        </nav>
    );
};

export default Tabs;

