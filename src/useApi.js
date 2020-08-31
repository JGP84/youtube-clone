import { useState, useEffect } from "react";

const API_KEY = "AIzaSyBLOPd668u0VOleB5v3BLtCanpmj8VMV3s";

const useApi = (term, query, part, type, parameter) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/youtube/v3/${query}?part=${part}&maxResults=8&${parameter}=${term}&type=${type}&key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term, query, part, type, parameter]);

  return { data };
};

export default useApi;
