import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "./components/Products";
import styles from "./App.module.css"; // Import the CSS module

const App = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [data, setData] = useState([]);

// Update your fetchData function in App.js
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products?page=${page}&limit=${limit}`
        );
        setData(response.data.data); // Set data to response.data.data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, limit]);



  return (
    <div className={styles.container}>
      <Products data={data} setPage={setPage} setLimit={setLimit} />
    </div>
  );
};

export default App;
