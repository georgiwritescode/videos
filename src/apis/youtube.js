import axios from 'axios';

const API_KEY = 'AIzaSyDWk958Ypt7sL1RlbzC0Z3La_IWqaCkTd8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
    }
});