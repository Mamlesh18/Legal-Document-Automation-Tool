import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Welcome() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/resume')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to the Welcome Page!</h1>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <p>Detail {index + 1}:</p>
            <p>First Name: {item.name}</p>
            <p>Last Name: {item.phone}</p>
            <p>Email: {item.email}</p>
            <p>Password: {item.dob}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Welcome;
