function circleProperties(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;

    console.log("Diameter:", diameter);
    console.log("Circumference:", circumference.toFixed(4)); 
    console.log("Area:", area.toFixed(3)); 
}
circleProperties(5);
