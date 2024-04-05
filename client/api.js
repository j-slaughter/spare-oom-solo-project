import axios from 'axios';

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