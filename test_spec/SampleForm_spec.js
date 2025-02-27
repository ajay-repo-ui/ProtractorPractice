var BasePage = require('..//pages//BasePage.js');
var HomePage = require('..//pages//HomePage.js');
var UserDetails = require('../pages/UserDetails.js');
describe("Validate Sample Form Registration",function(){
  
    it("Open Website and Click on Sample Form and Verify Title",function(){

        // Navigate to website and verify title
        BasePage.navigateToURL();
        var title = BasePage.getPageTitle();
        expect(title).toBe("Protractor practice website - Banking App");
        // Click on Sample Form
        HomePage.SampleForm();


    });
    it("Enter Correct User Details and Verify Registration Successful Message",function(){

        // Non-Angular application
        browser.ignoreSynchronization = true;
        // Enter User Details
        UserDetails.UserDetails();
        // Click on Register button
        UserDetails.RegisterButton();
        // Verify Successful Registration Message
        UserDetails.ValidateSuccessMessage();

    });

    it("Directly Click on register button and verify Error Message",function(){

         // Non-Angular application
         browser.ignoreSynchronization = true;
         BasePage.navigateToURL();
         HomePage.SampleForm();
         
        // Click on Register button   
        UserDetails.RegisterButton();
        // Verify Successful Registration Message
        UserDetails.ValidateErrorMessage();
    });

});