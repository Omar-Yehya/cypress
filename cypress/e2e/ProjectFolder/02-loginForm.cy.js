///<reference types='cypress' />

describe('Login Form validation', () =>{
    beforeEach(() =>{
        cy.visit('https://www.techglobal-training.com/frontend/login')
    })

    it('Validate the login form', () =>{
        cy.get('#username')
        .should('be.visible')
        .and('not.have.attr', 'required')

        cy.contains('label', 'Please enter your username')
        .should('have.text', 'Please enter your username')

        cy.get('#password')
        .should('be.visible')
        .and('not.have.attr', 'required')

        cy.contains('label','Please enter your password')
        .should('have.text', 'Please enter your password')
        
        cy.get('#login_btn')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'LOGIN')

        cy.get('#login_btn').next()
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Forgot Password?')

    })

    it('Validate the valid login', () =>{
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').click()

        cy.get('#success_lgn')
        .should('be.visible')
        .and('have.text', 'You are logged in')

        cy.get('#logout')
        .should('be.visible')
        .and('have.text', 'LOGOUT')


    })

    it('Validate the logout', () =>{
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').click()
        cy.get('#logout').click()

        cy.get('h1.is-size-3')
        .should('be.visible')

    })

    it('validate the forgot password link and reset password', () =>{
        cy.get('#login_btn').next().click()

        cy.get('#modal_title')
        .should('be.visible')

        cy.get('button.delete')
        .should('be.visible')

        cy.get('#email')
        .should('be.visible')

        cy.get('label[for="email"]')
        .should('be.visible')
        .and('contain.text', "Enter your email address and we'll send you a link to reset your password.")

        cy.get('#submit')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'SUBMIT')
    })

    it('validate the reset password modal close button', () =>{
        cy.get('#login_btn').next().realClick()
        cy.get('#email').type('johnbro@bing.com')
        cy.get('#submit').realClick()

        cy.get('#confirmation_message')
        .should('have.text', 'A link to reset your password has been sent to your email address.')
        
    })

    it('Validate the invalid login with the empty credentials', () =>{
        cy.get('#login_btn').realClick()

        cy.get('#error_message')
        .should('be.visible')
        .and('have.text', 'Invalid Username entered!')


    })
    it('Validtae invalid login with wrong username', () =>{
        cy.get('#username').type('John')
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').realClick()

        cy.get('#error_message')
        .should('be.visible')
        .and('have.text', 'Invalid Username entered!')


    })
    it('validate wrong password', () =>{
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('1234')
        cy.get('#login_btn').realClick()

        cy.get('#error_message')
        .should('be.visible')
        .and('have.text', 'Invalid Password entered!')

    })
    it('validtae wrong username and password', () =>{
        cy.get('#username').type('John')
        cy.get('#password').type('1234')
        cy.get('#login_btn').realClick()

        
        cy.get('#error_message')
        .should('be.visible')
        .and('have.text', 'Invalid Username entered!')

    })
//waits
    it.only('Practice manuplating url using js', () => {
    cy.visit('https://www.techglobal-training.com/frontend/alerts')
 
        

    })

})

