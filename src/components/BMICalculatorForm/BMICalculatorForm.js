import React from 'react';
import './BMICalculatorForm.css';

function BMICalculatorForm({ heightCm, setHeightCm, feet, setFeet, inches, setInches, weight, setWeight, calculateBMI, result, useCm, resetForm }) {
    return (
        <div className="calculator">
            <h1>BMI Calculator</h1>
            <form id="bmiForm">
                <label htmlFor="heightCm">Height (cm):</label>
                <input type="number" id="heightCm" value={heightCm} onChange={setHeightCm} disabled={useCm === false} required={!heightCm && !feet && !inches} />
                <label htmlFor="feet">Height (feet):</label>
                <input type="number" id="feet" value={feet} onChange={setFeet} disabled={useCm === true} required={!heightCm && !feet && !inches} />
                <label htmlFor="inches">Height (inches):</label>
                <input type="number" id="inches" value={inches} onChange={setInches} disabled={useCm === true} required={!heightCm && !feet && !inches} />
                <label htmlFor="weight">Weight (kg):</label>
                <input type="number" id="weight" value={weight} onChange={setWeight} required />
                <div className="button-group">
                    <button type="button" onClick={calculateBMI}>Calculate BMI</button>
                    <button type="button" onClick={resetForm}>Reset</button>
                </div>
            </form>
            <div id="result">{result}</div>
        </div>
    );
}

export default BMICalculatorForm;
