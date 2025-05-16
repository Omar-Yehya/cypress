///<reference types='cypress' />
import path from 'path'


describe('file download and upload', () =>{
    beforeEach(() =>{
        cy.visit('https://www.techglobal-training.com/frontend/file-download')
    })
    const fileName ='SampleText.txt'
    const dPath = path.join('cypress/downloads', fileName)

    it('File download', () =>{
        cy.get('#file_download').click()

        cy.readFile(dPath)
    })

    it('File Upload', () =>{

        cy.get('#file_upload').selectFile(dPath)//{action: 'drag-drop'})
        cy.get('#file_submit').realClick()
        cy.get('.notification.is-success')
        .should('be.visible')
        .and('have.text', `You uploaded ${fileName}`);

    })


})