//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const promisify = (givenFunction) => {
  return (...args) =>
    new Promise((resolve, reject) => {
      givenFunction(...args, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
};

export const all = (promises) => {
  throw new Error("Remove this line and implement the function");
};

export const allSettled = (promises) => {
  throw new Error("Remove this line and implement the function");
};

export const race = (promises) => {
  throw new Error("Remove this line and implement the function");
};

export const any = (promises) => {
  throw new Error("Remove this line and implement the function");
};
