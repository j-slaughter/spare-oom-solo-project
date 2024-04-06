import React from 'react';
import ContentWrapper from '../contentWrapper/ContentWrapper.jsx';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <ContentWrapper>
                <ul className='menuItems'>
                    <li className='menuItem'>Terms of Use</li>
                    <li className='menuItem'>Privacy Policy</li>
                </ul>
                <div className='infoText'>
                    The Spare Oom is not responsible for any dangerous quests, 
                    witches' curses, firebreathing dragons, kidnapped loved ones, etc. encountered at 
                    various destinations.
                </div>
                <div className='socialIcons'>
                    <span className='icon'><FaFacebookF /></span>
                    <span className='icon'><FaInstagram /></span>
                    <span className='icon'><FaTwitter /></span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;