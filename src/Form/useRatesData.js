import axios from 'axios';
import { useState, useEffect } from 'react';

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,CHF,GBP");
        const { rates, date } = await response.data;

        setRatesData({
          status: "success",
          rates,
          date,
        });
      }
      catch {
        setRatesData({
          status: "error",
        });
      }
    };
    
    setTimeout(fetchData, 1000);
  }, []);

  return ratesData;
};