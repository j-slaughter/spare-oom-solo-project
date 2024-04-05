import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './heroBanner.scss';

import Img from '../imageLoader/Img.jsx';
import ContentWrapper from '../contentWrapper/ContentWrapper.jsx';

// import to save data to store state
import dataLoader from '../../api.js';

const HeroBanner = () => {

    // Allows navigation to a pathway
    const navigate = useNavigate();

    const { url } = useSelector((state) => state.homepage);
    const { data, loading } = dataLoader("/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=14&with_original_language=en&without_genres=16");

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
    useEffect(() => {
        const bgImage = url.imageLink + data?.results?.[Math.floor(Math.random() * 21)]?.backdrop_path;
        setBackground(bgImage);
    }, [data]);

    return (
        <div className='heroBanner'>
            {!loading && <div className='backdrop-img'>
                <Img src={background} />
            </div>}
            <div className='opacity-layer'></div>
            <ContentWrapper>
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
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;