function reversedSum(num1, num2) {
  /* your solution goes here */
  num1 = reverseNum(num1);
  num2 = reverseNum(num2);
  // Sum reversed numbers
  sum = num1 + num2;
  sum = reverseNum(sum);

  return sum;
}

function reverseNum(num) {
  //Remove any leading 0s
  num = parseInt(num, 10);
  // Convert num to an array for automatic array reversal
  num = num.toString();
  num = num.split('');
  num = num.reverse();
  // Join number back together and set type to number
  num = Number(num.join(''));

  return num;
}
