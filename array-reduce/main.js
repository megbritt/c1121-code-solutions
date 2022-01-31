const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const product = numbers.reduce((a, b) => a * b);
const sum = numbers.reduce((a, b) => a + b);

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const balance = account.reduce((a, b) => {
  if (b.type === 'withdrawal') {
    return a - b.amount;
  } else {
    return a + b.amount;
  }
}
, 0);

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const composite = traits.reduce((a, b) => { return Object.assign(a, b); }, {});

console.log('sum', sum);
console.log('product', product);
console.log('balance', balance);
console.log('composite', composite);
