///<reference types='cypress' />


describe('Alerts section', () =>{

    beforeEach(() =>{
        cy.visit('https://www.techglobal-training.com/frontend/alerts')
    })

   
    it('Handle warning', () =>{
        cy.get('#warning_alert').click()

        cy.on('window:alert', (str) =>{
            console.log(str)
            
        })

    })




    it('confirmation alert', () =>{
        cy.get('#confirmation_alert').click()

        cy.on('window:confirm', (str) =>{
            console.log(str)
            expect(str).to.equal('Would you like to stay on TechGlobal Training application?') // or whatever the expected message is
            return false 
        })

        cy.get('#action')
        .should('have.text', 'You rejected the alert by clicking Cancel.')
    })


    it('Handle prompt', () => {
        cy.window().then((win) => {
          cy.stub(win, 'prompt').callsFake((message) => {
            expect(message).to.equal('What would you like to say to TechGlobal?')
            return 'My message'
          })
        })
      
        cy.get('#prompt_alert').click()
      })



})




/*

    it('Handle warning', () =>{
        cy.get('#warning_alert').click()

        cy.on('window:alert', (str) =>{
            console.log(str)
            
        })

    })




    it('confirmation alert', () =>{
        cy.get('#confirmation_alert').click()

        cy.on('window:confirm', (str) =>{
            console.log(str)
            expect(str).to.equal('Would you like to stay on TechGlobal Training application?') // or whatever the expected message is
            return false 
        })

        cy.get('#action')
        .should('have.text', 'You rejected the alert by clicking Cancel.')
    })


    it('Handle prompt', () => {
        cy.window().then((win) => {
          cy.stub(win, 'prompt').callsFake((message) => {
            expect(message).to.equal('What would you like to say to TechGlobal?')
            return 'My message'
          })
        })
      
        cy.get('#prompt_alert').click()
      })


*/