///<reference types='cypress'/>

describe('Cypress Actions', () =>{
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend')
        cy.contains('.card', 'HTML Elements').click()

    })


    it("Click Action - click()", () =>{
        cy.get('#register_button').click()
        cy.get('span.mt-1.is-block')
        .should('have.text', 'You clicked on “Register”')


        cy.get('#register_button').next().click()
        cy.get('span.mt-1.is-block')
        .should('have.text', 'You clicked on “Sign in”')

    })

    it('Checkbox & Radio Buttons - check()', ()=>{
        
        //cy.get('#apple_check').click()

        cy.get('#checkbox_1').check().should('be.checked')
        .uncheck()
        .should('not.be.checked')


    })

    it('Check Tesla Checkbox', () =>{
        cy.get('#checkbox_3').check().should('be.checked')
        .uncheck()
        .should('not.be.checked')
    })

    it('Radio Buttons  multiple elements- check()', ()=>{
    
    


        cy.get('input[id^="radio_1_"]')   
        .should('have.length', 3)
        .each((el) =>{           //el is not cypress so must use cy.wrap(el) because its Jq
        
            cy.wrap(el).check().should('be.checked')
        })
    })




})


