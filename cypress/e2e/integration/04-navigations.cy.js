///<reference types = "cypress"/>

describe('Cypress navigation', () =>{
    it('Refresh, go back go forward', () =>{
        cy.visit('https://www.techglobal-training.com/')
        cy.reload()
        cy.visit('https://www.google.com/')
        

        cy.go('back')

        cy.go('forward')
    })
})