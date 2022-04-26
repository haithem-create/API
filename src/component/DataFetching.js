import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const DataFetching = () => {
  const [places, setplaces] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setplaces(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="data-style">
      {places.map((place) => (
        <Card place={place} />
      ))}
    </div>
  );
};

export default DataFetching;
