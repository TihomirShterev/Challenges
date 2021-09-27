function validateBrackets(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  // filter brackets
  const arr = str.split('').filter(el => el === '{' || el === '}' || el === '[' || el === ']' || el === '(' || el === ')');
  const isOdd = arr.length % 2 !== 0;

  if (isOdd) {
    return false;
  }

  // correct order {[(
  for (let i = 0; i < arr.length / 2 - 1; i++) {
    const currElAscii = arr[i].charCodeAt();
    const nextElAscii = arr[i + 1].charCodeAt();

    if (currElAscii < nextElAscii) {
      return false;
    }
  }

  // corresponding closing bracket
  while (arr.length > 0) {
    const firstElement = arr.shift();
    const lastElement = arr.pop();

    if (firstElement === '{' && lastElement !== '}') {
      return false;
    }

    if (firstElement === '[' && lastElement !== ']') {
      return false;
    }

    if (firstElement === '(' && lastElement !== ')') {
      return false;
    }
  }

  return true;
}
