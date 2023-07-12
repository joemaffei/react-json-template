/** @type {import('jest').Config} */
module.exports = {
  moduleFileExtensions: ["ts", "js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};
