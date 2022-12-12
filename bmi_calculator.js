// make function to convert BMI

function calculate_BMI( height , weight){
    let height_1 = height * height
    let result = weight / height_1
    console.log("Height (m) : " + height_1)
    console.log("Weight (kg) : " + weight)
    //console.log(`Your BMI : ${result}`)

   if ( result <= 18.5 ) {
        console.log(`You are Underweight ${result}`)
    }   else if (( result >= 18.5 ) && ( result <= 24.9 )) {
        console.log(`You are  Normal: ${result}`);
    } else if (( result >= 25 ) && ( result <= 29.9 )) {
        console.log(`You are  Overweight: ${result}`);
    }  else if (result >= 30 ) {
        console.log(`You are Obese: ${result}`)
    }; 
};


calculate_BMI(1.75 , 70);