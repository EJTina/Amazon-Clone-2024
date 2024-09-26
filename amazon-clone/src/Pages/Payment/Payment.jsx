import React,{useContext,useState} from 'react'
import classes from './Payment.module.css'
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import LayOut from '../../Components/LayOut/LayOut'
import { ClipLoader } from "react-spinners";
import { DataContext } from '../../Components/DataProvider/DataProvider'  
import ProductCard from "../../Components/Product/ProductCard";
import {useStripe, 
  useElements,
  CardElement}
  from '@stripe/react-stripe-js';
import { axiosInstance } from '../../API/axios'
import {db} from '../../Utility/firebase'
import { useNavigate } from "react-router-dom";
import {Type} from '../../Utility/action.type'
  

function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  console.log(user);

  // {total items}
  const totalItem = basket?.reduce((amount, item) =>{
    return item.amount + amount}, 0);

  // {total price}
  const total = basket.reduce((amount,item)=>{
    return item.price * item.amount + amount
  },0)

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);


  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  
  const handleChange = (e) => {
    // console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setProcessing(true);


         // Step1.Here we try contact the  backend ||(or) our functions --->  to the client secret
      const response = await axiosInstance({
        method: "POST",
        url: `/payments/create?total=${total*100}`,
      });

      // console.log(response.data);
      const clientSecret = response.data?.clientSecret;

       // Step2. We will get a client side or (react side )confirmation(looking for payment method)using stripe
      const {paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      // console.log(paymentIntent);

            // Step3. after the confirmation --> We save what we have (items in the basket) on fireStore database and then  the basket will clear 
// means after we pay the basket will be empty and the items will be saved on fireStore database 

await db
.collection("users")
.doc(user.uid)
.collection("orders")
.doc(paymentIntent.id)
.set({
  basket: basket,
  amount: paymentIntent.amount,
  created: paymentIntent.created,
});

   // To make sure that the basket will be empty after the payment is done
  dispatch({ type: Type.EMPTY_BASKET });


      setProcessing(false);
      navigate("/orders", { state: { msg: "you have placed new Order" } });
    } 
    catch (error) {
      console.log(error);
      setProcessing(false);
    }
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
              <form onSubmit={handlePayment}>

                {/* error */}
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

                  <button type ="submit">
                  {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please Wait ...</p>
                      </div>
                    ) : (
                      " Pay Now"
                    )}
                    </button>
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