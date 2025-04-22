import { convertHeight, convertWeight } from './unitConverter.js';

export const calculateBMI = (height, weight, units) => {
    let heightInMeters = units === 'metric'
        ? height / 100
        : convertHeight(height, 'imperial', 'metric') / 100;

    let weightInKg = units === 'metric'
        ? weight
        : convertWeight(weight, 'imperial', 'metric');

    const bmi = weightInKg / (heightInMeters ** 2);
    return +bmi.toFixed(2);
};

export const getBMICategory = (bmiValue) => {
    if (bmiValue < 18.5) return 'Underweight';
    if (bmiValue < 25) return 'Normal';
    if (bmiValue < 30) return 'Overweight';
    return 'Obese';
};

