const lengthOfLastWord = (s: string): number => {
  const strs = s.split(" ");

  if (strs[strs.length - 1].length > 0) {
    return strs[strs.length - 1].split("").length;
  }

  const cleanUp = strs.filter((str) => str !== "");

  return cleanUp[cleanUp.length - 1].split("").length;
};

export default lengthOfLastWord;
