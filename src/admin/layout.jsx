import React from 'react';
import NavbarAdmin from './components/NavbarAdmin';
import Sidebar from './components/Sidebar';

const Layout = ({ children }) => {
    return (
        <>
            <NavbarAdmin />
            <Sidebar />
            {children}
        </>
    );
}

export default Layout;