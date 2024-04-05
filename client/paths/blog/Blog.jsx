import React from 'react';
import photo from '../../assets/star-wars.jpg';
import './blog.scss';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper.jsx';

const Blog = () => {
    return (
        <div className='blog'>
            <ContentWrapper>
                <img src={photo} alt=''/>
                <p>Check out Andrea David's website <a href='https://www.filmtourismus.de'>here</a>!</p>
            </ContentWrapper>
        </div>
    );
};

export default Blog;