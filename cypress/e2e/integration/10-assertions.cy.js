///<reference types='cypress' />


describe('Cypress Assertions', () =>{
    beforeEach(() =>{
        cy.visit('https://www.techglobal-training.com/')
    })

    it('Default Assertions',() =>{
        cy.get('img[alt="Tech Global Logo"]')
        .scrollIntoView()
        .and('be.visible')
        .and('have.attr', 'alt', 'Tech Global Logo')
    })
        
    it('validtae Mock interview button', () =>{
        cy.get('button[class^="button is-white"]').click()
        cy.url().should('eq', 'https://www.techglobal-training.com/login')

        
    })

    it('Explixit Assertions with then()', () =>{
        cy.get('#dropdown-testing').then(el =>{
            const text = el.text() //jQuery method  el.
            cy.log(text)
          
            cy.log('Elemnet color i s', el.css('color'))
            cy.log('background color', el.css('background-color'))

            expect(text).eq('Testing')
            cy.wrap(el).should('be.visible').and('have.text', 'Testing')
        })
    })

    it('Explicit Assertion with invoke()', () =>{
        cy.get('#dropdown-testing').invoke('text').then((el) =>{
            cy.log(el)
        })

    })

    it.only('Explicit Assertions with Each', () =>{
        const option = ['Java Exercises', 'JS Exercises']
        cy.get('#dropdown-exercises').realHover()
        cy.get('a[id*="j"]').should('have.length', 2).each((el, index) =>{
            expect(el).to.be.visible
            expect(el.text()).eq(option[index])

            cy.wrap(el).should('be.visible').and('have.text', option[index])
        })

        

    })

    //validtae 5 social media icon in footer 
    //validate links has techglobal in href attribute
    // validate all links has target attribute value is "_blank"

})