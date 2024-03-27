#!  /usr/bin/env node
import inquirer from "inquirer";
// Make balance and pin
let accountbalance = 20000;
let accountpin = 4677;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Please enter your pin.",
    type: "number",
});
if (pinAnswer.pin === 4677) {
    console.log("Correct Pin Code!!!");
    let actionAns = await inquirer.prompt({
        name: "operation",
        message: "Please select one of the operations:",
        type: "list",
        choices: ["withdraw", "check balance", "fast cash"]
    });
    if (actionAns.operation === "check balance") {
        console.log("Your Current Balance Is " + accountbalance);
    }
    else if (actionAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            message: "Kindly enter your amount:",
            type: "number"
        });
        if (amountAns.amount < accountbalance) {
            accountbalance -= amountAns.amount;
            console.log("Your Current Balance Is " + accountbalance);
        }
        else if (amountAns.amount > accountbalance) {
            console.log("Your transaction is unable because your current balance is $" + accountbalance);
        }
    }
    else if (actionAns.operation === "fast cash") {
        let cashamount = await inquirer.prompt({
            name: "cash",
            message: "chose your cash amount",
            type: "list",
            choices: ["1000", "5000", "7000", "1000"]
        });
        accountbalance -= cashamount.cash;
        console.log("Your Remaining Balance is: " + accountbalance);
    }
}
else if (pinAnswer.pin !== accountpin) {
    console.log("Incorrect pin! Plese try again.");
}
