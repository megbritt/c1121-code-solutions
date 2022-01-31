const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(numbers => numbers % 2 === 0);
console.log(evenNumbers);

const overFive = numbers.filter(numbers => numbers > 5);
console.log(overFive);

const startWithE = names.filter(names => names.startsWith('E'));
console.log(startWithE);

const haveD = names.filter(names => names.includes('D') || names.includes('d'));
console.log(haveD);
