import React, { useState, useEffect } from "react";
import axios from "axios";
import { StarwarsCharCard } from "./components/StarwarsCharCard";
import StarWarsCharPic1 from "./images/Luke Skywalker.jpeg";
import StarWarsCharPic2 from "./images/c3po.png";
import StarWarsCharPic3 from "./images/r2d2.jpg";

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
        <div className="Pictures">
            <img src={StarWarsCharPic1} alt="Luke Skywalker" />
            <img src={StarWarsCharPic2} alt="C3PO" />
            <img src={StarWarsCharPic3} alt="R2D2" />
        </div>
        {starwarsChars.map(charData => {
          return <StarwarsCharCard charData={charData} key={charData.name} />;
        })}
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default App;
