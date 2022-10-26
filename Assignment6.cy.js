/***
 * Assignment 6
 * Oct 2 2022
 * 
 */

 describe('This is my Assignment_6' , function(){
    beforeEach(function(){
        cy.fixture("CourseData").then(function (jsondata){
            this.jsondata = jsondata
        })
    })
    
    it('Create course using cypress with data from fixture',function(){
        const filepath = "flower.jpeg"
        //({ email:this.jsondata.username , password:this.jsondata.password  })
        cy.visit("https://ineuron-courses.vercel.app/login");
        cy.Login({ email:this.jsondata.username , password:this.jsondata.password  });
        cy.clickButton("Sign in")
     
        cy.contains("span", "Manage").trigger('mouseover')
        cy.contains("Manage Courses").click({force:true})
        cy.clickButton("Add New Course")
        cy.clickButton("Save")
        cy.xpath("//h2[@class='errorMessage']").should("have.text", "Please select a thumbnail!")
        cy.get('[id=thumbnail]').attachFile(filepath)
        cy.typekey('input#name','C')
        cy.typekey('[id=description]','C programming')

        cy.get('input#instructorNameId').type('s',{ delay: 100})
        cy.typekey('input#price','200')
        cy.datePick("//input[@name='startDate']",4,"//div[@class='react-datepicker__week'][2]/div")
        cy.datePick("//input[@name='endDate']",29,"//div[@class='react-datepicker__week'][5]/div")
        cy.xpath("//button[@class='menu-btn']").click()
        cy.xpath("//button[contains(text(), 'Testing')][1]").click()
        cy.xpath("//div/child::button[contains(text(), 'Save')]").click({force:true})
        cy.wait(5000) 
        const btn = cy.get('button.action-btn').last()
        btn.click()


             
    });

})
