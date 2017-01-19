import React, { PropTypes } from 'react';

const Layout = ({ children }) =>
    <div>
        <h1>Welcome to Material Design Components for React Demonstration</h1>
        {children}
    </div>;
Layout.propTypes = {
    children: PropTypes.any,
};
export default Layout;
