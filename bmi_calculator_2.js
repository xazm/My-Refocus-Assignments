
function computeBMI ( height , weight){
    let formula = weight / (height * height)
    console.log(formula)
   
   if ( formula <= 18.5 ) { // Status
        console.log(`You are Underweight ${formula}`)
    }  else if (( formula >= 18.5 ) && ( formula <= 24.9 )) {
        console.log(`You are  Normal: ${formula}`);
    } else if (( formula >= 25 ) && ( formula <= 29.9 )) {
        console.log(`You are  Overweight: ${formula}`);
    } else if ( formula >= 30 ) {
        console.log(`You are Obese: ${formula}`)
    }; 

    return formula;
};

// computeBMI(1.75 , 70 )
module.exports = computeBMI;