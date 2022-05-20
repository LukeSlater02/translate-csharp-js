// Put your code here
console.log("Let's roll some dice, baby!");
console.log("---------------------------");

const Roll = () => {
    let result = {
        value: Math.floor(Math.random() * 6) + 1,
        stringValue: ""
    }
    switch (result.value) {
        case 1:
            result.stringValue = "one";
            break;
        case 2:
            result.stringValue = "two";
            break;
        case 3:
            result.stringValue = "three";
            break;
        case 4:
            result.stringValue = "four";
            break;
        case 5:
            result.stringValue = "five";
            break;
        case 6:
            result.stringValue = "six";
            break;
    }
    return result
}

for (let i = 0; i < 10; i++) {
    let die1 = Roll();
    let die2 = Roll();

    let message = `${die1.stringValue} + ${die2.stringValue} == ${die1.value + die2.value}`
    if (die1.value == die2.value) {
        message += " DOUBLES!";
    }

    console.log(message);
}