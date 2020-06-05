import React, { useState, useEffect } from "react";
import axios from "axios";

const Portfolio = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    await axios
      .get("http://localhost:1337/portfolios")
      .then((res) => setItems(res.data))
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div>
      <h1>Portfolios</h1>
      {items.map((item) => (
        <div key={item.id} style={{ backgroundColor: item.background }}>
          <div>{item.title}</div>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
