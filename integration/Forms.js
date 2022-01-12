describe('Forms',()=>{
    beforeEach(()=>{
        cy.visit(Cypress.env("bash_url"))
    })
    it('Practice Form',()=>{
        cy.contains('Practice Form').click()

        cy.wirteInfo()
    })
})