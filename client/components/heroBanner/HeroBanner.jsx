import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './heroBanner.scss';

const HeroBanner = () => {

    // Allows navigation to a pathway
    const navigate = useNavigate();

    const { url } = useSelector((state) => state.homepage);

    // Set initial state for the hero banner
    const [query, setQuery] = useState("");
    const [background, setBackground] = useState("");

    // Handle search queries
    const searchQuery = (event) => {
        if (event.key === 'Enter' && query.length > 0) {
            navigate(`/search/${query}`);
        }
        else if (event.type === 'click' && query.length > 0) {
            navigate(`search/${query}`);
        };
    };

    // Fetch background image from database

    return (
        <div className='heroBanner'>
            <div className='wrapper'>
                <div className='heroBannerContent'>
                    <span className='title'>The Spare Oom</span>
                    <span className='subTitle'>Escape into your film fantasy destinations. 
                    Discover the real-life places of your favorite movies.</span>
                    <div className='searchInput'>
                        <input type='text' placeholder='Search for your escape...' 
                        onKeyUp={searchQuery} onChange={(e) => setQuery(e.target.value)}></input>
                        <button onClick={searchQuery}>Enter the wardrobe!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;