import axios from "axios";
import { useState,useEffect } from "react";

export const  getArticle=(url)=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        axios.get(url)
  .then(function (response) {
    setLoading(false);
    setData(response.data);
  })
  .catch(function (error) {
            console.log(error);
            setError(true)
            setLoading(false);
         });
    }, []);
    return {data,loading,error};
  }