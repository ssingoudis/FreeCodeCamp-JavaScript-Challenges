//create Array with all Values
const geldstuecke = [
  ["PENNY", 1], ["NICKEL", 5], ["DIME", 10],
  ["QUARTER", 25], ["ONE", 100], ["FIVE", 500],
  ["TEN", 1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]
];

function checkCashRegister(price, cash, cid) {
  //cash und price runden, um rechenfehler zu vermeiden
  let rueckgabeWert = Math.round(cash * 100) - Math.round(price * 100)

  let geldBekommen = {};
  let geldZuGeben = {};

  cid.forEach(geldstuecke => {
    geldBekommen[geldstuecke[0]] = Math.round(geldstuecke[1] * 100)
  });

  let index = geldstuecke.length - 1;

  while (index >= 0 && rueckgabeWert > 0) {

    let geldName = geldstuecke[index][0]
    let geldWert = geldstuecke[index][1]

    if (rueckgabeWert - geldWert > 0 && geldBekommen[geldName], rueckgabeWert) {

      geldZuGeben[geldName] = 0;

      while (geldBekommen[geldName] > 0 && rueckgabeWert - geldWert >= 0) {
        geldBekommen[geldName] -= geldWert
        geldZuGeben[geldName] += geldWert
        rueckgabeWert -= geldWert
      }
    }

    index -= 1;
  }

  if (rueckgabeWert === 0) {
    let bankIstLeer = true;

    Object.keys(geldBekommen).forEach(geldStueck => {
      if (geldBekommen[geldStueck] > 0) {
        bankIstLeer = false;
      }
    });

    if (bankIstLeer) {
      return { status: "CLOSED", change: cid }
    } else {
      let wechselArr = [];
      Object.keys(geldZuGeben).map(geldStueck => {
        if (geldZuGeben[geldStueck] > 0) {
        wechselArr.push([geldStueck, geldZuGeben[geldStueck] / 100]);
        };
      });

      return { status: "OPEN", change: wechselArr };
    }
  }
  
  return { status: "INSUFFICIENT_FUNDS", change: [] }
}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);