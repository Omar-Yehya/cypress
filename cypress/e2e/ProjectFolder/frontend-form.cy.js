///<reference types='cypress' />



describe('Cypress project one', () =>{
beforeEach(() =>{
    cy.visit('https://www.techglobal-training.com/frontend/form-elements')
})
    it('validate heading', () =>{
        cy.get('h1[class="is-size-3"]')
        .should('be.visible')
        .and('have.text', 'Contact Us')

        cy.get('#address')
        .should('be.visible')
        .and('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')

        cy.get('#email')
        .should('be.visible')
        .and('have.text', 'info@techglobalschool.com')

        cy.get('#phone-number')
        .should('be.visible')
        .and('have.text', '(224) 580-2150')

    })

    it('Validate Full name input box', () =>{
        cy.get('input[placeholder$="name"]')
        .should('be.visible')                           
        .and('have.attr', 'placeholder', 'Enter your full name')
        .and('have.attr', 'required')
        
        cy.get('label[for="name"]').should('have.text', 'Full name *')
    })


    it.only('Validtae Gender radio button', () =>{
        const gender = ['Male', 'Female', 'Prefer not to disclose']

        cy.contains('.input', 'Male')
        .should('have.attr', 'required')

        cy.get('.control > label.label')
          .should('have.text', 'Gender *')
      
          cy.get('label.radio') 
          .each(($el, index) => {
           
            cy.wrap($el)
              .should('contain.text', gender[index]) 


        cy.get('.control input[type="radio"]')
            .each((el) =>{
                cy.wrap(el)
                .should('not.be.checked')
                .should('be.enabled')
                
        
            })
   
       })

       cy.get('input[type="radio"]').first()
       .click()
       .should('be.checked')

       cy.get('input[type="radio"]').eq(1)
       .should('not.be.checked')

       cy.get('input[type="radio"]').eq(2)
       .should('not.be.checked')


       cy.get('input[type="radio"]').eq(1)
       .click()
       .should('be.checked')

       cy.get('input[type="radio"]').first()
       .should('not.be.checked')

       cy.get('input[type="radio"]').eq(2)
       .should('not.be.checked')


    })

    it('Validtae Adress input box', () =>{
        cy.contains('.label', 'Address')
        .should('have.text', 'Address')

        cy.get('input[placeholder="Enter your address"]')
        .and('be.visible')
        .and('have.attr', 'placeholder', 'Enter your address')
        .and('not.have.attr', 'required')

    })

    it('Validate Email input box', () =>{
        cy.contains('.label', 'Email')
        .should('have.text', 'Email *')
        cy.get('input[type="email"]')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Enter your email')
        .and('have.attr', 'required')

    })

    it('Phone input box', () =>{
        cy.contains('.label', 'Phone')
        .should('have.text','Phone')

        cy.get('input[type="phone"]')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Enter your phone number')
        .and('not.have.attr', 'required')

    })


    it('Valivate message text area', () =>{
        cy.contains('.label', 'Message')
        .should('have.text', 'Message')

        cy.get('textarea.textarea')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Type your message here...')
        .and('not.have.attr', 'required')
    })

    it('Validate consent checkbox', () =>{
        cy.get('input[type="checkbox"]').click()
        .and('be.checked')
        .and('have.attr', 'required')
        cy.get('input[type="checkbox"]').click()
        .should('not.be.checked')



        cy.get('label[class="checkbox"]')
        .should('have.text', ' I give my consent to be contacted.')
    })

    it('Validate the submit button', () =>{
        cy.get('.button.is-link')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'SUBMIT')
    })

    it.only('Validtae form submission', () =>{
        cy.get('input[placeholder$="name"]').type('Omar')
        cy.get('input[type="radio"]').first().click()
        cy.get('input[placeholder="Enter your address"]').type('1600 Pennsylvania Avenue NW, Washington, DC 20500')
        cy.get('input[type="email"]').type('OkKoolaid23@bing.com')
        cy.get('input[type="phone"]').type('(773)-202-LUNAAA')
        cy.get('textarea.textarea').type('In the town where I was born Lived a man who sailed to sea And he told us of his life in the land of submarines so we sailed on to the sun till we found the sea of green and we lived beneath the waves in our yellow submarine We all live in a yellow submarine yellow submarine yellow submarine and our friends are all aboard many more of them live next door and the band begins to play we all live in a yellow submarine')
        cy.get('input[type="checkbox"]').click()
        cy.get('.button.is-link').click()
        cy.contains('strong','Thanks for submitting!' )
        .should('be.visible')
        .and('have.text', 'Thanks for submitting!')


    })

})


                            