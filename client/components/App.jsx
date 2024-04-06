import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchDataFromApi } from '../api.js';
import { getURL } from '../store/homepageSlice.js';

// import React components
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import Home from '../paths/Home.jsx';
import Search from '../paths/search/Search.jsx';
import Details from '../paths/details/MovieDetails.jsx';
import Blog from '../paths/blog/Blog.jsx';

function App() {

    // returns a function that can dispatch action creators
    const dispatch = useDispatch();
    // access URL state from redux store
    const { url } = useSelector((state) => state.homepage);

    useEffect(() => {
        getApiConfig();
    }, []);

    const getApiConfig = () => {
        fetchDataFromApi('/configuration')
          .then((res) => {
            console.log(res);

            // Set url for api call per TMDB docs
            const url = {
                imageLink: res.images.secure_base_url + "original",
            };

            dispatch(getURL(url));
          });
    };

    return (
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search/:query' element={<Search />} />
            <Route path='/:mediaType/:id' element={<Details />} />
            <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
};

export default App;