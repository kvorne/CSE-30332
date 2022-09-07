function computeEnumeration(termPositions) {
  /* your solution goes here */
  let enumerations = [];

  for (let i = 0; i < termPositions.length; i++){
    let currNum = termPositions[i];

    if (currNum >= 1) {
      // fill a list with the terms for every position in the input
      enumerations.push(find_term(currNum));
    } else {
      enumerations.push(null);
    }

  }

  return enumerations;
}


function find_term(n){
  let capacity = 1;
  let curr = 1;
  let numIncrement = -2;
  let denIncrement = 2;
  let num = 2;
  let den = 2;

  for (let i = 2; i <= n; i++){
    if (curr === capacity){
      // FLIP! add two to the side that was previously incrementing and then switch which is incrementing and decrimenting
      curr = 0;
      capacity++;
      numIncrement *= -1;
      denIncrement *= -1;
      if (denIncrement > 0) {
        num += 2;
      } else {
        den += 2;
      }
    } else {
      // increment and decriment numerator and denominator
      num += numIncrement;
      den += denIncrement;
    }
    // keep track of where in the diagonal we are
    curr++;
  }

  return `${num}/${den}`;
}
