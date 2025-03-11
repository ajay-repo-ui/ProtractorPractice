var SelectWrapper = require('..//util//select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));
var currency = new SelectWrapper(by.id("currency"));
var obj=require('..//util//Objects.json');
//var alert=require('../Pages/alerts.js');
require('..//util//customlocator.js');
var BankManagerpage = function() {

    this.AddCustomer = function(){
        element(by.buttonText("Add Customer")).click();
    }

    this.OpenAccount = function(){
        element(by.buttonText("Open Account")).click();
    }

    this.CheckCustomer = function(){
        element(by.buttonText("Customers")).click();
    }
    this.AddCustomerInfo = function(fname,lname,postCd){
        element(by.xpath(obj.BankManagerPageObjects.locators.fName)).sendKeys(fname);
        element(by.xpath(obj.BankManagerPageObjects.locators.lname)).sendKeys(lname);
        element(by.xpath(obj.BankManagerPageObjects.locators.postCd)).sendKeys(postCd);
        element(by.css(obj.CustomerPageObjects.locators.DepositBtn)).click();
        browser.sleep(obj.timeOut);
        // alert.getAlertText();
        // alert.alertaccept();
        browser.sleep(obj.timeOut);
    }
    this.openAccountInfo=function(name,cur){
        mySelect.selectByText(name);
        currency.selectByText(cur);
        element(by.buttonText(obj.BankManagerPageObjects.locators.processBtn)).click();
        browser.sleep(obj.timeOut);
        // alert.getAlertText();
        // alert.alertaccept();
        browser.sleep(obj.timeOut);
    }
    this.checkCustomerInfo=function(fname){
        element(by.xpath(obj.BankManagerPageObjects.locators.searchCustomer)).sendKeys(fname);
        var firstName = element(by.repeater(obj.BankManagerPageObjects.locators.CustTable).row(0).column(obj.BankManagerPageObjects.locators.fnameCol));
        var lastName = element(by.repeater(obj.BankManagerPageObjects.locators.CustTable).row(0).column(obj.BankManagerPageObjects.locators.lnameCol));
        var postCode = element(by.repeater(obj.BankManagerPageObjects.locators.CustTable).row(0).column(obj.BankManagerPageObjects.locators.PostCodeCol));
        firstName.getText().then(function(text){
            console.log("first Name:"+text);
        });
        expect(firstName.getText()).toEqual(obj.BankManagerPageObjects.values.fname);
        lastName.getText().then(function(lname){
            console.log("last Name:"+lname);
        });
        expect(lastName.getText()).toEqual(obj.BankManagerPageObjects.values.lname);
        postCode.getText().then(function(pCode){
            console.log("Post Code:"+pCode);
        });
        expect(postCode.getText()).toEqual(obj.BankManagerPageObjects.values.postcode);
        browser.sleep(2000);
    }
       
};
module.exports = new BankManagerpage();