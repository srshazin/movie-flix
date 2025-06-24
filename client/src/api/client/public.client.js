import axios from "axios";
import queryString from "query-string";

const baseURL = "https://api.themoviedb.org/3";

const publicClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: (params) => queryString.stringify(params),
  },
});

publicClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjEzYmY1ZWIzZjc3ZTYwNWEzNGZhMTQ2ODk3ZTc4NyIsIm5iZiI6MTc1MDQzNTk0NS4wOTIsInN1YiI6IjY4NTU4ODY5NzhjYWNkYWE4YzFlMjZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oVAn_Ia7RLd1x2XvVrFl_NeSbjag1bPXqdEf_mrtMJk",
    },
  };
});

publicClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    throw err.response.data;
  }
);

export default publicClient;
