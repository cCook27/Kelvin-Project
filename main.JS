//this is the starting point and will stay const hence using the const variable

const kelvin = 400;

// celcius is 273 degrees less then Kelvin, we'll use var because the answer won't always be the same

const celcius = kelvin - 273;

// We're using var because we want to be able to change it.
// Math.floor will give us the nearest whole number rounded down. so if it's 5.9, it'd come out to be 5
var fahrenheit = Math.floor(celcius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);



var newton = Math.floor(celcius * (33/100));

console.log(`The temperature is ${newton} degrees newton (I think that's how you say it?).`);
