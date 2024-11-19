function convertTemperature(){
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
    const result = document.getElementById("result");

    if(isNaN(inputValue)){
        result.textContent("Please enter a valid number");
        return;
    }

    const toCelsius = {
        Celsius: (temp) => temp,
        Fahrenheit: (temp) => (temp - 32) * (5 / 9),
        Kelvin: (temp) => temp - 273.15,
        Rankine: (temp) => (temp - 491.67) * (5 / 9),
        Reaumur: (temp) => temp * (5 / 4),
        Newton: (temp) => temp * (100 / 33),
        Delisle: (temp) => 100 - temp * (2 / 3),
        Romer: (temp) => (temp - 7.5) * (40 / 21),
    };

    const fromCelsius = {
        Celsius: (temp) => temp,
        Fahrenheit: (temp) => temp * (9 / 5) + 32,
        Kelvin: (temp) => temp + 273.15,
        Rankine: (temp) => (temp + 273.15) * (9 / 5),
        Reaumur: (temp) => temp * (4 / 5),
        Newton: (temp) => temp * (33 / 100),
        Delisle: (temp) => (100 - temp) * (3 / 2),
        Romer: (temp) => temp * (21 / 40) + 7.5,
    };

    const tempInCelsius = toCelsius[inputUnit](inputValue);
    const convertedTemp = fromCelsius[outputUnit](tempInCelsius);

    result.textContent = `${inputValue} ${inputUnit} = ${convertedTemp.toFixed(2)} ${outputUnit}`;
}