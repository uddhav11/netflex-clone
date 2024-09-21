import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";



export const fetchFromTMDB = async (url) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: 'Bearer ' + ENV_VARS.TMDB_API_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);

    if (response.status !== 200) {
      console.log('Could not get trending:', response.statusText);
      throw new Error('Failed to fetch data from TMDB API: ' + response.statusText);
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching data from TMDB:', error.message);
    throw error;
  }
};
