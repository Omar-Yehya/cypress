///<reference types="cypress" />


describe('incorrect email and password', () =>{

    it('get on page and verify', () =>{
        cy.visit('https://automationexercise.com/login')

        cy.get('.logo.pull-left')
        .should('be.visible')

        cy.get('[data-qa="login-email"]').type('abc123@gmail.com')
        cy.get('[data-qa="login-password"]').type('abc123')
        cy.get('[data-qa="login-button"]').click()

        cy.contains('Your email or password is incorrect!')
        .should('be.visible')

    })

})