describe('navigation', () => {
	it('go to first page', () => {
		cy.visit('https://platzi.com/')
	})

	it('reload', () => {
		cy.reload()
	})

	it('force reload', () => {
		cy.visit('https://google.com/')
		cy.reload(true)
	})

    it('go back', () => {
        cy.visit('https://platzi.com/')
        cy.visit('https://platzi.com/blog/')
        cy.go('back')
        //cy.go(-1)
    })
    // if it has only, cypress only execute this test
    it.only('go forward', () => {
        cy.visit('https://platzi.com/')
        cy.visit('https://platzi.com/blog/')
        cy.go(-1)
        cy.go('forward')
        //cy.go(1)
    })
})
