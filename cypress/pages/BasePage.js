
export class BasePage{
    // Locators

    getlogo(){
        return cy.get('#logo')
    }
    getExercisesDropdown(){
        return cy.get('#dropdown-exercises')
    }
    getMainHeading(){
        return cy.get('#main_heading')
    }
    getMockInterviews(){
        return cy.contains('div', 'Mock Interview')
    }
}