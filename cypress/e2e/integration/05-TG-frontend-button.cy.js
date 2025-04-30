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

 
    it('Understand css syntax -', () =>{
        cy.get('#checkbox-button-group')

    })

    it('Understand CSS syntax locating child -', () =>{
        cy.get('#checkbox-button-group > div > #apple_check')

      
    })

    it('validtae facebook link and enter text', () =>{
        cy.get('#facebook_link, #text_input1')
        .should('be.visible')
    })

 
    it('validtae boxes on dynamic elements', () =>{
        cy.visit('https://www.techglobal-training.com/frontend/dynamic-elements')
        cy.get('p[id^="box_1_"], p[id^="box_2_"]')
        .should('be.visible')

    })

    it('Pseudo Class', () => {
        cy.get('#orderd_list')
    })

})



