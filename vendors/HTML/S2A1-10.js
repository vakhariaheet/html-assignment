var fahrenheit = parseInt(prompt('Enter Fahrenheit'));
function toCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}
const celsius = toCelsius(fahrenheit);
document.write(fahrenheit + "F to Celsius is " + celsius);
