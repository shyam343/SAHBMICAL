import React, { useState } from 'react';
import './BMICalculator.css';
import BMICalculatorForm from '../BMICalculatorForm/BMICalculatorForm';
import BMIImage from '../BMIImage/BMIImage';

function BMICalculator() {
    const [heightCm, setHeightCm] = useState('');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState('');
    const [useCm, setUseCm] = useState(null); 

    const calculateBMI = () => {
        let height = heightCm;
        if (useCm === false) {
            height = (parseInt(feet) * 30.48) + (parseInt(inches) * 2.54);
        }

        if (height > 0 && weight > 0) {
            const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
            let classification = '';
            let precautions = '';

            if (bmi < 18.5) {
                classification = 'Underweight';
                precautions = 'Increase calorie intake, focus on strength training, regular check-ups.';
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                classification = 'Normal Range';
                precautions = 'Maintain a balanced diet, regular physical activity, routine health screenings.';
            } else if (bmi >= 25.0 && bmi <= 29.9) {
                classification = 'Overweight';
                precautions = 'Adopt a diet lower in saturated fats, increase physical activity, monitor health metrics.';
            } else {
                classification = 'Obesity';
                precautions = 'Follow a calorie-controlled diet, engage in regular exercise, check for obesity-related conditions.';
            }

            setResult(`BMI: ${bmi} (${classification})\nPrecautions: ${precautions}`);
        } else {
            setResult('Please enter valid height and weight.');
        }
    };

    const handleHeightCmChange = (e) => {
        const cm = e.target.value;
        setHeightCm(cm);
        if (cm) {
            setUseCm(true);
            const totalInches = cm / 2.54;
            const feetValue = Math.floor(totalInches / 12);
            const inchesValue = (totalInches % 12).toFixed(2);
            setFeet(feetValue);
            setInches(inchesValue);
        }
    };

    const handleFeetChange = (e) => {
        const feetValue = e.target.value;
        setFeet(feetValue);
        if (feetValue || inches) {
            setUseCm(false);
            const totalCm = (parseInt(feetValue) * 30.48) + (parseFloat(inches) * 2.54);
            setHeightCm(totalCm.toFixed(2));
        }
    };

    const handleInchesChange = (e) => {
        const inchesValue = e.target.value;
        setInches(inchesValue);
        if (inchesValue || feet) {
            setUseCm(false);
            const totalCm = (parseInt(feet) * 30.48) + (parseFloat(inchesValue) * 2.54);
            setHeightCm(totalCm.toFixed(2));
        }
    };

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };

    const resetForm = () => {
        window.location.reload();
    };

    return (
        <div className="container">
            <BMICalculatorForm 
                heightCm={heightCm} 
                setHeightCm={handleHeightCmChange} 
                feet={feet} 
                setFeet={handleFeetChange} 
                inches={inches} 
                setInches={handleInchesChange} 
                weight={weight} 
                setWeight={handleWeightChange} 
                calculateBMI={calculateBMI} 
                result={result} 
                useCm={useCm}
                resetForm={resetForm}
            />
            <BMIImage />
        </div>
    );
}

export default BMICalculator;
