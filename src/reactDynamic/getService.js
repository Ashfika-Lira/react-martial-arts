import { useEffect, useState } from "react";

const GetService = () => {
   const [servicesAll, setServices] = useState([])

   useEffect(() => {
      fetch('./servicesAll.JSON')
         .then(res => res.json())
         .then(data => setServices(data));
   }, []);
   return servicesAll
};
export default GetService

