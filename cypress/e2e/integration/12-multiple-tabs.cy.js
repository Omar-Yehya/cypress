///<reference types='cypress' />

describe('Handle multiple Windows', () =>{
    beforeEach(() =>{
        cy.visit('https://www.techglobal-training.com/frontend')
        cy.clickCard('Multiple Windows')

    })

    it('tabs', () =>{
        cy.get('#apple').should('have.attr', 'target', '_blank')
        cy.get('#apple').invoke('removeAttr', 'target').click()
        cy.go('back')
        cy.url().should('include', 'https://www.techglobal-training.com/frontend/multiple-windows');

    })
    
})
