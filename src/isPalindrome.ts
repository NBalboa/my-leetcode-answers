const isPalindrome = (x: number): boolean => {
  const numbers: string[] = x.toString().split("");
  let lastIndex = numbers.length - 1;
  for (let num of numbers) {
    const lastNum = numbers[lastIndex];
    if (num !== lastNum) {
      return false;
    }
    lastIndex--;
  }
  return true;
};

export default isPalindrome;
