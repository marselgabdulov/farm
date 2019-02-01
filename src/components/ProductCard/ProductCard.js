import React from 'react'
import './ProductCard.css'

const ProductCard = props => (
  <div className="product-card">
    {/* <div className="product-card__icon">
      <img src={props.icon} alt="icon" />
    </div> */}
    <h3 className="product-card__title">{props.productTitle}</h3>
    <div className="product-card__description">
      {props.description.map((item, index) => (
        <span className="product__position" key={index}>
          {item.name} - {item.price} &#8381; за {item.measure}
        </span>
      ))}
    </div>
  </div>
)

export default ProductCard
