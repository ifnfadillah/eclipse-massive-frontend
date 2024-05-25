import React from 'react';
import NavbarAdmin from './components/NavbarAdmin';
import Sidebar from './components/Sidebar';

const Layout = ({ children }) => {
    return (
        <>
            <NavbarAdmin />
            <Sidebar />
            <div className="w-full pt-20 lg:pt-24 px-4 sm:px-6 md:px-10 lg:ps-72 flex flex-col space-y-7">
                {children}
            </div>
        </>
    );
}

export default Layout;