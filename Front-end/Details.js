import React, { useEffect, useState } from 'react';
import { getCall, apiEndpoint } from './components/utils/api';

const Top10Details = () => {
  const [top10Data, setTop10Data] = useState([]);

  useEffect(() => {
    const fetchTop10Details = async () => {
      try {
        let res = await getCall('Details');
        setTop10Data(res.data.data);
      } catch (error) {
        console.error('Error fetching top 10 details:', error);
      }
    };

    fetchTop10Details();
  }, []);

  return (
    <div>
      <h2>Top 10 Details</h2>
      <ul>
        {top10Data.map((detail) => (
          <li key={detail._id}>
            <strong>Name:</strong> {detail.name} <br />
            <strong>Email:</strong> {detail.email} <br />
            <strong>Phone:</strong> {detail.phone} <br />
            <strong>State:</strong> {detail.state} <br />
            <strong>Job:</strong> {detail.job} <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Top10Details;
