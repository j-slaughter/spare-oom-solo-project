import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.scss';

import ContentWrapper from '../contentWrapper/ContentWrapper.jsx';
import logo from '../../assets/wardrobe-logo.png';

const Header = () => {
    
    const navigate = useNavigate();

    return (
        <header className='header'>
            <ContentWrapper>
                <div className='logo' onClick={() => navigate('/')}>
                    <img src={logo} alt='' />
                </div>
                <ul className='menuItems'>
                    <li className='menuItem'>Login</li>
                    <li className='menuItem' onClick={() => navigate('/blog')}>Blog</li>
                </ul>
            </ContentWrapper>
        </header>
    );
};

export default Header;