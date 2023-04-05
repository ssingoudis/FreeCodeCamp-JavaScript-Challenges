function palindrome(str) {
  //Konvertieren in Kleinbuchstaben
  //Alles außer Buchstaben entfernen
  let strOnlyLetters = str
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, "")

  //Kopie in Array konvertieren
  let arr2 = strOnlyLetters.split("")

  //Kopiertes Array umkehren
  let arrReversed = arr2.reverse()

  //Kopiertes Array wieder in String konvertieren
  let str2 = arr2.join('')

  if(strOnlyLetters == str2) {
    return true;
  }
  else {
    return false;
  }
  
}

palindrome("__eye1");