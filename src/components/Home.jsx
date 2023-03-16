import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get("https://source.unsplash.com/random")
      .then((response) => {
        setImageUrl(response.request.responseURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div >
      <img src={imageUrl} alt="Random image" height="658vh" width="100%" />
      
    </div>
  );
};

export default Home;
