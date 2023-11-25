import { useEffect } from "react";

const GLOBAL_CONSTANTS = {
  backend_url: import.meta.env.VITE_BACKEND_API_URL,
  time_limit:30,
  time_warn:10,
  loggedIn:JSON.parse(localStorage?.getItem("user_data")) ? true : false,
  user_cred:JSON.parse(localStorage?.getItem("user_data"))?.data 
};

export default GLOBAL_CONSTANTS;