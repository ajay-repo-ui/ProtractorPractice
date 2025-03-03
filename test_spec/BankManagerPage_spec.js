var BasePage = require('..//pages//BasePage.js');
var HomePage = require('..//pages//HomePage.js');
var BankManagerpage = require('..//pages//BankManagerPage.js');
var obj=require('..//util//Objects.json');
// var SelectWrapper = require('..//util//select-wrapper.js');
// var mySelect = new SelectWrapper(by.id("userSelect"));
// var currency = new SelectWrapper(by.id("currency"));

describe("Validate Bank Manager Login Functionality",function(){

    it("Open website and click on BankManager Login button",function(){
        BasePage.navigateToURL(obj.testurl);
        browser.sleep(obj.sleepTime);
        HomePage.BankManagerLogin();
        browser.sleep(obj.sleepTime);
    });

    it("Validate Add Customer",function(){
        BankManagerpage.AddCustomer();
        browser.sleep(obj.sleepTime);
        BankManagerpage.AddCustomerInfo(obj.BankManagerPage.values.fname,obj.BankManagerPage.values.lname,obj.BankManagerPage.values.postcode);
    });

    it("Validate Open Account",function(){
        BankManagerpage.OpenAccount();
        browser.sleep(obj.timeOut);
        BankManagerpage.openAccountInfo(obj.BankManagerPage.values.fname+" "+obj.BankManagerPage.values.lname,obj.BankManagerPage.values.currencyRupee);
    });

    it("Validate Customer Existance",function(){
        BankManagerpage.CheckCustomer();
        browser.sleep(obj.timeOut);
        BankManagerpage.checkCustomerInfo(obj.BankManagerPage.values.fname);
    });
});