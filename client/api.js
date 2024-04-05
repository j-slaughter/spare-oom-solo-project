import axios from 'axios';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3';

const DB_TOKEN = process.env.TMDB_TOKEN;

// API request headers as specified by TMDB
const headers = {
    Authorization: "bearer " + DB_TOKEN,

};

// Function to use when making requests to TMDB API
export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    } catch (err) {
        console.log(`Error in fetchDataFromApi func in api.js: ${err}`);
        return err;
    }
};

// Function to save Api response data to state
const dataLoader = (url) => {

    // Initialize empty state variables
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    // Update data saved in state everytime Api request url changes
    useEffect(() => {
        // Reset state to 'loading' stage
        setLoading(true);
        setData(null);
        setError(null);

        // Fetch data from Api
        fetchDataFromApi(url)
          .then((res) => {
            setLoading(false);
            setData(res);
          })
          .catch((err) => {
            setLoading(false);
            setError(`Error loading data: ${err}`);
          });

    }, [url]);

    return { data, loading, error };
};

export default dataLoader;