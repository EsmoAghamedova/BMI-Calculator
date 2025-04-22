const HEIGHT_CONVERSION = {
    foot: 30.48,
    inch: 2.54,
    meter: 100
};

const WEIGHT_CONVERSION = {
    pound: 0.453592
};

export const convertHeight = (value, fromUnit, toUnit) => {
    if (fromUnit === toUnit) return value;

    if (fromUnit === 'imperial' && toUnit === 'metric') {
        const { feet, inches } = value;
        const cm = (feet * HEIGHT_CONVERSION.foot) + (inches * HEIGHT_CONVERSION.inch);
        return cm;
    }

    if (fromUnit === 'metric' && toUnit === 'imperial') {
        const totalCm = value;
        const feet = Math.floor(totalCm / HEIGHT_CONVERSION.foot);
        const inches = Math.round((totalCm % HEIGHT_CONVERSION.foot) / HEIGHT_CONVERSION.inch);
        return { feet, inches };
    }

    return value;
};

export const convertWeight = (value, fromUnit, toUnit) => {
    if (fromUnit === toUnit) return value;

    if (fromUnit === 'imperial' && toUnit === 'metric') {
        return value * WEIGHT_CONVERSION.pound;
    }

    if (fromUnit === 'metric' && toUnit === 'imperial') {
        return value / WEIGHT_CONVERSION.pound;
    }

    return value;
};
