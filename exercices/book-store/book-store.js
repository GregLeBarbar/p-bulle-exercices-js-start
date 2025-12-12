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

  function compareNumbers(a, b) {
    return a - b;
  }

  function canRemoveFromNumber(number, remove) {
    return number - remove >= 0 ? true : false;
  }

  function findHighestGroup(groupsOf) {
    let groupAmount = 0;

    let booksToCheck = [].concat(booksAmount);

    let highest = 0;
    for (let i = 0; i < booksToCheck.length; i++) {
      if (booksToCheck[i] > highest) {
        highest = booksToCheck[i];
      }
    }

    let i = 0;
    let canContinue = true;

    while (canContinue) {
      booksToCheck.sort(compareNumbers);
      booksToCheck.reverse();
      booksToCheck = booksToCheck
        .filter((a) => a > 0)
        .concat(booksToCheck.filter((a) => a == 0));

      canContinue = booksToCheck.every((amount, index) =>
        index < groupsOf ? canRemoveFromNumber(amount, 1) : true
      );

      if (
        canContinue &&
        i > groupAmount &&
        booksToCheck.every((amount, index) =>
          index < groupsOf ? canRemoveFromNumber(amount, 1) : true
        )
      ) {
        for (let bookIndex = 0; bookIndex < booksToCheck.length; bookIndex++) {
          booksToCheck[bookIndex]--;
        }

        groupAmount++;
      }

      i++;
    }

    return groupAmount;
  }

  while (booksAmount.some((amount) => amount > 0)) {
    booksAmount.sort(compareNumbers);
    booksAmount.reverse();
    booksAmount = booksAmount
      .filter((a) => a > 0)
      .concat(booksAmount.filter((a) => a == 0));

    let currentDiscount = 0;
    let bookAmount = 0;

    const groupsOf5 = findHighestGroup(5);
    const groupsOf4 = findHighestGroup(4);
    const groupsOf3 = findHighestGroup(3);
    const groupsOf2 = findHighestGroup(2);
    const groupsOf1 = findHighestGroup(1);

    if (groupsOf4 >= 1 && !(groupsOf5 == 1 && groupsOf3 == 1)) {
      bookAmount = 4;
      currentDiscount = 0.8;
      booksAmount[0]--;
      booksAmount[1]--;
      booksAmount[2]--;
      booksAmount[3]--;
    } else if (groupsOf5 >= 1) {
      bookAmount = 5;
      currentDiscount = 0.75;
      booksAmount[0]--;
      booksAmount[1]--;
      booksAmount[2]--;
      booksAmount[3]--;
      booksAmount[4]--;
    } else if (groupsOf3 >= 1) {
      bookAmount = 3;
      currentDiscount = 0.9;
      booksAmount[0]--;
      booksAmount[1]--;
      booksAmount[2]--;
    } else if (groupsOf2 >= 1) {
      bookAmount = 2;
      currentDiscount = 0.95;
      booksAmount[0]--;
      booksAmount[1]--;
    } else {
      bookAmount = 1;
      currentDiscount = 1;
      booksAmount[0]--;
    }

    totalCost += bookAmount * baseCost * currentDiscount;
  }

  // This still hurts my brain

  return totalCost;
};
