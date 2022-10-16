/***
 * Assignment 4
 * Oct 1 2022
 * 
 */
describe('This is my first test suite' , function(){
    beforeEach(function(){
        cy.fixture("Logindata").then(function (jsondata){
            this.jsondata = jsondata
        })
    })
    it('test Data',function(){
        cy.log(this.jsondata.username)
        cy.log(this.jsondata.password)
        });

    it('Verify Title',function(){
        cy.visit("https://ineuron-courses.vercel.app/login");
        //cy.xpath("//input[@name='email1']").type(this.jsondata.username)
        //cy.xpath("//input[@name = 'password1']").type(this.jsondata.password)
        //cy.xpath("//button[@class = 'submit-btn']").click()
        cy.title().should('include', 'iNeuron Courses')
        });

    it('Verify url and title',function(){ 
        cy.visit("https://ineuron-courses.vercel.app/login");
        cy.url().should('include', 'login')
    });
    it('Verify Login and Logout',function(){
        cy.visit("https://ineuron-courses.vercel.app/login");
        cy.xpath("//input[@name='email1']").type(this.jsondata.username)
        cy.xpath("//input[@name = 'password1']").type(this.jsondata.password)
        cy.xpath("//button[@class = 'submit-btn']").click()
         //cy.get('div.welcomemessage').parent('home').click()
        cy.xpath("//div/child::h4[contains(text(),'Welcome')]").should('have.value', '')
        cy.xpath("//div/child::button[contains(text(), 'Sign out')]").click()
        cy.url().should('include', 'login')
        
       
    })
    it('Verify Error Message 1',function(){
        cy.visit("https://ineuron-courses.vercel.app/login");
        cy.xpath("//button[@class = 'submit-btn']").click()
        cy.xpath("//div[@class='content']/h2[@class='errorMessage']").should("have.text", "Email and Password is required")
    })
    it('Verify Error Message 2',function(){
        cy.visit("https://ineuron-courses.vercel.app/login");
        cy.xpath("//input[@name='email1']").type(this.jsondata.username)
        cy.xpath("//button[@class = 'submit-btn']").click()
        cy.xpath("//div[@class='content']/h2[@class='errorMessage']").should("have.text", "Password is required")
    })
    it('Verify Error Message 3',function(){
        cy.visit("https://ineuron-courses.vercel.app/login");
        cy.xpath("//input[@name = 'password1']").type(this.jsondata.password)
        cy.xpath("//button[@class = 'submit-btn']").click()
        cy.xpath("//div[@class='content']/h2[@class='errorMessage']").should("have.text", "Email is required")
    })
    it('Verify Error Message 4',function(){
        cy.visit("https://ineuron-courses.vercel.app/login");
        cy.xpath("//input[@name='email1']").type("shilpa@sh.si")
        cy.xpath("//input[@name = 'password1']").type("Shilpa@61")
        cy.xpath("//button[@class = 'submit-btn']").click()
        cy.xpath("//div[@class='content']/h2[@class='errorMessage']").should("have.text", "USER Email Doesn't Exist")
    })
})