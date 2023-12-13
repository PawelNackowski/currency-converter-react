import axios from 'axios';
import { useState, useEffect } from 'react';

const API_KEY = "aa4376feeda15ac6015fe24e";
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/PLN`;

const targetCurrency = ["EUR", "PLN", "USD", "GBP"]

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        const { conversion_rates }= await response.data;

        const filterData = Object.fromEntries(
          Object.entries(conversion_rates).filter(([currency]) => 
          targetCurrency.includes(currency) )
        ); 

        setRatesData({
          status: "success",
          conversion_rates: filterData, 
        });
      }
      catch (error) {
        console.log(error);
        setRatesData({
          status: "error",
        });
      }
    };
    
    setTimeout(fetchData, 1000);
  }, []);

  return ratesData;
};