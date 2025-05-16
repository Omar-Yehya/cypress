import { BasePage } from "./BasePage"

class LoginPage extends BasePage{
    
    //Locators
    getUserNameField(){
        return cy.get('#username')
    }
    getPasswordField(){
        return cy.get('#password')
    }

    getSubmitButton(){
        return cy.get('#login_btn')
    }

    getLogoutButtonField(){
        return cy.get('#logout')
    }


    getSuccessMessage(){
        return cy.get('#success_lgn')
    }

    getErrorMessage(){
        return cy.get('#error_message')
    }

    clickLoginButton(){
        this.getSubmitButton().click()
    }



    /**
     * 
     * @param {string} username 
     * @param {string} password 
     * @example
     * userLogin('Tech', 'Global')
     */
    userLogin(username, password){
        this.getUserNameField().type(username)
        this.getPasswordField().type(password)
        this.clickLoginButton()
    }

}


export default LoginPage
