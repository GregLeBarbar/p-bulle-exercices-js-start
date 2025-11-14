//
// Implémentation des fonctions utilitaires de Promises
//

/**
 * Convertit une fonction basée sur des callbacks en fonction basée sur des Promises
 * @param {Function} fn - Une fonction qui prend (value, callback) où callback est (error, result)
 * @returns {Function} - Une fonction qui retourne une Promise
 */
export const promisify = (fn) => {
  return (value) => {
    return new Promise((resolve, reject) => {
      fn(value, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };
};

/**
 * Se résout quand toutes les promises se résolvent, rejette si une promise rejette
 * @param {Array} promises - Tableau de promises
 * @returns {Promise} - Se résout avec un tableau de résultats dans l'ordre
 */
export const all = (promises) => {
  // Gestion du cas sans arguments
  if (promises === undefined) {
    return Promise.resolve(undefined);
  }

  // Gestion du cas tableau vide
  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    const results = [];
    let completedCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completedCount++;

          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

/**
 * Se résout quand toutes les promises sont terminées (résolues ou rejetées)
 * @param {Array} promises - Tableau de promises
 * @returns {Promise} - Se résout avec un tableau de tous les résultats/erreurs dans l'ordre
 */
export const allSettled = (promises) => {
  // Gestion du cas sans arguments
  if (promises === undefined) {
    return Promise.resolve(undefined);
  }

  // Gestion du cas tableau vide
  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve) => {
    const results = [];
    let settledCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          settledCount++;

          if (settledCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          results[index] = error;
          settledCount++;

          if (settledCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

/**
 * Se résout ou rejette avec la première promise qui se termine
 * @param {Array} promises - Tableau de promises
 * @returns {Promise} - Se résout/rejette avec la première promise terminée
 */
export const race = (promises) => {
  // Gestion du cas sans arguments
  if (promises === undefined) {
    return Promise.resolve(undefined);
  }

  // Gestion du cas tableau vide
  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};

/**
 * Se résout avec la première promise qui réussit
 * Rejette seulement si toutes les promises rejettent
 * @param {Array} promises - Tableau de promises
 * @returns {Promise} - Se résout avec le premier succès ou rejette avec un tableau d'erreurs
 */
export const any = (promises) => {
  // Gestion du cas sans arguments
  if (promises === undefined) {
    return Promise.resolve(undefined);
  }

  // Gestion du cas tableau vide
  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    const errors = [];
    let rejectedCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          errors[index] = error;
          rejectedCount++;

          if (rejectedCount === promises.length) {
            reject(errors);
          }
        });
    });
  });
};
