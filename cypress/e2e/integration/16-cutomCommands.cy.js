///<reference types='cypress' />

describe('custom commands', () =>{
    beforeEach(() =>{
        cy.visit('https://www.techglobal-training.com/frontend/html-elements')
    })


    it('Parent Command', () =>{

        cy.selectDropdown('#company_dropdown1', 'Tesla')
        cy.loginApp('ben@gmail.com', 'Omar')

    })

// 
    // it('Child Command', () =>{
    //    // cy.get('#main_heading').logText()
    //    //cy.get('#main_heading').haveText('HTML Elements')
    // })

    

})









// function navigationClick(clickLink){

//     if(clickLink === 'Home Page'){
//         cy.contains('.navBar', clickLink).click()
//         cy.url().should('eq', '/path/of/url')

//     }
// }