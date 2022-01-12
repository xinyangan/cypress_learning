// ----- Check Box -----
Cypress.Commands.add('clickMore',() => {
    cy.get('ol > li > ol > li').get('[aria-label="Toggle"]')
}) 
Cypress.Commands.add('checkMore',() => {
    cy.get('.display-result > span')
})

// ----- Radio Button -----
Cypress.Commands.add('yesRadio',() => {
    cy.get('#yesRadio').get('.custom-control-label')
})
