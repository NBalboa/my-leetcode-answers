const plusOne = (digits: number[]): number[] => {
  let strNum = "";
  let result: number[] = [];
  for (const digit of digits) {
    strNum = strNum.concat(digit.toString());
  }

  const num = BigInt(strNum) + BigInt(1);

  const resultStrs = num.toString().split("");

  for (const resultStr of resultStrs) {
    result.push(parseInt(resultStr));
  }

  return result;
};

export default plusOne;
