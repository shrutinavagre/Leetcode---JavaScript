//Return bollean if string is palindrome
function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}
palindrome('abba');

