import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_BFF_API_URL,
  responseType: "json",
});

httpClient.interceptors.request.use(async (config) => {
  const newConfig = {
    ...config,
  };
  // Example for when using a token to each request
  // const token = await getToken()
  // newConfig.headers.Authorization = `Bearer ${token}`
  return newConfig;
});

export default httpClient;
