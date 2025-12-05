//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  #accountStatus; // # = private
  #accountBalance;

  constructor() {
    this.#accountBalance = 0;
    this.#accountStatus = "Not open";
  }

  open() {
    if (this.#accountStatus != "Open") {
      this.#accountStatus = "Open";
      this.#accountBalance = 0;
    } else {
      throw new ValueError("Account is already open.");
    }
  }

  close() {
    if (this.#accountStatus == "Open") {
      this.#accountStatus = "Closed";
    } else {
      throw new ValueError("Account not open.");
    }
  }

  deposit(number) {
    if (this.#accountStatus == "Open" && number > 0) {
      this.#accountBalance += number;
    } else {
      throw new ValueError("Account not open.");
    }
  }

  withdraw(number) {
    if (this.#accountStatus == "Open") {
      if ((this.#accountBalance - number) >= 0 && number > 0) {
        this.#accountBalance -= number;
      } else {
        throw new ValueError("Cannot withdraw negative.");
      }
    } else {
      throw new ValueError("Account not open.");
    }
  }

  get balance() {
    if (this.#accountStatus == "Open") {
      return this.#accountBalance;
    } else {
      throw new ValueError("Account not open.");
    }
    2;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
