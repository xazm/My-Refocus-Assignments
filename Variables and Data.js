//Task 1 Calorie tracking app

// sam decides to do 30 minutes everyday.
// cyling for 30mins burns 225 cal

// calories per 30min
let calperHour = 225;

// number of times decided to run.
let numTimeSamRun = 15;

//run hour per day 30min+30min=1hour
let minrunPerDay = 0.5;

//total number of calories burn in a week
let totalNumofCalBurn = calperHour * numTimeSamRun;

console.log(`Great work, Sam! After ${minrunPerDay} hours of running every day for a week, you may lose o total of ${totalNumofCalBurn} calories`);

//Task 2 Saving app

//Goal Php10,000
let SamGoal = 10000;

// Sam already saved 7500
let SamAlreadySaved = 7500;

let totalNumNeed = SamGoal - SamAlreadySaved;

let percentageLeft = (totalNumNeed / SamGoal) * 100;

console.log(`Thank you for your decipline and hard work, Sam! You are now ${percentageLeft}% away from your goal of saving Php${SamGoal}`);


