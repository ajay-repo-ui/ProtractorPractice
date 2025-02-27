var BasePage = require('..//pages//BasePage.js');
var HomePage = require('..//pages//HomePage.js');
var BankManagerpage = require('..//pages//BankManagerPage.js');

describe("Validate Bank Manager Login Functionality",function(){

    it("Open website and click on CustomerLogin button",function(){

        // Launch Browser and open website
        BasePage.navigateToURL();
        
        // Click on Customer Login Button custId
        HomePage.BankManagerLogin();
    });

    it("Validate Add Customer",function(){
        BankManagerpage.AddCustomer();
    });

    it("Validate Open Account",function(){
        BankManagerpage.OpenAccount();
    });

    it("Validate Customer Existance",function(){
        BankManagerpage.CheckCustomer();
    });
});