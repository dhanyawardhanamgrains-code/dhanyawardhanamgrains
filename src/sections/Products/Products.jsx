import React from "react";
import "./Products.css";
import { productsData } from "../../data/products";

const Products = () => {
  return (
    <>
      <div id="products" className="products-section-container">
        <div className="products-container">
          <div className="products-text-container">
            <h1>Our Products</h1>
            <p>
              Premium rice varieties processed with advanced technology to
              retain nutrition, aroma, and taste
            </p>
          </div>
          <div className="products-card-container">
            {productsData.map((products, index) => {
              return (
                <div key={products.id} className="product-card">
                  <div className="product-card-text">
                    <h1>{products.title}</h1>
                    <p>{products.description}</p>
                  </div>
                  <div className="product-card-details">
                    <div className="product-card-details-varieties">
                      {products.varieties.map((variety, index) => {
                        return (
                          <div
                            key={`${variety}-${index}`}
                            className="product-card-details-varieties-item"
                          >
                            <p>{variety}</p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="product-card-details-process">
                      {products.processType.map((process, index) => {
                        return (
                          <div
                            key={`${process}-${index}`}
                            className="product-card-details-process-item"
                          >
                            <p>{process}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
