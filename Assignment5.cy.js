/***
 * Assignment 5
 * Oct 1 2022
 * 
 */
 describe('This is my Assignment_5' , function(){
    beforeEach(function(){
        cy.fixture("Logindata").then(function (jsondata){
            this.jsondata = jsondata
        })
    })
 
    it('Create new user and login with same user',function(){
        cy.visit("https://ineuron-courses.vercel.app/");
        cy.xpath("//button[contains(text(),'Log in')]").click()
        cy.get('a[href*="/signup"]').should('not.be.disabled')
        cy.viewport(2000,1000)
        cy.contains("New user? Signup").click()
        cy.get("input[name='name']").type("shpas")
        cy.get("input[name='email']").type("shish1@ind.com")
        cy.get("input[name='password']").type("shilpa@12")
        cy.xpath("//label[text()='Testing']/preceding::input[1]").click()
        //cy.get("input[type='radio']").check('Female')
        cy.xpath("//*[@id='gender'][@value='Female']").click()
        //cy.get("select[name='state']").select(6)
        cy.get('select').select('Goa')

       // cy.xpath("//*[@id='state'][@value='Goa']").click()
        cy.xpath("//button[@class = 'submit-btn']").click() 

        cy.xpath("//input[@name='email1']").type("shish1@ind.com")
        cy.xpath("//input[@name = 'password1']").type("shilpa@12")
        cy.xpath("//button[@class = 'submit-btn']").click()
        cy.xpath("//div/child::button[contains(text(), 'Sign out')]").click()
        cy.url().should('include', 'login')
        
        });

})