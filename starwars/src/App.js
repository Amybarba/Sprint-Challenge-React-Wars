import React, { useState, useEffect } from "react";
import axios from "axios";
import {StarwarsCharCard} from "./components/StarwarsCharCard";


const App = () => {
  const [starwarsChars, setStarwarsChars] = useState(null);
  console.log();

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/?page=1")
      .then(res => {
        console.log(res);
        console.log("axios data:", res.data);
        setStarwarsChars(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  if (starwarsChars) {
    return (
      <div className="App">
        <h1 className="Header">I LOVE Star Wars Characters</h1>
       {starwarsChars.map(charData => {
         return (
           <StarwarsCharCard charData={charData} key={charData.name}/>
         )
       })}

      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default App;
