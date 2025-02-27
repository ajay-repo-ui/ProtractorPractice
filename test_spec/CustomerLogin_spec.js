var BasePage = require('..//pages//BasePage.js');
var HomePage = require('..//pages//HomePage.js');
var CustomerPage = require('..//pages//CustomerPage.js');

describe("Validate Customer Login Functionality",function(){

    it("Open website and click on CustomerLogin button",function(){

        // Launch Browser and open website
        BasePage.navigateToURL();

        browser.sleep(2000);
        // Click on Customer Login Button custId
        HomePage.CustomerLogin();
        browser.sleep(2000);

    });

    it("Select User and Click on Login",function(){
        // Select User and click on Login
        CustomerPage.SelectLoginUser();
    });

    it("Validate Deposits",function(){

        // Validate Deposit
        CustomerPage.ValidateDeposit();
    });


    it("Validate Withdraw",function(){

        // Validate Withdraw
        CustomerPage.ValidateWithdrawl();
    });
});