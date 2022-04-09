import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <nav className='header sticky top-0 z-50'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                {
                    user && 
                    <Link to="/shipping">Shipping</Link> 
                }
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ? <span onClick={() =>  signOut(auth)}>Log Out ({user?.displayName || user?.email})</span> :  <Link to="/login">Log In</Link>
                }
               
                
            </div>
        </nav>
    );
};

export default Header;