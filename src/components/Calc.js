import React,{useState} from "react";
import { calcInterest } from "../helpers/calcInterest";
import "../styles/Calc.css";

const Calc = ({handleResult,setResult}) => {

  const initialValues = {
    depo: "",
    contribution: "",
    years: "",
    interest: "",
    result: ""
  }

  const [calcData,setCalcData] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = calcInterest(calcData.depo,calcData.contribution,calcData.years,calcData.interest);
    console.log(val);

    setCalcData(initialValues);
    handleResult();
    setResult({
      ...calcData,
      result: val
    });

  }

  const handleChange = (e) => {
    let {value,name} = e.target;

    setCalcData({
      ...calcData,
      [name]: value
    });
    
  }

  return(
    <form 
    className="w-75 mx-auto h-100 d-flex flex-column align-items-start p-4 border-top shadow calc-form"
    onSubmit={handleSubmit}
    >
      <label 
      htmlFor="depo" 
      className="fs-6"
      >Initial deposit</label>
      <input
        type="number"
        id="depo"
        name="depo"
        value={calcData.depo}
        onChange={handleChange}
        required 
        className="rounded w-100 mb-3 form-control bg-dark text-light"
        />
      <label 
      htmlFor="contribution"
      className="fs-6"
      >Anual contribution</label>
      <input
        type="number"
        id="contribution" 
        name="contribution" 
        value={calcData.contribution}
        onChange={handleChange}
        required
        className="rounded w-100 mb-3 form-control bg-dark text-light"
        />
      <label 
      htmlFor="years"
      className="fs-6"
      >Years</label>
      <input
        type="number"
        id="years"
        name="years"
        value={calcData.years}
        onChange={handleChange}
        required
        className="rounded w-100 mb-3 form-control bg-dark text-light"
        />
      <label 
      htmlFor="interest"
      className="fs-6"
      >Interest</label>
      <input
        type="text"
        id="interest"
        name="interest"
        value={calcData.interest}
        onChange={handleChange}
        required
        className="rounded w-100 mb-3 form-control bg-dark text-light"
        />
      <input 
        type="submit"
        id="submit-btn"
        value="SEND"
        className="btn btn-dark rounded p-0 align-self-end form-text w-25 text-warning"
       />
    </form>
  )
}

export default Calc;