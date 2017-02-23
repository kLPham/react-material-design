import React, { PropTypes } from 'react';

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
