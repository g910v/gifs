import axios from 'axios';

const baseApiUrl = `${import.meta.env.VITE_API_URL}/gifs`;

export const apiUrls = Object.freeze({
  trendingApiUrl: `${baseApiUrl}/trending`,
  searchApiUrl: `${baseApiUrl}/search`,
  randomApiUrl: `${baseApiUrl}/random`,
});

export default axios.create({
  params: {
    api_key: '1uRBvGj3hMzMRdbDA19Z1Q5RSU5bRQhA',
  },
});
