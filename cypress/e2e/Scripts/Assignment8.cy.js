/*********************************************
 * Assignment 8
 * Oct 2 2022
 * 
 ********************************************/

 describe('This is my Assignment_8' , function(){
    beforeEach(function(){
        cy.fixture("CourseData").then(function (jsondata){
            this.jsondata = jsondata
        })
    })
    
    it(' Create category using cypress with data from fixture',function(){
        const base_url = Cypress.env('base_url');
        cy.visit(base_url + Cypress.env('login_url'));
        cy.Login({ email:this.jsondata.username , password:this.jsondata.password  });
        cy.clickButton("Sign in")
        
        cy.contains("span", "Manage").trigger('mouseover')
        cy.get('div > a:nth-child(2)').invoke('removeAttr','target').click({force:true})
        cy.window().then(function(p){
             cy.stub(p, "prompt").returns(this.jsondata.courseCategory);
             cy.clickButton("Add New Category ")
             cy.get('table >tbody > tr').last().should('contain.text',this.jsondata.courseCategory)
        });
        cy.clickButton("Sign out")       
        
       
    })
});