import axios from 'axios';
import { useState, useEffect } from 'react';

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,CHF,GBP");
        const { rates, date } = await response.data;

        setRatesData({
          state: "success",
          rates,
          date,
        });
      }
      catch {
        setRatesData({
          state: "error",
        });
      }
    };
    
    setTimeout(fetchData, 1000);
  }, []);

  return ratesData;
};