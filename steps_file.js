const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = function () {
  return actor({
    // Setup Databases
    clearSetups() {
      this.amOnPage(`${backdoorBaseUrl}/clear-setups`);
    },
    setupPlaces() {
      this.amOnPage(`${backdoorBaseUrl}/setup-places`);
    },

    // Actions

    // Seeing UI Components

  });
};
