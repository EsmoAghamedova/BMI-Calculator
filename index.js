import { calculateBMI, getBMICategory } from "./modules/bmiCalculator.js";
import { classifyBMI } from "./modules/categoryClassifier.js";

// მომხმარებლის მონაცემები
let height = 160; // სმ
let weight = 60;  // კგ
let units = "metric"; // ან "imperial"
let age = 20;
let gender = "female";

// BMI გამოთვლა
const bmi = calculateBMI(height, weight, units);
const category = getBMICategory(bmi);
const fullCategory = classifyBMI(bmi, age, gender);

console.log(`შენი BMI არის: ${bmi.toFixed(1)} → ${category}`);
console.log(`დამატებით ასაკისა და სქესის მიხედვით შეფასება: ${fullCategory}`);
