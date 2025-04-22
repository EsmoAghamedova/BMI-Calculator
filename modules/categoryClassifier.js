export const classifyBMI = (bmi, age, gender) => {

    if (age < 18) {
        return 'Underage - BMI interpretation varies';
    }

    return bmi < 18.5 ? 'Underweight'
        : bmi < 25 ? 'Normal'
            : bmi < 30 ? 'Overweight'
                : 'Obese';
};

