import React, { useState, useContext } from "react";// Add useState here
import classes from './SignUp.module.css';
import LayOut from '../../Components/LayOut/LayOut';
import { Link,useNavigate, useLocation} from 'react-router-dom';
import { auth } from '../../Utility/firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {ClipLoader } from "react-spinners";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUP: false,
  });
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);

const authHandler = async (e) => {
  e.preventDefault();
  console.log(e.target.name);
  if (e.target.name == "signin") {
    // firebase auth
    setLoading({ ...loading, signIn: true });
    signInWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signIn: false });
        navigate(navStateData?.state?.redirect || "/");
      })
      .catch((err) => {
        setError(err.message);
        setLoading({ ...loading, signIn: false });
      });
  } else {
    setLoading({ ...loading, signUP: true });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signUP: false });
        navigate(navStateData?.state?.redirect || "/");
      })
      .catch((err) => {
        setError(err.message);
        setLoading({ ...loading, signUP: false });
      });
  }
};

  return (

    <section className={classes.login}>
{/* logo */}
<Link>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322"
/>

</Link>

{/* form  */}
<div className={classes.login__container}>
  <h1>Sign In</h1>
  {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}




{/* form action */}
  <form action=''>
<div>
  <label htmlFor="email">Email</label>
{/* controlled input because we get the inputs through useState */}
  <input value={email}  onChange={(e) => setEmail(e.target.value)
  }type="email"
   id="email" />
</div>

<div>
  <label htmlFor="password">Password</label>
  <input value={password}
              onChange={(e) => setPassword(e.target.value)}   //e is for event
              type="password"
              id="password"/>
</div>
{/* Sign In button */}
<button 
type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login__signInButton}>
              {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) :  (
              " Sign In"
            )}
              </button>
              </form>

{/* agreement */}
<p>By continuing, you agree to Amazon's Fake Clone Terms and Conditions of Use and Privacy Notice.Please see our Privacy , Cookies Notice and Interest-Based Ads Notice.</p>

{/* Sign Up button  */}
<button  type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login__registerButton}>
            {loading.signUP ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) :  (
              "    Create your Amazon Account"
            )}
            
            Create your Amazon Account</button>

{error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}   

</div>

    </section>
  
  )
}

export default Auth