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
// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add('clickCard', (link) => { 
    cy.contains('.card, [class*="projectCard"]', link).click();
   })



Cypress.Commands.add('selectDropdown', (locator, option) =>{
    cy.get(locator).select(option)
})


Cypress.Commands.add('loginApp', (email, name) =>{
    cy.get('[placeholder$="Email"]').type(email)
    cy.get('input[placeholder$="Name"]').clear().type(name)
})

//child method
//subject is treated as jQuery 
Cypress.Commands.add('logText',{prevSubject: true}, (subject) =>{
    const text = subject.text()
    cy.log(text)
})


Cypress.Commands.add('haveText', {prevSubject: 'element'}, (subject, expectedText)=>{
     cy.wrap(subject).should('have.text', expectedText)
})

Cypress.Commands.add('validateAttr', {prevSubject: 'element'}, (subject, attr, expectedValue)=>{
    if(expectedValue === undefined){
        return cy.wrap(subject).should('have.attr', attr)
    }else{
        return cy.wrap(subject).should('have.attr', attr, expectedValue)
    }
})

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