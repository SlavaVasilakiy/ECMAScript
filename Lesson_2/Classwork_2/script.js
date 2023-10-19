function checkBalance(balance) {
  if (!Number.isFinite(balance)) {
    throw new Error("Must be a number");
  }
  if (balance < 0) {
    throw new Error("Must be a positive number");
  }
  if ((balance * 100) % 1 !== 0) {
    throw new Error("Must be 2 digits after dot");
  }
}

class BankAccount {
  static bankName = "GBank";
  constructor(accountNumber, balance) {
    if (accountNumber.length != 10) {
      throw new Error("Wrong account number length");
    }
    checkBalance(balance);
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    checkBalance(amount);
    this.balance += amount;
  }

  withdraw(amount) {
    checkBalance(amount);
    if (this.balance < amount) {
      throw new Error(`Insufficient funds in account ${this.accountNumber}`);
    }
    this.balance -= amount;
  }

  printBalance() {
    console.log(
      `${BankAccount.bankName} account "${this.accountNumber}" balance: ${this.balance}`
    );
  }
}

const account1 = new BankAccount("1234567890", 1000.11);
