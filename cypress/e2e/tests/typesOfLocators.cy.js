describe('types of locators', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('get with tag', () => {
        cy.visit('/automation-practice-form')
        cy.get('input')
    })

    it('get with attribute', () => {
        cy.visit('/automation-practice-form')
        cy.get('[placeholder="First Name"]')
    })


    it('get with attribute and tag', () => {
        cy.visit('/automation-practice-form')
        cy.get('input[placeholder="First Name"]')
    })

    it('get with class', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('.mr-sm-2.form-control')
    })

    it('get with id', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('#userEmail')
    })

    it('get with contains', ()=>{
        cy.visit('/automation-practice-form')
        cy.contains('Female')
    })

    it('get with contains witch class', ()=>{
        cy.visit('/automation-practice-form')
        cy.contains('.header-wrapper','Widgets')
    })

    it.only('get parents', ()=>{
        cy.visit('/automation-practice-form')
        cy.get('#userEmail').parents().find('label')
    })
})
