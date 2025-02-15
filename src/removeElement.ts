const removeElement = (nums: number[], val: number) => {
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  if (nums[nums.length - 1] === val) {
    nums.pop();
    nums.push(nums[pointer]);
  }
  return pointer;
};

export default removeElement;
