const takeAChance = require('./take-a-chance');

const promiseMe = takeAChance('Megan');

promiseMe.then(resolved => {
  console.log(resolved);
});

promiseMe.catch(error => {
  console.log(error.message);
});
