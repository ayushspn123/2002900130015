
import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/train';

// Function to register the company and obtain the access token
export const registerCompanyAndGetAccessToken = async (registrationData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, registrationData);
    const accessToken = response.data.accessToken;
    return accessToken;
  } catch (error) {
    throw new Error('Error registering the company: ' + error.message);
  }
};

// Function to fetch all train data
export const getAllTrains = async (accessToken) => {
  try {
    const response = await axios.get(`${BASE_URL}/all`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching train data: ' + error.message);
  }
};

// Function to fetch details of a specific train
export const getTrainDetails = async (trainNumber, accessToken) => {
  try {
    const response = await axios.get(`${BASE_URL}/${trainNumber}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching train details: ' + error.message);
  }
};