/*******************************
 *  Assignment 9 
 * Date : 10/5/2022
 * 
 * 
 ***********************************/

 const testFixtures = [
    {
        "name": 'user1',
        "context": "1"
    },
    {
        "name": 'user2',
        "context": "2"
    },
    {
        "name": 'user3',
        "context": "3"
    },
    {
        "name": 'user4',
        "context": "4"
    },
    {
        "name": 'user5',
        "context": "5"
    }
  
   
]

describe('Automation Test Suite - Fixtures', function () {
    //looping through both the fixtues 
    testFixtures.forEach((fixtureData) => {
        describe(fixtureData.context, () => {
            // accessing the test data from the fixture file
            before(function () {
                cy.fixture(fixtureData.name).then(function (testData) {
                    this.testData = testData;
                })
            })
            it("login", function () {
                const base_url = Cypress.env('base_url');
                cy.visit(base_url + Cypress.env('sign_up'));
                cy.log(this.testData)
                cy.get("input[name='name']").clear()
                cy.get("input[name='name']").type(this.testData.username)
                cy.get("input[name='email']").clear()
                cy.get("input[name='email']").type(this.testData.email)
                cy.get("input[name='password']").clear()
                cy.get("input[name='password']").type(this.testData.password)
                cy.xpath("//label[text()='Testing']/preceding::input[1]").click()
                cy.xpath("//*[@id='gender'][@value='Female']").click()
                cy.get('select').select('Goa')
                cy.clickButton("Sign up")
                cy.url().should('include', 'login')
                cy.get("input[name='email1']").clear()
                cy.get("input[name='email1']").type(this.testData.email)
                cy.get("input[name='password1']").clear()
                cy.get("input[name='password1']").type(this.testData.password)
                cy.clickButton("Sign in")
                
                cy.xpath("//div/child::h4[contains(text(),'Welcome')]").should('have.value', '')
                cy.clickButton("Sign out")
                cy.url().should('include', 'login')
                
                

            })
        })
    })
})