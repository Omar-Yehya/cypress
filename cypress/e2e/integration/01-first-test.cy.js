/// <reference types="cypress" />


it('Validate TechGlobal URL and title', () => {
    cy.visit('https://www.techglobal-training.com/')

    //validate  
    cy.url().should('eq', 'https://www.techglobal-training.com/')
    cy.url().should('not.be', 'www.apple.com')
    cy.url().should('contain', 'techglobal')
    cy.url().should('not.contain', 'apple')


    cy.title().should('eq', 'TechGlobal Training | Home')
    cy.title().should('equal', 'TechGlobal Training | Home')
    cy.title().should('not.be', 'TechGlobal raining | Home')



})

