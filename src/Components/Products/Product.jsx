import React from "react";
import "./_products.scss";

const Product = () => {
  const productData = [
    { pName: "Jacket", price: 50, img: "shop-1.jpg" },
    { pName: "Purse", price: 40, img: "shop-2.jpg" },
    { pName: "Dress", price: 88, img: "shop-3.jpg" },
    { pName: "Denim Jeans", price: 179, img: "shop-4.jpg" },
    { pName: "Boots", price: 90, img: "shop-5.jpg" },
    { pName: "Bag", price: 20, img: "shop-6.jpg" },
  ];
  return (
    <div className="products-container">
      {productData.map((product, key) => {
        return (
          <div className="mx-5 p-3  product-card">
            <div className="product-image-container">
              <img
                src={require("../../assets/images/shop/" + product.img)}
                alt="shop1"
              ></img>
            </div>
            <div className="product-info">
              <h5>
                <a href="#">{product.pName}</a>
              </h5>
              <p className="product-price">${product.price}</p>
              <div className="product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
