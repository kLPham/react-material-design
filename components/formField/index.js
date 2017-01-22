import '@material/form-field/dist/mdc.form-field.css';
import classnames from 'classnames';
import React, { PropTypes } from 'react';

const FormField = ({ additionalClassNames, alignEnd, children, ...rest }) =>
    <div
        {...rest}
        className={classnames('mdc-form-field', { 'mdc-form-field--align-end': alignEnd }, additionalClassNames)}
    >
        {children}
    </div>;
FormField.propTypes = {
    alignEnd: PropTypes.bool,
    additionalClassNames: PropTypes.string,
    children: PropTypes.any,
};
export default FormField;
