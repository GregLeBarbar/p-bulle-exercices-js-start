//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  let baseCost = 800;
  let totalCost = 0;

  let booksAmount = [0, 0, 0, 0, 0];

  books.forEach((book) => {
    booksAmount[book - 1] += 1;
  });

  while (booksAmount.some((amount) => amount > 0)) {
    booksAmount.sort();

    let currentDiscount = 1;
    let bookAmount = 1;
    if (
      booksAmount[0] > 1 &&
      booksAmount[1] > 1 &&
      booksAmount[2] > 1 &&
      booksAmount[3]
    ) {
      bookAmount = 4;
      currentDiscount = 0.8;
      booksAmount[0]--;
      booksAmount[1]--;
      booksAmount[2]--;
      booksAmount[3]--;
    } else if (
      booksAmount[0] > 1 &&
      booksAmount[1] > 1 &&
      booksAmount[2] > 1 &&
      booksAmount[3] > 1 &&
      booksAmount[4] > 1
    ) {
      bookAmount = 5;
      currentDiscount = 0.75;
      booksAmount[0]--;
      booksAmount[1]--;
      booksAmount[2]--;
      booksAmount[3]--;
      booksAmount[4]--;
    } else if (booksAmount[0] > 1 && booksAmount[1] > 1) {
      bookAmount = 2;
      currentDiscount = 0.95;
      booksAmount[0]--;
      booksAmount[1]--;
    } else if (booksAmount[0] > 1 && booksAmount[1] > 1 && booksAmount[2] > 1) {
      bookAmount = 3;
      currentDiscount = 0.9;
      booksAmount[0]--;
      booksAmount[1]--;
      booksAmount[2]--;
    } else {
      booksAmount[0]--;
    }

    totalCost += bookAmount * baseCost * currentDiscount;
  }

  // This hurt my brain

  return totalCost;
};
