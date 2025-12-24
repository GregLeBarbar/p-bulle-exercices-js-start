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
  if (promises === undefined) {
    return Promise.resolve(undefined);
  }

  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

export const allSettled = (promises) => {
  if (promises === undefined) {
    return Promise.resolve(undefined);
  }

  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve) => {
    const results = [];
    let completed = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((value) => {
          results[index] = value;
        })
        .catch((error) => {
          results[index] = error;
        })
        .finally(() => {
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

export const race = (promises) => {
  if (promises === undefined) {
    return Promise.resolve(undefined);
  }

  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      Promise.resolve(p).then(resolve).catch(reject);
    });
  });
};

export const any = (promises) => {
  if (promises === undefined) {
    return Promise.resolve(undefined);
  }

  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    const errors = [];
    let failedCount = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then(resolve)
        .catch((error) => {
          errors[index] = error;
          failedCount++;

          if (failedCount === promises.length) {
            reject(errors);
          }
        });
    });
  });
};
