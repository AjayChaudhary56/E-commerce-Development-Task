import React, { useState } from "react";
import "./search.css";




const Search = () => {
  const [data, setData] = useState("");
  const handleData = (e) => {
    setData(e.target.value);
  };
 const handleSearch=()=>{
  console.log("Searching for "+ data )
 }




  return (
    <div className="search-main">
      <div className="search-title">
        Explore and uncover, at Online Store, the ultimate shop lover!
      </div>
      <div className="search-desc">
        We, at Online Store, pride ourselves on being an innovative and
        user-friendly e-commerce platform that revolutionizes the way you shop.
        With an extensive selection of products across diverse categories, we
        strive to provide you with a seamless and convenient shopping
        experience. From fashion-forward apparel to cutting-edge electronics,
        from essential home goods to unique gifts, we cater to all your needs.
        Our intuitive interface and secure payment options ensure a smooth and
        worry-free transaction process. With reliable shipping and efficient
        delivery services, we guarantee your satisfaction. Join us in embracing
        the joy of online shopping and discover the endless possibilities that
        await you at Online Store. Start exploring today and unlock a world of
        shopping delights!
      </div>
      <div className="search-input">
        <input
          type="text"
          value={data}
          onChange={handleData}
          placeholder="Item Names or Keyword"
        />
        <button id="search" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
