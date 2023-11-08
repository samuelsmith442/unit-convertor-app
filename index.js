// Get references to the HTML elements
let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

// Define conversion constants
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

// Add a click event listener to the "Convert" button
convertBtn.addEventListener("click", function() {
    // Get the value entered by the user
    let baseValue = inputEl.value;
    
    // Perform the length conversion and update the result text with 3 decimal places
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet`;
    
    // Perform the volume conversion and update the result text with 3 decimal places
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons`;
    
    // Perform the mass conversion and update the result text with 3 decimal places
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds`;
});
