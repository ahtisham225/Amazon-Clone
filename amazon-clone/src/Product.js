import React from "react";
import './Product.css'

function Product({id, title, image, price, rating}){
    return (
        <div className="product">
            {/* <div className="product_image"> */}
            <img className="product_image" src={image}></img>
            {/* </div> */}
            <p className="nameOfProduct">{title}</p>
            <p className="product_price">
                <strong> $$ </strong>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {
                    Array(rating).fill().map((_)=>(
                        <p>⭐</p>
                    ))}
            </div>
            <button>Add to Cart</button>
        </div>
    )
}
export default Product;