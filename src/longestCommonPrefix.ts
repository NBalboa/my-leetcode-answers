const longestCommonPrefix = (strs: string[]): string => {
  let base = strs[0];
  let prefix = "";
  for (let str of strs) {
    if (str.length < base.length) {
      base = str;
    }
  }

  const smallestLengthWord = base.split("");
  let tempPrefix = "";

  for (let base_letter of smallestLengthWord) {
    let validPrefix = true;
    tempPrefix += base_letter;

    for (let word of strs) {
      const wordPrefix = word.slice(0, tempPrefix.length);
      if (wordPrefix !== tempPrefix) {
        validPrefix = false;
        break;
      }
    }
    if (!validPrefix) {
      break;
    } else {
      prefix = tempPrefix;
    }
  }

  return prefix;
};

export default longestCommonPrefix;
