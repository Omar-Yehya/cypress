///<reference types='cypress' />

import { TablesPage } from "../../pages/TablesPage";

const tablesPage = new TablesPage
describe("Static Tables", {tages: '@regression'}, () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend')
        cy.clickCard("Tables");
        cy.fixture('example.json').then(function(data){
            this.headers = data.headers
        })
        cy.fixture('example.json').then(function(data){
            this.tabledata = data.staticTable
        })
       
       
    });
  
    /**
     * TEST CASE 1
     * Verify the headers of the table
     * Go to https://techglobal-training.com/frontend/
     * Click on the "Tables" card
     * Validate the headers of the table are "Rank", "Company", "Employees", and "Country"
     */
    it("Verify the headers of the table", {tags: '@table'},function() {
        tablesPage.getCompanyTabelHeader().each((el, index) =>{
            cy.wrap(el).should('have.text', this.headers[index])
        })
     
    })

    it('Validate Static table data', function() {
        tablesPage.getStaticTableData().each((el,index)=>{
            cy.wrap(el).should('have.text', this.tabledata[index])
        })
    })


  });


 














