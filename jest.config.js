// jest.config.js
module.exports = {
    testEnvironment: 'jsdom', // Ambiente para emular o browser
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Carregar configurações adicionais, como jest-dom
  };
  
