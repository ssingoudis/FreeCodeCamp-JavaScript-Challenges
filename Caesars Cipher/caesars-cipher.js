function rot13(str) {
  const alphabet = [
 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'
  ]

  let regex = /[a-zA-Z]/
  let index = str.length -1
  let newArr = [];

  //transform String in Array
  let strArr = str.split('')

  //iterate through Array
  for (let i = 0; i <= index; i++) {

    //check if it is a letter
    if(strArr[i].match(regex)) {

      //find index position from letter in alphabet
      let Pos = strArr[i]

      //move 13 letters to encrypt
      let newPos = alphabet.indexOf(Pos) + 13

      //push encrypted letter to Array
      newArr.push(alphabet[newPos])

    } else {

      //if it's no letter, keep it & push to Array
      let char = strArr[i]
      newArr.push(char)
    }
  }
  
  //Array back to String
  return newArr.join('')
}

rot13("SERR PBQR PNZC");