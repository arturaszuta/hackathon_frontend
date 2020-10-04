import axios from 'axios';

const server = axios.create({
  baseURL: 'http://localhost:3002/api',
});

const getEmissions = (province = null) => server.get(`/finaldata/emissions${province ? '?province=' + province : ''}`);
const getOdiac = (province = null) => server.get(`/finaldata/odiac${province ? '?province=' + province : ''}`);

export default {
  getEmissions,
  getOdiac
};