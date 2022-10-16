// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login', (user) => {
    cy.get('input[name=email1]').type(user.email)
  
    cy.get('input[name=password1]').type(user.password)
    
  })
Cypress.Commands.add('clickButton', (buttonLabel) => {
    cy.get('button').contains(buttonLabel).click();
  })
Cypress.Commands.add('UploadFile',function (locator,fileName){
    cy.get(locator).attachFile(fileName)
})
Cypress.Commands.add('typekey',function(locator,data){
    cy.get(locator).type(data)
})

Cypress.Commands.add('datePick',function(locator,datetext,selectElement){
   cy.xpath(locator).click()
   cy.xpath(selectElement)
   .each(function(ele,list){
    cy.log(ele.text())
    if(ele.text()== datetext){
        cy.wrap(ele).click()
    }
   })
})