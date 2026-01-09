//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  if (books.length === 0) return 0;

  const counts = [0, 0, 0, 0, 0];
  books.forEach(b => counts[b - 1]++);

  const groups = [];

  while (counts.some(c => c > 0)) {
    let size = 0;
    for (let i = 0; i < 5; i++) {
      if (counts[i] > 0) {
        counts[i]--;
        size++;
      }
    }
    groups.push(size);
  }

  // Fix 5+3 -> 4+4
  while (groups.includes(5) && groups.includes(3)) {
    groups[groups.indexOf(5)] = 4;
    groups[groups.indexOf(3)] = 4;
  }

  const discounts = {
    1: 1,
    2: 0.95,
    3: 0.9,
    4: 0.8,
    5: 0.75,
  };

  return groups.reduce(
    (sum, size) => sum + size * 800 * discounts[size],
    0
  );
};