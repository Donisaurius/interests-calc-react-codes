import React, { useState , useEffect} from "react";
import Calc from "./Calc.js";
import Result from "./Result.js";

const Content = () => {

  const [isReady,setIsReady] = useState(false);
  const [result,setResult] = useState(null);

  const handleResult = () => {
    setIsReady(true);
    
    setTimeout(() => {
      setIsReady(false);
    }, 5000);
  }

  useEffect(() => {
    console.log(result)
  },[result]);

  return(
    <div className="h-75 d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-center w-100 flex-column">
        <Calc 
          handleResult={handleResult}
          setResult={setResult}
        />
        {
          isReady
          ? <Result years={result.years} count={result.result} />
          : ""
        }
      </div>
    </div>
  )
}

export default Content;