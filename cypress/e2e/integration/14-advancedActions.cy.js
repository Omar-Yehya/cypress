///<reference types='cypress' />


describe('advanced Actions', () =>{
    beforeEach(() =>{
        cy.visit('https://www.techglobal-training.com/frontend/actions')
    })



    it('Mouse actions', () =>{
        cy.get('#dropdown-testing').realHover()

    })

    it('Keyboard Actions', () =>{
        cy.visit('https://www.techglobal-training.com/frontend/html-elements')
        cy.get('#text_input1')
        .realClick()
        .realPress('KeyA')
        .realPress('Tab')
        .realPress('KeyB')

        //cy.get().rightclick()
        //.dbclick()


    })

    it('right click and double click', () =>{
        cy.visit('https://www.techglobal-training.com/frontend')
        //cy.get('#card-10').click()
        cy.clickCard('Actions')
        cy.url().should('include', '/action')

        const buttons = ['#click', '#right-click', '#double-click']

        buttons.forEach((selector) => {
            cy.get(selector).should('be.visible')
        })


        cy.get('#click').realClick()
        cy.get('#click_result')
        .should('have.text', 'You clicked on a button!')

        cy.get('#right-click').rightclick()
        cy.get('#right_click_result')
        .should('have.text', 'You right-clicked on a button!')

        cy.get('#double-click').dblclick()
        cy.get('#double_click_result')
        .should('have.text', 'You double-clicked on a button!')



    })

    it('Drag and Drop', () =>{
        cy.get('#drag_element').drag('#drop_element')
    })



})
