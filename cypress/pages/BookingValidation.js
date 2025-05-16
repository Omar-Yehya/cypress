import { BasePage } from "./BasePage";

class BookingValidation extends BasePage{
    getOneWayRadioButton(){
        return cy.get('[class$="ml-0"] .mr-1')
    }

    getRoundTripRadioButton(){
        return cy.get('label[class$="radio"] .mr-1')
    }
    
    getCabinClassLabel(){
        return cy.contains('label', 'Cabin Class')
    }

    getCabinClassDropdown(){
        return cy.contains('label', 'Cabin Class')
                .nextAll('div.select')
                .first()
                .find('select')
    }

   getFromLabel(){
    return cy.contains('label', 'From')
   }

   getFromDropdown(){
    return cy.contains('label', 'From')
            .nextAll('div.select')
            .first()
            .find('select')
   }



















   getBookButton(){
    return cy.get('.Button_c_button__TmkRS ')
   }
}