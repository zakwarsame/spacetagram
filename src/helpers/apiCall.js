import axios from "axios";

const nasaURL = process.env.REACT_APP_NASA_URL;
const nasaApiKey = process.env.REACT_APP_NASA_KEY;

axios.interceptors.request.use(
  (config) => {
    config.params = config.params ? config.params : {};
    const configUrl = config.url;
    if (configUrl.includes(nasaURL)) {
      config.params["api_key"] = nasaApiKey;
      config.params["count"] = 10;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


const apodExportData = {
  getApod() {
    return axios.get(`${nasaURL}planetary/apod`);
  },
};

export default apodExportData;
