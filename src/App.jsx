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

        //check if the response from the API fetch is ok, if not throw a error that reports the response status
        if (!res.ok) {
          throw new Error(`HTTP ERROR! status: ${res.status}`);
        }

        const data = await res.json();
        setState(data);
      } catch (err) {
        //catch for if data fetch is not successful, then error message will be displayed in the console.
        console.error("Error: Data Fetching Failed");
        setError("Error: Data Fetch Failed");
      }
    };
    fetchData();
    //useEffect set to only fetch data at initial page load
  }, []);

  //render data
  return state.map((item) => (
    <div key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </div>
  ));
}

export default App;
