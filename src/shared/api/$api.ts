import axios, { AxiosInstance } from 'axios';

export const $api: AxiosInstance = axios.create({
  baseURL: 'https://ott-details.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST,
  },
});
