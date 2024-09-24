import React,{useContext,useState} from 'react'
import classes from './Payment.module.css'
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'  
import ProductCard from "../../Components/Product/ProductCard";
import {useStripe, 
  useElements,
  CardElement}
   from '@stripe/react-stripe-js';
   

function Payment() {
  const [{ user, basket }] = useContext(DataContext);

  // {total items}
  const totalItem = basket?.reduce((amount, item) =>
    item.amount + amount, 0);

  // {total price}
  const total = basket.reduce((amount,item)=>{
    return item.price * item.amount + amount
  },0)

  const [cardError, setCardError] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  // Move handleChange here
  const handleChange = (e) => {
    console.log(e);   
    e?.error?.message? setCardError(e?.error?.message) : setCardError("");
  };

  return (
    <LayOut>
      {/* Header */}
      <div className={classes.payment__header}>
        Please Checkout ({totalItem}) items
      </div>

      {/* Payment method */}
      <section className={classes.payment}>
        {/* Address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>1820 React PL SW</div>
            <div>Lynnwood, WA</div>
          </div>
        </div>
        <hr />

        {/* Products */}
        <div className={classes.flex}>
          <h3>Review items and delivery address</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} key={item.id} />
            ))}
          </div>
        </div>
        <hr />

        {/* Card form */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form action=''>

                
                {cardError && <small style={{ color: "red" }}>{cardError}</small>}
                {/* Ensure handleChange is defined above */}

                {/* Card Element */}
                <CardElement onChange={handleChange} />

                 {/* price */}
                <div className={classes.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      Total Order | <CurrencyFormat amount={total} />
                    </span>
                  </div>

                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;