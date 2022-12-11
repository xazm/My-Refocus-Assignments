
// Task 1

var oxLevel = 89
// if statement to check > 96 inside the if block write console.log('Normal reading.''Normal reading.')
// add if else to check 95 inside the if block write console.log('Acceptable to continue home monitoring.')
// add if else to check 93 - 94 inside the if block write console.log('Seek advice from health professionals.')
// add if else to check < 92 inside the if block write console.log('Seek urgent medical advice.')


function oxObsevation(oxLevel){
    if (oxLevel >= 96) {
        console.log('Normal reading.');
    }   else if ( oxLevel == 95 ) {
        console.log('Acceptable to continue home monitoring.');
    }   else if ( oxLevel == 94 ) {
        console.log('Seek advice from health professionals.');
    }   else if ( oxLevel == 93 ) {
            console.log('Seek advice from health professionals.');
    }   else if ( oxLevel <= 92 ) {
        console.log('Seek urgent medical advice.');
    }   
    
}

oxObsevation(oxLevel)

//----------//

// Task 2

// if statement to check 40-100 inside the if block write console.log('Normal reading.''Normal reading.')
// add if else to check 101-109 inside the if block write console.log('Acceptable to continue home monitoring.')
// add if else to check 110-130 inside the if block write console.log('Seek advice from health professionals.')
// add if else to check > 131 inside the if block write console.log('Seek urgent medical advice.')

var pulseRate = 131

function pulseRateObsevation(pulseRate){
    if ((pulseRate >= 40) && (pulseRate <= 100)) {
        console.log('Normal reading.');
    }   else if ((pulseRate >= 101) && (pulseRate <= 109)) {
        console.log('Acceptable to continue home monitoring.');
    }   else if ((pulseRate >= 110) && (pulseRate <= 130)) {
        console.log('Seek advice from health professionals.');
    }   else if (pulseRate >= 131) {
        console.log('Seek urgent medical advice.');
    }

 }   
    
pulseRateObsevation(pulseRate)