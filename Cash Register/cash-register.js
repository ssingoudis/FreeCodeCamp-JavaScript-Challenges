//create Array with all Values
const DENOMINATION = [
  ["PENNY", 1], ["NICKEL", 5], ["DIME", 10],
  ["QUARTER", 25], ["ONE", 100], ["FIVE", 500],
  ["TEN", 1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]
];

function checkCashRegister(price, cash, cid) {
  //round cash and price to avoid calculating errors
  let amountToReturn = Math.round(cash * 100) - Math.round(price * 100)

  //create two Objects
  let cashOnHand = {};
  let cashToGive = {};

  // pass in all Value-Pairs from dim-Array as key-value-pairs to the Object CashOnHand
  // looks like {PENNY: 101, NICKEL: 205, ...}
  cid.forEach(denomination => {
    cashOnHand[denomination[0]] = Math.round(denomination[1] * 100)
  });


  //define index to iterate down in next step
  let index = DENOMINATION.length - 1;


  while (index >= 0 && amountToReturn > 0) {

    // save values into variables to reuse easier
    let moneyName = DENOMINATION[index][0]
    let moneyValue = DENOMINATION[index][1]

    //check if there is still money to return and if there is enough money in the bank left
    if (amountToReturn - moneyValue > 0 && cashOnHand[moneyName], amountToReturn) {

      cashToGive[moneyName] = 0;

      //calculate up and down CashOnHand and cashToGive and adjust the amountToReturn
      while (cashOnHand[moneyName] > 0 && amountToReturn - moneyValue >= 0) {
        cashOnHand[moneyName] -= moneyValue
        cashToGive[moneyName] += moneyValue
        amountToReturn -= moneyValue
      }
    }

    //index -1 to iterate function
    index -= 1;
  }

  // if there is no money to return in the bank, set isRegisterEmpty to true
  if (amountToReturn === 0) {
    let isRegisterEmpty = true;

    // if the type of coin exists in the bank, return false for isRegisterEmpty, since it exists but we assumed it's empty before
    Object.keys(cashOnHand).forEach(moneyType => {
      if (cashOnHand[moneyType] > 0) {
        isRegisterEmpty = false;
      }
    });


    // if amountToReturn was 0, return 'Closed'
    if (isRegisterEmpty) {
      return { status: "CLOSED", change: cid }

    // create Array and push all Coins/Items which are used(isRegisterEmpty = true) into it
    } else {
      let changeArray = [];
      Object.keys(cashToGive).map(moneyType => {
        if (cashToGive[moneyType] > 0) {

	  //divide by 100 because we multiplied by 100 before
          changeArray.push([moneyType, cashToGive[moneyType] / 100]);
        };
      });

      return { status: "OPEN", change: changeArray };
    }

  }

  // Standard-Case, if there are not enough coins in the bank
  return { status: "INSUFFICIENT_FUNDS", change: [] }
}




checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);