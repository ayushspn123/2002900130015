import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch all trains from the API and set the state
    const fetchTrains = async () => {
      try {
        const response = await axios.get('API_ENDPOINT_URL');
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, []);

  // Implement sorting logic here based on the specified criteria (price, tickets, departure time)

  return (
    <div>
      {/* Display the list of trains here */}
    </div>
  );
};

export default AllTrains;
