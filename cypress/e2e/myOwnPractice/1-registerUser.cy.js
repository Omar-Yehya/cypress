///<reference types='cypress' />


describe('Register User', () =>{
    beforeEach(() =>{
        cy.visit('https://automationexercise.com/')
    })


    it('Make sure home page is visible', () =>{
        cy.get('body')
        .should('be.visible')
    })

    it('Verify sign-up', () =>{
        cy.get('.fa.fa-lock').click()

        cy.contains('.signup-form', 'New User Signup!')
        .should('be.visible')

        cy.get('.signup-form h2')
        .should('have.text', 'New User Signup!')


        cy.get('[data-qa="signup-name"]').type('John')
        cy.get('[data-qa="signup-email"]').type('jdoe12d23@gmail.com')
        cy.get('button[data-qa="signup-button"]').click()
        cy.get('#id_gender1').click()
        cy.get('#password').type('foenoe1d223')
        cy.get('#days').select('23')
        cy.get('#months').select('9')
        cy.get('#years').select('2000')
        cy.get('#newsletter').click()
        cy.get('#optin').click()

        let firstName = 'John'
        cy.get('#first_name').type(firstName)
        cy.get('#last_name').type('Doe')
        cy.get('#company').type('GMC')
        cy.get('#address1').type('1234 Winston street ')
        cy.get('#address2').type('4321 street Winston')
        cy.get('#country').select('United States')
        cy.get('#state').type('New York')
        cy.get('#city').type('Central Park')
        cy.get('#zipcode').type('60407')
        cy.get('#mobile_number').type('773-412-1223')
        cy.get('[data-qa="create-account"]').click()

        cy.get('div >h2.title b')
        .should('be.visible')
        .and('have.text', 'Account Created!')

        cy.get('div.pull-right [data-qa="continue-button"]').click()


        cy.contains('b', firstName)        
        .should('be.visible')


        cy.get('.fa.fa-trash-o').click()

        cy.get('div>h2 b')
        .should('be.visible')
        .and('have.text', 'Account Deleted!')

        cy.get('div>a.btn').click()





    })

})
