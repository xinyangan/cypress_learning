// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ----- Text Box -----
Cypress.Commands.add('login',() =>{
    cy.fixture('1_Element/Text_Box/user.json').then((user) => {
        // cy.log('read username：'+user.name)
        // cy.log('read useremail：'+user.email)

        cy.get('#userName').type(user.name)
        cy.get('#userEmail').type(user.email)
        cy.get('#currentAddress').type(user.caddress)
        cy.get('#permanentAddress').type(user.paddress)

        cy.get('#submit').click()
    })
})
// ----- Web Tables -----
Cypress.Commands.add('addInfo',() => {
    cy.fixture('1_Element/Web_Tables/addInfo.json').then((Info)=>{
        cy.get('[placeholder="First Name"]').type(Info.First_Name)
        cy.get('[placeholder="Last Name"]').type(Info.Last_Name)
        cy.get('[placeholder="name@example.com"]').type(Info.Email)
        cy.get('[placeholder="Age"]').type(Info.Age)
        cy.get('[placeholder="Salary"]').type(Info.Salary)
        cy.get('[placeholder="Department"]').type(Info.Department)
    })
})
Cypress.Commands.add('checkInfo',() => {
    cy.fixture('1_Element/Web_Tables/addInfo.json').then((Info)=>{
        cy.get('.rt-tr-group').eq(3)
        .should('contain',Info.First_Name)
        .should('contain',Info.Last_Name)
        .should('contain',Info.Email)
        .should('contain',Info.Age)
        .should('contain',Info.Salary)
        .should('contain',Info.Department)
    })
})
Cypress.Commands.add('addSearch',() => {
    cy.fixture('1_Element/Web_Tables/test.json').then((Search)=>{
        cy.get('[placeholder="Type to search"]').type(Search.test)
        cy.get('#basic-addon2').click()
    })
})
Cypress.Commands.add('checkSearch',() => {
    cy.fixture('1_Element/Web_Tables/test.json').then((Search)=>{
        cy.get('.rt-tr-group').eq(0).should('contain',Search.test)
    })
})

// ----- Practice Form -----
Cypress.Commands.add('wirteInfo',() => {
    cy.fixture('2_Forms/Info.json').then((Info)=>{
        cy.get('#firstName').type(Info.First_Name)
        cy.get('#lastName').type(Info.Last_Name)
        cy.get('#userEmail').type(Info.Email)
        // cy.get('[value="Female"]').click({forth:true})
        cy.get('#userNumber').type(Info.Mobile)
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__week').eq(0).contains('4').click()
        cy.get('#subjectsInput').type(Info.Subjects)
        // cy.get('.custom-control-input [type="checkbox"]').checkbox()
        // cy.get('#hobbies-checkbox-2').checkbox()
        // cy.get('#hobbies-checkbox-3').checkbox()
        cy.get('#currentAddress').type(Info.Caddress)
        cy.contains('Select State').click()
        cy.contains(Info.state).click()
        cy.contains('Select City').click()
        cy.contains(Info.city).click()
    })
})