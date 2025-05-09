function convertLength(value, unit) {
    if (unit === "cm") {
        return value / 100000 + " km";
    } else if (unit === "km") {
        return value * 100000 + " cm";
    } else {
        return "Invalid unit";
    }
}
console.log(convertLength(100000, "cm"));