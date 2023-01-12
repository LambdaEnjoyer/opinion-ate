import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/mbT1lXvUZr2GF8dxSLvXbLRySysNOTLz',
});

const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  },
};

export default api;
