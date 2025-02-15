const removeDuplicates = (nums: number[]) => {
  let leftPointer = 0;

  for (const num of nums) {
    if (nums[leftPointer] !== num) {
      leftPointer++;
      nums[leftPointer] = num;
    }
  }

  return leftPointer + 1;
};

export default removeDuplicates;
