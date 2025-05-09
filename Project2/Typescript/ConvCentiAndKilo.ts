function convertLength(value: number, unit: "cm" | "km"): string {
    if (unit === "cm") {
        return `${value / 100000} km`;
    } else if (unit === "km") {
        return `${value * 100000} cm`;
    } 
    return "Invalid unit";
}
console.log(convertLength(100000, "cm"));