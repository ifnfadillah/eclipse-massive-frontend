import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import NavbarAdmin from '@/admin/components/NavbarAdmin';
import Sidebar from '@/admin/components/Sidebar';

const Layout = () => {
    return (
        <div>
            <NavbarAdmin />
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;