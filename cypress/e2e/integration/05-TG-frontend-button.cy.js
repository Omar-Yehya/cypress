///<reference types = "cypress" />

describe('Cypress Selectors', () => {
    beforeEach( () =>{
        cy.visit('https://www.techglobal-training.com/frontend/html-elements')
    })

    it('Validate register Button', () =>{
        cy.get('#register_button')
            .should('be.visible')
            .and('be.enabled')
            .and('have.text', 'Register')
            .click()

        cy.get('.mt-1')
            .should('be.visible')
            .and('have.text', 'You clicked on “Register”')

    })

    it('Validate Heading Section', () => {
        cy.get('#languages_heading')
        .should('be.visible')
        .and('have.text', 'Programming Languages')

        cy.get('#tools_heading')
        .should('be.visible')
        .and('have.text', 'Automation Tools')
    })

 
})

console.log('hey DUde')








