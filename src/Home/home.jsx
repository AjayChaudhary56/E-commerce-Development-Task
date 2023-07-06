import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import { Link } from "react-router-dom";

import { BeatLoader } from "react-spinners";



const Home = () => {
  const [myData, setMyData] = useState([]);
  // const [isError, setIsError] = useState("");
  const [loading,setLoading]=useState(false)
  const getApiData = async () => {
    setLoading(true)
    try {
      const res = await
       axios.get("https://fakestoreapi.com/products");
      setMyData(res.data);
       setLoading(false)
      console.log(myData);
    } catch (error) {
      // setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  },[]);

  return (
    <div className="cards">

      {loading ? <BeatLoader id="loader" color="#36d7b7" /> :
      //  isError !== "" && <h2>{isError}</h2>
      
        myData.map((post) => {
          const { id, title, price, image } = post;
          return (<Link   to={`/detail/${id}`}> 
            <div className="card-main" key={id}>
              <img src={image} alt="tshirt" />
              <div className="card-name">{title}</div>
              <div className="card-price">Rs.{price}</div>
              
    
              {/* <button >Add to Cart</button> */}
            </div>
            </Link>
          );
        })
       
      }
      
    </div>
  );
};

export default Home;
