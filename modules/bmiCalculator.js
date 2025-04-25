export const calculateBMI = (height, weight, units) => {
    if (units === "imperial") {
        height = height * 0.0254; // ინჩი → მეტრი
        weight = weight * 0.453592; // lbs → კგ
    } else {
        height = height / 100; // სმ → მეტრი
    }

    return weight / (height * height);
};

export const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "გამხდარი (Underweight)";
    else if (bmi < 25) return "ნორმალური (Normal)";
    else if (bmi < 30) return "ჭარბწონიანი (Overweight)";
    else return "მსუქანი (Obese)";
};
