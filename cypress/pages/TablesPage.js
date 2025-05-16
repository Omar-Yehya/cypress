import { BasePage } from "./BasePage"

export class TablesPage extends BasePage{

    getCompanyTabelHeader(){
        return cy.get('.header')
    }

    getStaticTableData(){
        return cy.get('#static_table td')
    }
    
}