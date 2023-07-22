import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleTrain = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch the specific train data from the API using trainId and set the state
    const fetchTrain = async () => {
      try {
        const response = await axios.get(`API_ENDPOINT_URL/${trainId}`);
        setTrain(response.data);
      } catch (error) {
        console.error('Error fetching train:', error);
      }
    };

    fetchTrain();
  }, [trainId]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Display detailed information about the train here */}
    </div>
  );
};

export default SingleTrain;
