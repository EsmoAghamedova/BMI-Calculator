export const convertHeight = (value, fromUnit, toUnit) => {
    const conversionFactors = {
        feet: 30.48,
        inches: 2.54,
        cm: 1,
        meters: 100
    };

    const inCm = fromUnit === "meters" ? value * 100 : value * conversionFactors[fromUnit];
    return toUnit === "meters" ? inCm / 100 : inCm / conversionFactors[toUnit];
};

export const convertWeight = (value, fromUnit, toUnit) => {
    const conversionFactors = {
        lbs: 0.453592,
        kg: 1
    };

    const inKg = value * conversionFactors[fromUnit];
    return inKg / conversionFactors[toUnit];
};
