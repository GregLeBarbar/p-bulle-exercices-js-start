//
// Ceci est le fichier de l'exercice 'Bank Account'.
// Il vous permet de gérer un compte bancaire simple avec ouverture, fermeture, dépôt et retrait.
//

export class BankAccount {
  #balance = 0;
  #open = false;

  constructor() {
    // Le compte est initialement fermé et le solde à 0
    this.#balance = 0;
    this.#open = false;
  }

  // Ouvre un compte si ce n'est pas déjà fait
  open() {
    if (this.#open) {
      throw new ValueError();
    }
    this.#open = true;
    this.#balance = 0;
  }

  // Ferme le compte et réinitialise le solde
  close() {
    if (!this.#open) {
      throw new ValueError();
    }
    this.#open = false;
    this.#balance = 0;
  }

  // Effectue un dépôt (montant positif uniquement)
  deposit(amount) {
    if (!this.#open || amount <= 0) {
      throw new ValueError();
    }
    this.#balance += amount;
  }

  // Effectue un retrait (montant positif et inférieur ou égal au solde)
  withdraw(amount) {
    if (!this.#open || amount <= 0 || amount > this.#balance) {
      throw new ValueError();
    }
    this.#balance -= amount;
  }

  // Retourne le solde actuel si le compte est ouvert
  get balance() {
    if (!this.#open) {
      throw new ValueError();
    }
    return this.#balance;
  }
}

// Erreur personnalisée utilisée pour signaler les opérations invalides
export class ValueError extends Error {
  constructor() {
    super("Erreur de compte bancaire");
  }
}
