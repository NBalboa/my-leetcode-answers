const ROMAN = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

type ROMAN_KEY = keyof typeof ROMAN;
const romanToInt = (s: string): number => {
  const romans = s.split("");
  let total = 0;
  for (let i = romans.length - 1; i >= 0; i--) {
    const roman = romans[i] as ROMAN_KEY;
    const nextRoman = romans[i - 1] as ROMAN_KEY;

    if (nextRoman && ROMAN[roman] > ROMAN[nextRoman]) {
      total += ROMAN[roman] - ROMAN[nextRoman];
      i--;
    } else {
      total += ROMAN[roman];
    }
  }

  return total;
};

export default romanToInt;
