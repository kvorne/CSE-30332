function fibonacci(n) {
  let num1 = 0; //initialize f(n=0)
  let num2 = 1; //initialize f(n=1)

  // loop until n is reached
  for (let i = 2; i <= n; i++) {
    temp = num1;
    num1 = num2;
    num2 = temp + num2; //get f(n=i)
  }

  return num2; //return f(n)
}
