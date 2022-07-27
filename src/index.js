module.exports = function check(str, bracketsConfig) {
  /*const stack = [];
  for (let i = 0; i < (str.length - 1); i++)  {
    if (str[i] === ('(' || '[' || '{')) {
      stack.push(str[i]);
    } else if (str[i] === (')' || ']' || '}')) {
      if  ((stack === []) || (stack[i] !== str[i])) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return (stack === []) ? true : false;
    //for (el of bracketsConfig) {
    //stack.push(el.join(''));
    //}
  */
  if (str.length % 2 !== 0) {return false;}
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 0) {
      stack.push(str[i]);
    } else if (str[i] === Object.fromEntries(bracketsConfig)[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.length === 0;
}