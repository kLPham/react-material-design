import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) =>
    <div>
        <h1>Welcome to Material Design Components for React Demonstration</h1>
        <div>
            {children}
        </div>
        </div>;
Layout.propTypes = {
    children: PropTypes.any,
};
export default Layout;
