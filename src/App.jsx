import { useState, useEffect } from "react";

function App() {
  //set data state
  const [state, setState] = useState([]);
  //set error state
  const [error, setError] = useState(null);

  useEffect(() => {
    //async function placed inside variable
    const fetchData = async () => {
      //try to fetch data
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setState(data);
      } catch (err) {
        //catch for if data fetch is not successful, then error message will be displayed in the console.
        console.error("Error: Data Fetching Failed");
      }
    };
    fetchData();
    //useEffect set to only fetch data at initial page load
  }, []);
}

export default App;
