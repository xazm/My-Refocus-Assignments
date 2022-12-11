// TASK 1 Converter

// generate function
//convert celcuis to kelvin and return
// insert formula K = C + 273.15

function convertToKelvin(temCelcuis){
    let tempKelvin = (temCelcuis + 273.15)
    return tempKelvin;
}

console.log(convertToKelvin(36)); // 36 C = 309.15 K

//-------------//

// convert Farenheit to Kelvin and Return
// fomula K = [(F - 32) * 5 / 9 ] + 273.15
function conToKelvin(tempFarenheit){
let tempKelvin = ((tempFarenheit - 32) * 5 / 9 + 273.15)
return tempKelvin;
}

console.log(conToKelvin(36)) // 36 F = 291.3722222222

//--------//

// TASK 2 Calculator

// function
// calculate Meal cost minus leave tip should be 10%
// formula leaveTip = MealCost x 0.10

function calculateLeaveTip(totalMealCost){
let totalLeaveTip = (totalMealCost * .10)
return totalLeaveTip;
}

console.log(calculateLeaveTip(500)); // 500 Meal cost 50 tip

