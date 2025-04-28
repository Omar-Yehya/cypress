/// <reference types="cypress"/>

describe('TechGlobal Training Home Page Validation', () => {
    // before(() =>{
    //     cy.log('Starting TechGlobal training Home Page validation...')
    // })

    // after(() =>{
    //     cy.log('Finish TechGlobal training Home Page validation...')
    // })

    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/')
    })

    afterEach(() =>{
        cy.log('Test is complete')
    })

    it('Validate Welcom section', () =>{
    })

    it('Validtae About Us section', () =>{

    })

    it('Validate Programs section', () =>{
    })
})
