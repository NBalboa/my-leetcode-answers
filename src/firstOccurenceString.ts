const firstOccurenceString = (haystack: string, needle: string): number => {
  const haystackStrs = haystack.split("");
  const needleStrs = needle.split("");
  const start = haystackStrs.length + 1 - needle.length;

  for (let i = 0; i < start; i++) {
    for (let j = 0; j < needleStrs.length; j++) {
      if (haystackStrs[i + j] !== needleStrs[j]) {
        break;
      }
      if (j === needleStrs.length - 1) {
        return i;
      }
    }
  }
  return -1;
};

export default firstOccurenceString;
