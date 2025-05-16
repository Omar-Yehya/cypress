///<reference types="cypress"/>


describe('Login User with correct email and password', () =>{
    beforeEach(() =>{
        cy.visit('https://automationexercise.com/')
    })

    it('Verify Homepgae is visible', () =>{
        cy.visit('https://automationexercise.com/')

        cy.get('#header')
        .should('be.visible')
    })

    it('click signin/login', () =>{
        cy.get('.fa-lock').click()

        cy.contains('h2', 'Login to your account')
        .should('have.text', 'Login to your account')
    })

    it('enter email', () =>{
        cy.visit('https://automationexercise.com/login')
       
        cy.get('[data-qa="login-email"]').type('jdoe12d23@gmail.com')
        cy.get('[data-qa="login-password"]').type('foenoe1d223')
        cy.get('[data-qa="login-button"]').click()


        cy.contains('Logged in as')
        .should('be.visible')
        .and('contain.text', 'Logged in as ')

        cy.get('.fa-trash-o').click()

        cy.get('h2 b')
        .should('exist')
        .and('be.visible');

    })

})


