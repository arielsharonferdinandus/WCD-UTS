function circleProperties(radius: number) {
    let diameter: number = 2 * radius;
    let circumference: number = 2 * Math.PI * radius;
    let area: number = Math.PI * radius * radius;
    return {
        diameter: diameter,
        circumference: circumference.toFixed(4), // Formatting to 4 decimal places
        area: area.toFixed(3)
    };
}
console.log(circleProperties(5));
