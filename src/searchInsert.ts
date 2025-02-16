const searchInsert = (nums: number[], target: number): number => {
  if (nums.includes(target)) {
    console.log(target);
    return nums.indexOf(target);
  }
  let positionToInsert = 0;
  for (let i = 0; i < nums.length; i++) {
    if (target > nums[i]) {
      positionToInsert = i + 1;
    } else {
      break;
    }
  }
  nums.splice(positionToInsert, 0, target);

  return positionToInsert;
};

export default searchInsert;
