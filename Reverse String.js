//First approach
function reverse(str) {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
}
reverse('apple');

//Second approach
function reverse(str) {
     return str.split('').reverse().join('');
}
reverse('ApPle');

//3rd approach
function reverse(str) {
  let reversed = '';
  for(let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}
reverse('banana');

//4th approach
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
reverse('greetings!');