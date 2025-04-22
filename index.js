import { calculateBMI, getBMICategory } from './modules/bmiCalculator.js';
import { classifyBMI } from './modules/categoryClassifier.js';

// Example data
let height = { feet: 5, inches: 7 }; // Imperial
let weight = 160; // lbs
let units = 'imperial';
let age = 20;
let gender = 'female';

// REST და SPREAD მაგალითი
const userData = { height, weight, units, age, gender };

const calculateAndDisplayBMI = ({ height, weight, units, age, gender }) => {
    const bmi = calculateBMI(height, weight, units);
    const category = getBMICategory(bmi);
    const classified = classifyBMI(bmi, age, gender);

    // Template literal გამოყენება
    console.log(`Your BMI is ${bmi} (${category}).
Age: ${age}, Gender: ${gender}
Classified Category: ${classified}`);
};

// შედეგის გამოტანა
calculateAndDisplayBMI({ ...userData });
