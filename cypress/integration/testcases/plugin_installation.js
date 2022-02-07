/// <reference types="cypress" />
describe('OSS Pluding Test',()=>{

    beforeEach(()=>{

        cy.admin_login('admin','admin')
        
    })
    it('Plugin Upload and Activation', ()=> {
        
        cy.get('#menu-plugins > .wp-has-submenu > .wp-menu-name').click()
        cy.get('.page-title-action').click()
        cy.get('.upload-view-toggle').click()
    
        const filepath = 'restricted-site-access-develop.zip'
        cy.get('input[type="file"]').attachFile(filepath)
        cy.get('#install-plugin-submit').click()
        cy.visit('https://testydirt.tastewp.com/wp-admin/')
        cy.get('#activate-restricted-site-access').click()
        cy.get("<p>Plugin activated.</p>",{timeout:3000}).should(($x)=>{

            expect($x).to.have.toString('Plugin activated');
        })    
    })
    it('Deactivate Plugin', ()=> {

        cy.get('#menu-plugins > .wp-has-submenu > .wp-menu-name').click()
        cy.get('#deactivate-restricted-site-access').click()
    })
    it('Delete Plugin', ()=> {

       cy.get('#menu-plugins > .wp-has-submenu > .wp-menu-name').click()
        cy.get('#delete-restricted-site-access').click()
   });

    })