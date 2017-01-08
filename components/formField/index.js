import React, { PropTypes } from 'react';
import classnames from 'classnames';
import '@material/form-field/dist/mdc.form-field.css';

const FormField = ({ alignEnd, children }) =>
    <div className={classnames('mdc-form-field', { 'mdc-form-field--align-end': alignEnd })}>
        {children}
    </div>;
FormField.propTypes = {
    alignEnd: PropTypes.bool,
    children: PropTypes.any,
};
export default FormField;
