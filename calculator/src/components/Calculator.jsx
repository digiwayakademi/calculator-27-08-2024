import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);



    const handleNumber1Change = (e) => {
        setNumber1(Number(e.target.value));
    }

    const handleNumber2Change = (e) => {
        setNumber2(Number(e.target.value));
    }

    const handleAddition = () => {
        setResult(number1 + number2);
    }


  return (
    <div className="calculator-container">
        <h1>useState</h1>
        <div className="form-container">
           <div className="form-group">
                <label htmlFor="number1" className="form-label">Number1</label>
                <input type="number" className="form-input" id="number1" onChange={handleNumber1Change} value={number1} />
           </div>
           <div className="form-group">
                <label htmlFor="number2" className="form-label">Number2</label>
                <input type="number" className="form-input" id="number2" onChange={handleNumber2Change}
                value={number2} />
           </div>
           <button className="form-button" onClick={handleAddition}>Add</button>
           <div className="form-group">
                <label htmlFor="result" className="form-label">Result</label>
                <input type="number" className="form-input" id="result" value={result} readOnly/>
           </div>
        </div>
    </div>
  )
}

export default Calculator