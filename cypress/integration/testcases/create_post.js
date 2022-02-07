/// <reference types="cypress" />
describe('Create Post',()=> {

    beforeEach(()=>{

        cy.admin_login('sudip10up','TjXnMe_GFBk')
        
    })
    it('Create New Post', ()=> {

        
        cy.get('#menu-posts > .wp-has-submenu > .wp-menu-name').click()
        cy.get('.page-title-action').click()
        cy.get('body').trigger('keydown', { keyCode: 27})
        cy.get('.edit-post-visual-editor__post-title-wrapper > .wp-block').type('Test Post')
        
        cy.get('.block-editor-default-block-appender > .components-dropdown > .components-button > svg').click()
        cy.get('#components-search-control-0').type('Heading')
        cy.contains('Heading').click()
        cy.get('.block-editor-rich-text__editable.block-editor-block-list__block.wp-block.is-selected.wp-block-heading.rich-text').type('Test Heading')
        

        cy.get('.block-editor-default-block-appender > .components-dropdown > .components-button > svg').click()
        cy.get('.components-search-control__input').type('List')
        cy.contains('List').click()
        cy.get('.block-editor-rich-text__editable.block-editor-block-list__block.wp-block.is-selected.wp-block-list.rich-text').type('123{enter}')
        cy.get('.block-editor-rich-text__editable.block-editor-block-list__block.wp-block.is-selected.wp-block-list.rich-text').type('456')
        





        cy.get('.editor-post-publish-panel__toggle').click()
        cy.get('.editor-post-publish-panel__header-publish-button > .components-button').click()

    })
})