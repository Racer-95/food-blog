"use client";

import React, { useEffect, useState, createContext } from 'react';

export const foodContext = createContext();

function DataFetcher({children}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData(); 
  }, []);
   return (
    <foodContext.Provider value={data}>
        {children}
    </foodContext.Provider>
   )
}

export default DataFetcher;
