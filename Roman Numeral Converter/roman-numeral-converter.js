function convertToRoman(num) {
  
  let romanSymbols = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]

  if(num === 0) {
    return ''
  }

  //Das Gesamte Array durchlaufen
  for(let i = 0; i < romanSymbols.length; i++) {
    if(num >= romanSymbols[i][0]) {

      //die Römische Zahl ausgeben + die Funktion erneut aufrufen
      return romanSymbols[i][1] + convertToRoman(num - romanSymbols[i][0])
    }
  }
}

convertToRoman(36);