/// <reference types="cypress"/>

describe('', () =>{
    it('Samole chai assertion', () =>{
        cy.visit('https://www.techglobal-training.com/frontend/html-elements')

        cy.get('#hello_paragraph')
        .should('be.visible')
        .and('have.text', 'Hello World!')


        expect('Hello').eq('Hello')
    })
})