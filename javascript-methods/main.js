var num1 = 9;
var num2 = 3;
var num3 = 92;

var maximumValue = Math.max(num1, num2, num3);

console.log('value of maximumValue:', maximumValue);

var heroes = ['Wonder Woman', 'Spider-Man', 'Miraculous Ladybug', 'Batman'];
var randomNumber = Math.random();

randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('value of randomHero:', randomHero);

var library = [

  {
    title: 'The C++ Programming Language 3rd Edition',
    author: 'Bjarne Stroustrup'

  },

  {
    title: 'Beginning x64 Assembly Programming: From Novice to AVX Professional',
    author: 'Jo Van Hoey'
  },

  {

    title: 'Learning ActionScript',
    author: 'Zevan Rosser'

  }
];

var lastBook = library.pop();

console.log('value of lastBook:', lastBook);

var firstBook = library.shift();

console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library array values remaining:', library);

var fullName = 'Megan Martinez';
var firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('value of sayMyName:', sayMyName);
