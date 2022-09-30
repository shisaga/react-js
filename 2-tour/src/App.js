import React, { useInsertionEffect, useReducer, useState } from "react";
import { useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
var url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setloader] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTours = (id)=>{
    const newtours =tours.filter((tour) => tour.id !==id);
    setTours(newtours);
  }


  const fetch_tour = async () => {
    setloader(true);
    const setheader = {
      Headers: {
        Accept: "application/json",
      },
    };
    try {
      const Response = await fetch(url, setheader);
      const data = await Response.json();
      setloader(false);
      setTours(data);
      // console.log(data);
    } catch (err) {
      // console.log(err);
      setloader(false);
    }
  };

  useEffect(() => {
    fetch_tour();
  }, []);

  if (loading) {
    return (
      <>
        <main>
          <Loading></Loading>
        </main>
      </>
    );
  } 
  if( tours.length ===0){
    return(<>
      <><div className="title">
        <h2>on tours left</h2>
      </div></>
    </>);


  }
  else {
    return (
      <>
        <main>
          <Tours tours= {tours}  removeTours={ removeTours}></Tours>
        </main>
      </>
    );
  }
};

export default App;
