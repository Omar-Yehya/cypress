///<reference types='cypress' />

describe('Dropdown select', () =>{
    beforeEach(() =>{
        cy.visit('https://www.techglobal-training.com/frontend/dropdowns')
    })



    it('Select product & color', () =>{
        cy.get('#product_dropdown').select('iPhone 14 Pro Max')
        .should('have.value', 'iPhone 14 Pro Max' )
        
        cy.get('#color_dropdown').select('Yellow')
        .should('have.value', 'Yellow')


    })

    const run = [
        {
          product: 'Apple Watch Series 8',
          color: 'Yellow',
          Delivery: 'Delivery'
        },
        {
          product: 'iPhone 14 Pro Max',
          color: 'Green',
          Delivery: 'Pick up'
        },
        {
          product: 'MacBook Pro 13',
          color: 'Silver',
          Delivery: 'Pick up'
        }
      ];
      
      run.forEach((obj) => {
        it(`Validate selections for ${obj.product}`, () => {
      
          cy.get('#product_dropdown').select(obj.product)
            .should('have.value', obj.product)
      
          cy.get('#color_dropdown').select(obj.color)
            .should('have.value', obj.color)
      
          cy.get('#shipment_dropdown').click()
          cy.contains('span', obj.Delivery).click()
      
          cy.get('#submit').click()
        });
      });
});