/// <reference types="cypress" />
describe('Create Post',()=> {

    beforeEach(()=>{

        cy.admin_login('admin','admin')
        
    })
    it('Create New Post', ()=> {

        cy.log('Title can be entered')
        cy.get('#menu-posts > .wp-has-submenu > .wp-menu-name').click()
        cy.get('.page-title-action').click()
        cy.get('body').trigger('keydown', { keyCode: 27})
        cy.get('.edit-post-visual-editor__post-title-wrapper > .wp-block').type('Test Post')
        
        cy.log('Header can be entered')
        cy.get('.block-editor-default-block-appender > .components-dropdown > .components-button > svg').click()
        cy.get('#components-search-control-0').type('Heading')
        cy.contains('Heading').click()
        cy.get('.block-editor-rich-text__editable.block-editor-block-list__block.wp-block.is-selected.wp-block-heading.rich-text').type('Test Heading')
        
        cy.log('Body text can be entered')
        cy.get('.block-editor-default-block-appender > .components-dropdown > .components-button > svg').click()
        cy.get('.components-search-control__input').type('List')
        cy.contains('List').click()
        cy.get('.block-editor-rich-text__editable.block-editor-block-list__block.wp-block.is-selected.wp-block-list.rich-text').type('123{enter}')
        cy.get('.block-editor-rich-text__editable.block-editor-block-list__block.wp-block.is-selected.wp-block-list.rich-text').type('456')
        
        cy.log('Featured image can be set')
        cy.get('.interface-complementary-area-header > ul > :nth-child(1) > .components-button').click()
        cy.get(':nth-child(6) >.components-panel__body-title >.components-button').click()
        cy.get('.editor-post-featured-image__container > .components-button').click()
        cy.get('[aria-label="10uplogo"] >.attachment-preview >.thumbnail').click()
        cy.get('.media-toolbar-primary >.button').click()

        cy.log('Publish Post')
        cy.get('.editor-post-publish-panel__toggle').click()
        cy.get('.editor-post-publish-panel__header-publish-button > .components-button').click()

    })
})