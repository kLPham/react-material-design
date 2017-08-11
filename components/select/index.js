import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import '@material/select/dist/mdc.select.css';
import { MDCSelect } from '@material/select';

// TODO: menufactory
// TODO: Multiple select
// TODO: Cancel
/** Select */
class Select extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
        disable: PropTypes.bool,
        /** Children should be a menu and menu item elements. */
        darkTheme: PropTypes.bool,
        label: PropTypes.string.isRequired,
    }
    componentDidMount() {
        const { disable } = this.props;
        this.select = new MDCSelect(this.mainRoot);
        this.select.foundation_.setDisabled(disable);
        this.select.listen('MDCSelect:change', () => {
            this.setState({
                selectedTextContent: this.select.selectedOptions[0].textContent,
                selectedIndex: this.select.selectedIndex,
                selectedValue: this.select.value,
            });
        });
    }
    render() {
        const { darkTheme, children, label } = this.props;
        return (
            <div ref={(d) => { this.mainRoot = d; }} className={classNames('mdc-select', { 'mdc-select--theme-dark': darkTheme })} role="listbox">
                <span className="mdc-select__selected-text">{label}</span>
                {children}
            </div>
        );
    }
}
export default Select;
