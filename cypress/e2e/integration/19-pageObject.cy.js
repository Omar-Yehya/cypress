///<reference types = "cypress" />
import LoginPage from "../../pages/LoginPage";


describe('Login Page Test',{tages: '@regression'}, () =>{
    beforeEach(() =>{
        cy.visit('https://www.techglobal-training.com/frontend/login')
        
        cy.fixture('example').then(function(data) {
            this.username = data.username
            this.password = data.password
        })
        
    })

const loginPage = new LoginPage

  

      it('Login with POM', {tags: "@smoke"}, function() {
        //loginPage.userLogin('TechGlobal', 'Test1234')
        loginPage.userLogin(this.username, this.password)
        loginPage.getSuccessMessage().should('be.visible')
      })

      
      it('Login with POM - Negative', () =>{
        loginPage.userLogin('TechGlo', 'Test1234')
        loginPage.getErrorMessage().should('be.visible')
      })

})