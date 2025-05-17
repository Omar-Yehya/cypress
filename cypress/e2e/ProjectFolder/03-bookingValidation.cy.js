///<reference types="cypress"/>

import { BookingValidation } from "../../pages/BookingValidation"

const bookingValidation =  new BookingValidation()
describe('Validate frontend booking web page', () =>{
    beforeEach(() =>{
        cy.visit('https://www.techglobal-training.com/frontend/booking')
    
    })

    it('validate default book your trip form', () =>{
        bookingValidation.getOneWayRadioButton()
        .should('be.visible')
        .and('be.enabled')
        .and('be.checked')

        bookingValidation.getRoundTripRadioButton()
        .should('be.visible')
        .and('be.enabled')
        .and('not.be.checked')

        bookingValidation.getCabinClassLabel()
        .should('be.visible')

        bookingValidation.getCabinClassDropdown()
        .should('be.visible')

        bookingValidation.getFromLabel()
        .should('be.visible')
        
        bookingValidation.getFromDropdown()
        .should('be.visible')

        bookingValidation.getToLabel()
        .should('be.visible')

        bookingValidation.getToDropDown()
        .should('be.visible')

        bookingValidation.getDepartLabel()
        .should('be.visible')

        bookingValidation.getDepartDropDown()
        .should('be.visible')

        bookingValidation.getReturnLabel()
        .should('be.visible')

        bookingValidation.getReturnedDateDis()
        .should('be.visible')
        .and('be.disabled')

        bookingValidation.getNumberOfPassengersLabel()
        .should('be.visible')

        bookingValidation.getPassengerSelect()
        .contains('1')

        bookingValidation.getPassengerOneLabel()
        .should('be.visible')

        bookingValidation.getPassengerOneDropDown()
        .contains('Adult (16-64)')

        bookingValidation.getBookButton()
        .should('be.visible')
        .and('be.enabled')


    })

    it('Validate the Book your trip when round trip is selected', () =>{
        bookingValidation.getRoundTripRadioButton().click()

        bookingValidation.getOneWayRadioButton()
        .should('not.be.checked')

        bookingValidation.getCabinClassLabel()
        .should('be.visible')

        bookingValidation.getCabinClassDropdown()
        .should('be.visible')

        bookingValidation.getFromLabel()
        .should('be.visible')
        
        bookingValidation.getFromDropdown()
        .should('be.visible')

        bookingValidation.getToLabel()
        .should('be.visible')

        bookingValidation.getToDropDown()
        .should('be.visible')

        bookingValidation.getDepartLabel()
        .should('be.visible')

        bookingValidation.getDepartDropDown()
        .should('be.visible')

        bookingValidation.getReturnLabel()
        .should('be.visible')

        bookingValidation.getReturnDateEna()
        .should('be.visible') 

        bookingValidation.getNumberOfPassengersLabel()
        .should('be.visible')

        bookingValidation.getPassengerSelect()
        .contains('1')

        bookingValidation.getPassengerOneLabel()
        .should('be.visible')

        bookingValidation.getPassengerOneDropDown()
        .contains('Adult (16-64)')

        bookingValidation.getBookButton()
        .should('be.visible')
        .and('be.enabled')
    })

    it('Validate booking for 1 passanger and one way', () =>{
        bookingValidation.getOneWayRadioButton().click()

        bookingValidation.getCabinClassDropdown().select('Business')

        bookingValidation.getFromDropdown().select('Illinois')

        bookingValidation.getToDropDown().find('select').select('Florida')

        bookingValidation.getDepartDropDown().clear().type('05/23/2025')

        bookingValidation.getPassengerSelect().select('1')

        bookingValidation.getPassengerOneDropDown().find('select').select('Senior (65+)')

        bookingValidation.getBookButton().click()

        cy.get('div.mt-4').should('contain', 'Number of Passengers: 1');
        cy.get('div.mt-4').should('contain', 'Passenger 1: Senior (65+)');
        cy.get('div.mt-4').should('contain', 'Cabin class: Business');

      

    })

    it('Validtae the booking for 1 passanger and round trip', () =>{

     bookingValidation.getRoundTripRadioButton().click()

     bookingValidation.getCabinClassDropdown().select('First')

     bookingValidation.getFromDropdown().select('California')

     bookingValidation.getToDropDown().find('select').select('Illinois')

     bookingValidation.getDepartDropDown().clear().type('05/24/2025')

     bookingValidation.getReturnDateEna().clear().type('06/24/2025')

     bookingValidation.getPassengerSelect().select('1')

     bookingValidation.getPassengerOneDropDown().find('select').select('Adult (16-64)')

     bookingValidation.getBookButton().click()

     cy.get('div[style*="width: 48%"]').first().within(() => {
        cy.get('h1').should('have.text', 'DEPART')
        cy.get('h3').should('have.text', 'CA to IL')
        cy.get('p').should('have.text', 'Sat May 24 2025')
      })

      cy.get('div[style*="width: 48%"]').eq(1).within(() => {
        cy.get('h1').should('have.text', 'RETURN')
        cy.get('h3').should('have.text', 'IL to CA')
        cy.get('p').should('have.text', 'Tue Jun 24 2025')
      })

      cy.get('div.mt-4').should('contain', 'Number of Passengers: 1')
      cy.get('div.mt-4').should('contain', 'Passenger 1: Adult (16-64)')
      cy.get('div.mt-4').should('contain', 'Cabin class: First')


    })

    it('Validate booking for 2 passangers one way', () =>{
        bookingValidation.getOneWayRadioButton().click()

        bookingValidation.getCabinClassDropdown().select('Premium Economy')

        bookingValidation.getFromDropdown().select('New York')

        bookingValidation.getToDropDown().find('select').select('Texas')

        bookingValidation.getDepartDropDown().clear().type('05/18/2025')

        bookingValidation.getPassengerSelect().select('2')

        bookingValidation.getPassengerOneDropDown().find('select').select('Adult (16-64)')

        bookingValidation.getPassengerTwoDropdown().select('Child (2-11)')

        bookingValidation.getBookButton().click()

        cy.get('div[style*="width: 48%"]').first().within(() => {
            cy.get('h1').should('have.text', 'DEPART')
            cy.get('h3').eq(0).should('have.text', 'NY to TX')         
            cy.get('p').should('have.text', 'Sun May 18 2025')
          })

       cy.get('div.mt-4').should('contain', 'Number of Passengers: 2')
       cy.get('div.mt-4').should('contain', 'Passenger 1: Adult (16-64)')
       cy.get('div.mt-4').should('contain', 'Passenger 2: Child (2-11)')
       cy.get('div.mt-4').should('contain', 'Cabin class: Premium Economy')



    })

})












