import React, { useState } from 'react';
import Header from './components/Front/header';
import Filter from './components/Front/filter';

function FrontPage() {
  const [filterData, setFilterData] = useState([]);

  const updateFilterData = (data) => {
    setFilterData(data);
  };

  return (
    <div>
      <Header updateFilterData={updateFilterData} />
      <Filter filterData={filterData} />
    </div>
  );
}

export default FrontPage;
