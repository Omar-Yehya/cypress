/// <reference types = "cypress"/> 


describe('Cypress Selectors', () =>{
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend')
    })


    it('practice web elements using - get and contains', () =>{
        cy.get('.CardGrids_CardGrids__qDdyI').as('allCards')
        cy.get('@allCards')
        
        
        cy.get('.card').first()
        cy.get('.card').last()
        cy.get('.card').eq(4)

        cy.contains('HTML Elements')

        cy.contains('.card', 'HTML Elements') 

        cy.get('@allCards').contains('HTML Elements')
    })


        it('Practice web elements - find ', () => {
            cy.contains('.card', 'HTML Elements').click()

            cy.get('#radio-button-group').find('div')
        })


   it('Practice Web Element ', () =>{
    cy.contains('.card', 'HTML Elements').click()

    cy.get('div').contains('Paragraph').next()
    cy.get('div').contains('Paragraph').nextAll()

    cy.get('#testing_paragraph').prev()
    cy.get('#testing_paragraph').prevAll()


    cy.get('#testing_paragraph').parent()
    cy.get('#testing_paragraph').parents()
    cy.get('#testing_paragraph').parentsUntil('.HtmlElements_mainContainer__Fpn6M')



    cy.get('#apple_check').parents('#checkbox-button-group')

    cy.get('#apple_check').parents('#checkbox-button-group').next()

    cy.get('#apple_check').parents('#checkbox-button-group').next().find('input')


   })
})