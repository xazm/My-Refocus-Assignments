// Task 2. Conduct automated testing

const computeBMI = require("./bmi_calculator");

test ("Checks If 70 / 1.75 * 1.75 = 22.857142857142858" , () => {
    expect(computeBMI(1.75 , 70)).toBe(22.857142857142858);
});

