function fibonacci(n) {
  if (n < 1) return 0; //base case for f(n=0)
  if (n === 1) return 1; //base case for f(n=1)
  let num1 = fibonacci(n - 2);
  let num2 = fibonacci(n - 1);
  return num1 + num2; //get f(n)
}
