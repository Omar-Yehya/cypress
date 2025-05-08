///<reference types='cypress' />

describe('Handle multiple Windows', () =>{
    beforeEach(() =>{
        cy.visit('https://www.techglobal-training.com/frontend')
        cy.clickCard('Multiple Windows')

    })

    
    it('tabs', () =>{
        cy.get('#apple').should('have.attr', 'target', '_blank')
        cy.get('#apple').invoke('removeAttr', 'target').click()
        cy.title().should('contain', 'Apple')
        cy.go(-1)

        cy.title().then((title) => {
            cy.wrap(title.toLowerCase()).should('contain', 'techglobal')
        })
    })
    
})
