var BasePage = require('..//pages//BasePage.js');
var HomePage = require('..//pages//HomePage.js');
var CustomerPage = require('..//pages//CustomerPage.js');
var obj=require('..//util//Objects.json');
var SelectWrapper = require('..//util//select-wrapper.js');
var mySelect = new SelectWrapper(by.model("custId"));
// var accsel = new SelectWrapper(by.model("accountNo"));

describe("Automating Customer Login functionality",function(){
    it("Login to the Account",function(){
         BasePage.navigateToURL(obj.url);
         browser.sleep(obj.timeOut);
         HomePage.CustomerLogin();
         browser.sleep(2000);
         mySelect.selectByText(obj.CustomerPageObjects.values.userName);  
         element(by.buttonText(obj.CustomerPageObjects.locators.loginButton)).click();
    });
    it("Verification of Logged in user name and acc no",function(){
         browser.sleep(obj.timeOut);
        //  var uname=CustomerPage.loggedinUserName;
         expect(element(by.xpath(obj.CustomerPageObjects.locators.userNameTxt)).getText()).toEqual(obj.CustomerPageObjects.values.userName);
         CustomerPage.selectandVerifyAccNum(obj.CustomerPageObjects.values.accNo);
    });
    it("Validate Deposits",function(){
         CustomerPage.gotoDeposit();
         browser.sleep(obj.timeOut);
         CustomerPage.amountDepositinput(obj.CustomerPageObjects.values.amountToBeDeposit);
         CustomerPage.DepositbtnClick();    
         element(by.binding("message")).getText().then(function(text){
             console.log(text);
         });
         expect(element(by.binding("message")).getText()).toEqual("Deposit Successful");
     }) ;
     it("Validate Withdrawl",function(){
        CustomerPage.gotoWithdrawl();
         browser.sleep(obj.timeOut);
         CustomerPage.amountDepositinput(obj.CustomerPageObjects.values.amountToBeWithdraw);
         CustomerPage.DepositbtnClick();    
         element(by.binding("message")).getText().then(function(text){
             console.log(text);
         });
         expect(element(by.binding("message")).getText()).toEqual("Transaction successful");
     }) ;
     // it("Validate Transactions",function(){
     //     CustomerTransaction.gotoTransactions();
     //     browser.sleep(obj.timeOut);
     //     CustomerTransaction.validateTransTable();
     // });
 
 });