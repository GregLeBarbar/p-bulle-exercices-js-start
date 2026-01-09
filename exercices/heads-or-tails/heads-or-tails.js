export function headsOrTails() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random() < 0.5);
    }, 1000);
  });
}
