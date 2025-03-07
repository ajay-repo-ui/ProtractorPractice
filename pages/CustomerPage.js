var SelectWrapper = require('..//util//select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));
var obj=require('..//util//Objects.json');
require('..//util//customlocator.js');

var CustomerPage = function() {

    this.gotoTransactions=function(){
        element(by.ngClick(obj.CustomerPageObjects.locators.transaction)).click();
    }
    this.gotoDeposit=function(){
        element(by.ngClick(obj.CustomerPageObjects.locators.deposit)).click();
    }
    this.gotoWithdrawl=function(){
        element(by.ngClick(obj.CustomerPageObjects.locators.withdrawl)).click();
    }
    this.loggedinUserName=function(){
        return element(by.xpath(obj.CustomerPageObjects.locators.userNameTxt)).getText();
    }
    this.accountNo=function(){
        element(by.xpath(obj.CustomerPageObjects.locators.accountNo));
    }
    this.selectandVerifyAccNum=function(accNo){
        mySelect.selectByText(accNo);
        browser.sleep(2000);
        expect(element(by.xpath(obj.CustomerPageObjects.locators.accountNo)).getText()).toEqual(accNo);
    }
    this.amountDepositinput=function(amt){
        element(by.xpath(obj.CustomerPageObjects.locators.amountDepositInput)).sendKeys(amt);
    }
    this.DepositbtnClick=function(){
        element(by.css(obj.CustomerPageObjects.locators.DepositBtn)).click();
    }
    this.validateTransTable=function(){
        var amount = element(by.xpath("//*[@id='anchor0']//td[2]"));
        var transType = element(by.xpath("//*[@id='anchor0']//td[3]"))
        amount.getText().then(function(text){
            console.log("first Name:"+text);
            expect(text).toEqual(obj.CustomerPageObjects.values.amountToBeDeposit);
        });
        transType.getText().then(function(text){
            console.log("first Name:"+text);
            expect(text).toEqual('Credit');
        });
        
    }
       
};
module.exports = new CustomerPage();