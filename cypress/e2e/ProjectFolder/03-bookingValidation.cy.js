///<reference types="cypress"/>


describe('Validate frontend booking web page', () =>{
    beforeEach(() =>{
        cy.visit('https://www.techglobal-training.com/frontend/booking')
    
    })

    it('validate default book your trip form', () =>{
        cy.get('[class$="ml-0"] .mr-1')
        .should('be.enabled')
        .and('be.checked')

        cy.get('label[class$="radio"] .mr-1')
        .should('be.enabled')
        .and('not.be.checked')

        cy.contains('label', 'Cabin Class')
        .should('be.visible')

        cy.contains('label', 'Cabin Class')
        .nextAll('div.select')
        .first()
        .find('select')
        .should('be.visible')

        cy.contains('label', 'From')
            .nextAll('div.select')
            .first()
            .find('select')
            .should('be.visible')

        

    })

})




