import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div>Este TEXTO representa a la nav bar la cual deve crearse como componente</div>
            <Outlet />
        </div>
    );
};

export default Layout;