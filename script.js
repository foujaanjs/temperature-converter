

document.addEventListener('DOMContentLoaded', () => {
    const convertButton = document.getElementById('convert-button');
    const temperatureInput = document.getElementById('temperature-input');
    const resultDiv = document.getElementById('result');

    function convertTemperature() {
        const tempValue = parseFloat(temperatureInput.value);
        const selectedUnit = document.querySelector('input[name="unit"]:checked').value;

        if (isNaN(tempValue)) {
            resultDiv.textContent = 'Please enter a valid number.';
            return;
        }

        let convertedTemp;
        let convertedUnit;

        if (selectedUnit === 'celsius') {
            convertedTemp = (tempValue * 9/5) + 32;
            convertedUnit = 'Fahrenheit';
            let kelvinTemp = tempValue + 273.15;
            resultDiv.innerHTML = `${tempValue}° Celsius = ${convertedTemp.toFixed(2)}° Fahrenheit<br>${tempValue}° Celsius = ${kelvinTemp.toFixed(2)} Kelvin`;
        } else if (selectedUnit === 'fahrenheit') {
            convertedTemp = (tempValue - 32) * 5/9;
            convertedUnit = 'Celsius';
            let kelvinTemp = (tempValue - 32) * 5/9 + 273.15;
            resultDiv.innerHTML = `${tempValue}° Fahrenheit = ${convertedTemp.toFixed(2)}° Celsius<br>${tempValue}° Fahrenheit = ${kelvinTemp.toFixed(2)} Kelvin`;
        } else if (selectedUnit === 'kelvin') {
            convertedTemp = tempValue - 273.15;
            convertedUnit = 'Celsius';
            let fahrenheitTemp = (tempValue - 273.15) * 9/5 + 32;
            resultDiv.innerHTML = `${tempValue} Kelvin = ${convertedTemp.toFixed(2)}° Celsius<br>${tempValue} Kelvin = ${fahrenheitTemp.toFixed(2)}° Fahrenheit`;
        }
    }

    convertButton.addEventListener('click', convertTemperature);
});
