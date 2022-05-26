import React from "react";

const Result = ({years,count}) => {

  years = Number(years);

  let time = (years === 1) ? "year" : "years"; 

  return(
    <div className="w-100 bg-success text-center text-light fixed-bottom display-3">
      <p>{`In ${years} ${time} you will have: ${count}.`}</p>
    </div>
  )
}

export default Result;