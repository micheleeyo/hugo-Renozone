const { defineConfig } = require("cypress");
module.exports = {
  projectId: "jf1ons"
}
module.exports = 
defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8888',
    supportFile: false,
  },
});
