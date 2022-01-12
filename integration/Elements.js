const { eq, toPairs } = require("lodash")

describe('Elements',()=>{
    beforeEach(()=>{
        cy.visit(Cypress.env("bash_url"))
        cy.contains('Elements').click()
        cy.url().should('include','element')
    })
    it('Text Box',()=>{
        if(Cypress.env('runFlag') == 1){
            cy.contains('Text Box').click()
            cy.url().should('include','text-box')
            // read userData
            cy.login()
            cy.fixture('1_Element/Text_Box/user.json').then((user) => {
            // assert contents
            cy.get('.mb-1').eq(0).should('contain',user.name)
            cy.get('.mb-1').eq(1).should('contain',user.email)
            cy.get('.mb-1').eq(2).should('contain',user.caddress)
            cy.get('.mb-1').eq(3).should('contain',user.paddress)
            })
        }else {
            this.skip()
            cy.log("runFlag为0，不运行该测试用例")
        }
        
    })  

    // it('Check Box',()=>{
    //     cy.contains('Check Box').click()

    //     cy.get('[aria-label="Toggle"]').click()
    //     cy.clickMore().eq(1).click()
    //     cy.clickMore().eq(2).click()
    //     cy.clickMore().eq(3).click()
    //     cy.clickMore().eq(4).click()
    //     cy.clickMore().eq(5).click()

    //     cy.get('.rct-checkbox').eq(2).click()
    //     cy.get('.rct-checkbox').eq(7).click()
    //     cy.get('.rct-checkbox').eq(11).click()

    //     cy.checkMore().eq(0).should('contain','You have selected :')
    //     cy.fixture('1_Element/Check_Box/check.json').then((check) => {
    //         cy.checkMore().eq(1).should('contain',check.t2)
    //         cy.checkMore().eq(2).should('contain',check.t7)
    //         cy.checkMore().eq(3).should('contain',check.t11)
    //     })
    // })

    // it('Radio Button',()=>{
    //     cy.contains('Radio Button').click()

    //     cy.get('#noRadio').click({force:true})
    //     cy.yesRadio().eq(0).click()
        
    //     cy.get('.text-success').should('contain','Yes')
    // })

    // it('Web Tables',()=>{
    //     cy.contains('Web Tables').click()

    //     // add function
    //     cy.contains('Add').click()
    //     cy.addInfo()
    //     cy.get('#submit').click()

    //     cy.checkInfo()

    //     // search function
    //     cy.addSearch()

    //     cy.checkSearch()
    // })

    // it('Buttons',()=>{
    //     cy.contains('Buttons').click()

    //     cy.get('#doubleClickBtn').dblclick()
    //     cy.get('#rightClickBtn').rightclick()
    //     cy.fixture('1_Element/Buttons/assert.json').then((A)=>{
    //         cy.get('#doubleClickMessage').should('contain',A.dbmessage)
    //         cy.get('#rightClickMessage').should('contain',A.rtmessage)
    //     })
    //     // click定位有问题
    //     // cy.get('.mt-4')//.click()
    // })

    // it('Links',()=>{
    //     cy.contains('Links').click()
    //     // -------- new tab ---------
    //     // make sure the link can be open
    //     cy.get('#simpleLink')
    //     .should('have.attr','href','https://demoqa.com')
    //     // 'target = _blank' be sure to open a new page
    //     .should('have.attr','target','_blank') 
    //     // .click()

    //     cy.get('#simpleLink')
    //     .then(link => {
    //         cy.request(link.prop('href'))
    //         .its('status')
    //         .should('eq',200)
    //     })

    //     // open the hyperlink on the current page
    //     cy.get('#simpleLink')
    //     // invoke a function on the previously yielded subject
    //     //.invoke('removeAttr','target').click()

    //     // !!!!!!!!!!!!!!!!!!!  some problems  !!!!!!!!!!!!!!!!!!
    //     // .spy()
    //     // wrap a method in a spy in order to record calls to and arguments of the function
    //     // cy.window().then((win) => {
    //     //     const spy = cy.spy(win,'open').as('newWindow')
    //     //     cy.get('#simpleLink').click()
    //     //     expect(spy).to.be.called
    //     // })
        
    //     // cy.get('@newWindow')
    //     // .should('be.calledWith','_blank','https://demoqa.com')

    //     // -------- api call ---------
    //     cy.get('#created')
    //     .then(link => {
    //         cy.request(link.prop('href'))
    //         .its('status')
    //         .should('eq',200)
    //     })
    // })

    // it('Broken Links - Images',()=>{
    //     cy.contains('Broken Links - Images').click()

    //     // cy.get('img').eq(2).should('have.html','src="/images/Toolsqa.jpg"')

    //     // cy.contains('Click Here for Valid Link').click().wait(500)
    //     // cy.url().should('include','https://demoqa.com/')
    // })
})