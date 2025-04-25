export const classifyBMI = (bmi, age, gender) => {
    if (age < 18) {
        return gender === "female" ? "მოზარდი გოგოს ნორმები" : "მოზარდი ბიჭის ნორმები";
    }

    return `მოზრდილთა კატეგორია: ${bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese"}`;
};
