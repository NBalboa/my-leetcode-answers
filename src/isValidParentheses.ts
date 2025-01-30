const isValidParentheses = (s: string): boolean => {
  const PARENTHESES = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  type PARENTHESES_KEY = keyof typeof PARENTHESES;
  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const parenthesis = s[i];
    if (parenthesis === "(" || parenthesis === "{" || parenthesis === "[") {
      stack.push(parenthesis);
    } else if (
      stack[stack.length - 1] === PARENTHESES[parenthesis as PARENTHESES_KEY]
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

export default isValidParentheses;
