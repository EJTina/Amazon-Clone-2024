import { useEffect, useContext } from "react";
import { DataContext } from './Components/DataProvider/DataProvider.jsx'; // <-- Import DataContext
import Routing from './Router.jsx';
import './App.css';
import { auth } from "./Utility/firebase.js";
import { Type } from "./Utility/action.type.js";



function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({ 
          type: Type.SET_USER, 
          user: null });
      }
    });
  }, []);
  return (
    <Routing/>
  );
}

export default App;
