import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons' 

const NavBar = () => {
    return (
        <nav className="navbar sticky-top bg-dark" data-bs-theme="dark">
            <div className='container-fluid'>
                <Link to='/productos' className='navbar-brand'>
                    <Icon.Basket2Fill size='36' />
                    <span className='mx-3'>Mis Productos</span>
                </Link>
            </div>
        </nav >
    );
};

export default NavBar;