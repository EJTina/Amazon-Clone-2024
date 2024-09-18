import React from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css';

function ProductCard({ product, addToCart }) {
  const { image, title, id, rating, price, description } = product;

  return (
    <div className={classes.card__container}>
      <a href="#">
        <img src={image} alt={title} />
      </a>

      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} readOnly />
          <small>({rating?.count})</small>
        </div>

        <div>
          <CurrencyFormat amount={price} />
        </div>

        <button className={classes.button} onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default ProductCard;