/// <reference types="cypress"/>

describe("Handling iFrames", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend");
      cy.contains('.card', 'IFrames').click()
    });
  
    // it('iFrames', () => {
    //   cy.get('#form_frame')
    //   .its('0.contentDocument.body')
    //   .find('#first_name')
    //   .type('John')


    //   cy.get('#form_frame')
    //   .its('0.contentDocument.body')
    //   .find('#last_name')
    //   .type('Doe')
    // })

    it('iFrames', () => {
        const arr = ['John', 'Doe']
        
        cy.get('#form_frame')
        .its('0.contentDocument.body')
        .find('[id$="name"]').each((el, index) =>{
            cy.wrap(el).type(arr[index])

        })
        
        cy.get('#form_frame')
        .its('0.contentDocument.body')
        .find('#submit').click()

        cy.get('#result')
        .should('have.text', `You entered: ${arr[0]} ${arr[1]}`)

        

    })



  })
