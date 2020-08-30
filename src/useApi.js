import { useState, useEffect } from "react";


const API_KEY = "AIzaSyDQy4uHWf9Ik6TMDmWDsixi1UZA680oklM";
/* const query = "channels"; */
/* const part = "brandingSettings, statistics,snippet"; */

const useApi = (term, query, part,type, parameter) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        /*  `https://www.googleapis.com/youtube/v3/search?part=${part}&maxResults=8&q=${term}&type=video&key=${API_KEY}` */

        
        `https://www.googleapis.com/youtube/v3/${query}?part=${part}&maxResults=8&${parameter}=${term}&type=${type}&key=${API_KEY}`,
        
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


        

