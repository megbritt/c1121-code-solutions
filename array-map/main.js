const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(num => {
  return num * 2;
});

const prices = numbers.map(num => {
  return `$${num}.00`;
});

const upperCased = languages.map(word => {
  return word.toUpperCase();
});

const firstLetters = languages.map(word => {
  return word[0];
});

console.log('doubled', doubled);
console.log('prices', prices);
console.log('upperCased', upperCased);
console.log('firstLetters', firstLetters);
