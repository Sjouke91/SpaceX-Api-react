import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SpaceDataFetch() {
  const [LatestData, setLatestData] = useState();

  useEffect(() => {
    async function getData() {
      console.log("Im going to fetch data");
      const response = await axios.get(
        "https://api.spacexdata.com/v2/launches"
      );
      console.log(response.data);
      setLatestData(response.data);
    }
    getData();
  }, []);
  return <div>{/* <h1>{LatestData.name}</h1> */}</div>;
}

console.log("I'm run");
