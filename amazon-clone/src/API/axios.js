import axios from "axios";


const axiosInstance = axios.create({
    // local instance of firebase function
    baseURL: "http://127.0.0.1:5001/clone-872d5/us-central1/api",

    // deployed version of firebase function
    //<<<<<<<<<<<Missing  URL>>>>>>> 


    // deployed version of amazon server on render.com
    baseURL: "https://amazon-backend-deploy-9ka4.onrender.com/"

});

    export { axiosInstance };