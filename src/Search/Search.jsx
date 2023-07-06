import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./search.css";
import CartContext from "../context/CartContext";
import Scrollbars from "react-custom-scrollbars-2";
function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProducts();
  }, []);

  const { setCartItems, cartItems } = useContext(CartContext);

  const handleAddToCart = (productDetails) => {
    const selectedItem =
      cartItems &&
      cartItems.find((product) => product.id === productDetails.productId);

    if (selectedItem) {
      return;
    }

    const _cartItems = [...cartItems, { ...productDetails, quantity: 1 }];

    setCartItems(_cartItems);
  };
  const handleSearch = () => {
    const filteredResults = products.filter((product) => {
      const nameMatch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const descriptionMatch = product.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return nameMatch || descriptionMatch;
    });
    setSearchResults(filteredResults);
  };

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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Item Names or Keyword"
          />
          <button id="search" onClick={handleSearch}>
            Search
          </button>
          </div>
        <div className="search-product">
          
          {searchResults.map((product) => (
            
            <div className="detail-main">
              
              <div className="detail-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-detail">
                <div className="product-title">{product.title}</div>
                <div className="product-category">
                  Category: {product.category}
                </div>
                <div className="product-description">{product.description}</div>
                <div className="product-price">Rs.{product.price}</div>
                <button
                  onClick={() =>
                    handleAddToCart({
                      productId: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
         
        </div>
      
    </div>
  );
}

export default Search;
