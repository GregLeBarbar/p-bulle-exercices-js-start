// jest.config.cjs
module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/exercices"],
  // Ne PAS mettre extensionsToTreatAsEsm avec Jest 30
  transform: {}, // pas de transpilation
  // (optionnel) testMatch: ["**/*.spec.js"],
};
