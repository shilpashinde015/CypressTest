const { defineConfig } = require('cypress');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
//CYPRESS_BASE_URL = "https://ineuron-courses.vercel.app"
module.exports = defineConfig({
 // chromeWebSecurity: false,
  projectId: "65jvkg",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir:"cypress/reports",
    overwrite : false,
    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "longDate",
    charts: true,
    reportPageTitle: 'TestSuit for Cypress TC',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    code : false,
    autoOpen:true
    },
    env: {
      base_url :"https://ineuron-courses.vercel.app",
      login_url:'/login',
      sign_up:'/signup'
    },
 
 retries: {
<<<<<<< HEAD
  "runMode": 0,
  "openMode": 0
},
=======
    "runMode": 0,
    "openMode": 0
  },
>>>>>>> 97f77c786cd09acedc072e8414aca492228ff501
  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
  },
});
