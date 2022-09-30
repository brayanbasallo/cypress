describe('save elements', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('validate elements', () => {
		cy.visit('/automation-practice-form')

		cy.get('input')
			.parents()
			.then(elements => {
                const inputs = elements.find('input')
                const divs = elements.find('div')
                expect(inputs.length).to.eql(15)
                cy.wrap(divs).should('have.length', 139)
            })
	})
})
