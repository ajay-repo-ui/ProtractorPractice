var SelectWrapper = require('..//util//select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));

var CustomerPage = function() {

    this.SelectLoginUser = function(){
        
        mySelect.selectByValue(2);
        element(by.buttonText("Login")).click();
        
    }

    this.ValidateDeposit = function(){
        
        element(by.buttonText("Deposit")).click();
        browser.sleep(2000);
        element(by.model("amount")).sendKeys("1000");
        element(by.css(".btn.btn-default")).click();

        element(by.binding("message")).getText().then(function(text){

            console.log(text);

        });

        expect(element(by.binding("message")).getText()).toEqual("Deposit Successful");
    }


    this.ValidateWithdrawl = function(){
        browser.sleep(2000);
        element(by.buttonText("Withdrawl")).click();
        browser.sleep(2000);
        element(by.model("amount")).sendKeys("1000");
        element(by.css(".btn.btn-default")).click();

        browser.sleep(2000);

        element(by.binding("message")).getText().then(function(text){
                
            console.log(text);
    
        });
    
        expect(element(by.binding("message")).getText()).toEqual("Transaction successful");
    }
       
};
module.exports = new CustomerPage();