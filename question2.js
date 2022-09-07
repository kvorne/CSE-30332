function findMaxConsecutiveOnes(nums) {
  /* your solution goes here */
  let max = 0;
  let currOnes = 0;

  // Loop thru nums array
  for (let i = 0; i < nums.length; i++) {
    // Increment number of ones or compare once a different number is reached
    if (nums[i] == 1) {
      currOnes++;
    } else {
      if (currOnes > max) max = currOnes;
      currOnes = 0;
    }
  }

  // Compare a final time once the end of the nums array is reached
  if (currOnes > max) max = currOnes;

  return max;
}
