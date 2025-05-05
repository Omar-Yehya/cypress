///<reference types = "cypress"/>

//https://www.techglobal-training.com/frontend/actions
describe('cypress', () =>{
    beforeEach(() =>{
        cy.visit('https://www.techglobal-training.com/frontend/actions')

    })





     it('Type and clear actions', () =>{
    //     let query = 'TechGlobal'
    //     cy.get('#input_box')
    //     //.should('exist') useless becuase we have many other explicit assertions 
    //     //.and('be.visible')
    //     //.and('be.enabled')
    //     .and('have.attr', 'placeholder', 'Enter your message...')
    //     .and('have.attr', 'value','')
    //     .type(query)
    //     .should('have.attr', 'value', query)
    //     .clear()
    //     .and('have.attr', 'value','')
    //     .and('be.empty')


        cy.get('#input_box').then((input) =>{
            let placeholder = (input.attr('placeholder'))
            expect(placeholder).to.include('Enter')

            input.val('TechGlobal')
            expect(input.val()).eq('TechGlobal')
        })



    })



    it('Hover Over', () =>{
        //cy.get('#dropdown-testing').trigger('mouseover') // doesnt work and needs cypress real event dependency
        cy.get('#dropdown-testing').realHover()
        cy.get('#backend-option').click()
        

        //cy.on is used to listen if we get any uncaught:exception
        // and ingore it by returning false 
        cy.on('uncaught:exception', () =>{
            return false
        })
    })




})