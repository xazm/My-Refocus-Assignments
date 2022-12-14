// make function to convert BMI

function calculate_BMI( height , weight){
    let height_1 = height * height
    let result = weight / height_1
    console.log("Height (m) : " + height_1)
    console.log("Weight (kg) : " + weight)
   

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


calculate_BMI(1.75 , 70 ); // Normal : 22.857142857142858 --- correct
calculate_BMI(1.75 , 30 ); // Underweight 9.795918367346939 --- correct 
calculate_BMI(1.75 , 90 ); // verweight: 29.387755102040817 
calculate_BMI(1.75 , 150 ); // Obese: 48.97959183673469 


// 1.75 * 1.75 / 70 = 22.857142857142858
// 1.75 * 1.75 / 30 = 9.795918367346939
// 1.75 * 1.75 / 90 ); // verweight: 29.387755102040817
//1.75 * 1.75 / 150 ); // Obese: 48.97959183673469 
