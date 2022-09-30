import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [index, setindex] = useState(0);
  const { name, job, image, text } = people[index];
  console.log(people.length - 1);
  console.log(people);

  const nextperson = () => {
    if (index === people.length - 1) {
      let btn = document.getElementById("btn");
      btn.disabled = true;
    } else {
      setindex((index) => {
        let newIndex = index + 1;
        return newIndex;
      });
    }
  };

  const prevperson = () => {

    if (index === 0) {
      let btn = document.getElementById("btn");
      btn.disabled = true;
    } else {
      setindex((index) => {
          
      let newIndex = index -1;
      return newIndex
 
      });
    }

  
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" id="btn" onClick={prevperson}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className="prev-btn" onClick={nextperson}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
    </article>
  );
};

export default Review;
