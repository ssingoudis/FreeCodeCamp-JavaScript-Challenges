function telephoneCheck(str) {
  
  let test = /^(1\s*)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

	// ^ = match start of String
	// (1\s*)? = Optional "1" with optional spaces after it
	// (\(\d{3}\)|\d{3}) = Either a three-digit number surrounded by parentheses or just a three-digit number
	// [\s-]? = optional space
	// \d{3} = three digits
	// [\s-]? = optional space
	// \d{4}$ = end with exact 3 digits

  if(str.match(test)){
    return true
  } else {
    return false
  }
}

telephoneCheck("555-555-5555");