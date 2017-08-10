import React from 'react';
import PropTypes from 'prop-types';

/** Dialog Body */
const DialogBody = ({ children }) => (
    <section id="my-mdc-dialog-description" className="mdc-dialog__body">
        {children}
    </section>
);
DialogBody.propTypes = {
    children: PropTypes.any,
};
export default DialogBody;
