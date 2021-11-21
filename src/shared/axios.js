import axios from "axios";

const lmsAPIHostProd = "https://api/lms.net"; //for production
const lmsAPIHostDev = "https://mern-backend-sanda.herokuapp.com"; // for development

const lmsAPIHost = process.env.NODE_ENV === "development" ? lmsAPIHostDev : lmsAPIHostProd;

const instance = axios.create({
    baseURL: lmsAPIHost
});

export default instance;