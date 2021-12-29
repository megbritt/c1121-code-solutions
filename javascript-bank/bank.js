/* exported Bank */

function Bank() {
  this.accounts = [];
  this.nextAccountNumber = 1;
}

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalBalance = 0;

  for (var i = 0; i < this.accounts.length; i++) {
    totalBalance += this.accounts[i].getBalance();
  }
  return totalBalance;
};

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);

    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;

    return newAccount.number;
  } else {
    return null;
  }
};
