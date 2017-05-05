<<<<<<< HEAD
import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) =>
    <div>
        <h1>Welcome to Material Design Components for React Demonstration</h1>
        <div>
            {children}
        </div>
        </div>;
=======
import React, { PropTypes } from 'react';

const Layout = ({ children }) =>
    <div>
        <h1 className="mdc-typography--display4">Welcome to Material Design Components for React Demonstration</h1>
        {children}
    </div>;
>>>>>>> master
Layout.propTypes = {
    children: PropTypes.any,
};
export default Layout;
