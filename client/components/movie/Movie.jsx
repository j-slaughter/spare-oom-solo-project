import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Img from '../Img.jsx';

import './movie.scss';

const Movie = ({ data }) => {

    const { url } = useSelector((state) => state.homepage);
    const navigate = useNavigate();
    const posterURL = url.imageLink + data.poster_path;

    return (
        <div className='movieCard' onClick={() => navigate(`/movie/${data.id}`)}>
            <div className='posterBlock'>
                <Img className='posterImg' src={posterURL}/>
            </div>
            <div className='textBlock'>
                <span className='title'>{data.title || data.name}</span>
            </div>
        </div>
    );
};

export default Movie;