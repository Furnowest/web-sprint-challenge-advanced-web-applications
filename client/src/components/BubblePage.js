import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

function BubblePage() {
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .get("http://localhost:5000/api/bubbles")
      .then((res) => {
        setColorList(res.data);
      })
      .catch((error) => {
        console.error("Server Error", error);
      });
  }, []);

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
