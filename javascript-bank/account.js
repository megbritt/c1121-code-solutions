/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var newDeposit = new Transaction('deposit', amount);
    this.transactions.push(newDeposit);

    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var balance = 0;

  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var newWithdraw = new Transaction('withdrawal', amount);
    this.transactions.push(newWithdraw);

    return true;
  } else {
    return false;
  }
};
