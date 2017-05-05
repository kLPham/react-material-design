import PropTypes from 'prop-types';
import React from 'react';
import '@material/toolbar/dist/mdc.toolbar.css';

const ToolbarRow = ({ centerElements, rightElements, leftElements, title }) =>
    <div className="mdc-toolbar__row">
        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
            {leftElements}
            {title && <span className="mdc-toolbar__title">{title}</span>}
        </section>
        <section className="mdc-toolbar__section">
            {centerElements}
        </section>
        <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
            {rightElements}
        </section>
    </div>;
ToolbarRow.propTypes = {
    centerElements: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    leftElements: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    rightElements: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    title: PropTypes.string,
};
export default ToolbarRow;
