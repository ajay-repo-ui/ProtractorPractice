var SelectWrapper = require('..//util//select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));
var currency = new SelectWrapper(by.id("currency"));

var BankManagerpage = function() {

    this.AddCustomer = function(){
        browser.sleep(2000);
        element(by.buttonText("Add Customer")).click();
        browser.sleep(2000);
        element(by.model("fName")).sendKeys("Raman");
        element(by.model("lName")).sendKeys("Arora");
        element(by.model("postCd")).sendKeys("110095");
        element(by.css(".btn.btn-default")).click();
        browser.sleep(2000);
        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function(text){

            console.log(text);
        })
        alertDialog.accept();
        browser.sleep(2000);
    }

    this.OpenAccount = function(){
        element(by.buttonText("Open Account")).click();
        browser.sleep(2000);
        mySelect.selectByText("Raman Arora");
        currency.selectByText("Rupee");
        element(by.buttonText("Process")).click();
        browser.sleep(2000);
        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function(text){

            console.log(text);
        })

        alertDialog.accept();
        browser.sleep(2000);
    }

    this.CheckCustomer = function(){
        element(by.buttonText("Customers")).click();
        browser.sleep(2000);
        element(by.model("searchCustomer")).sendKeys("Raman");
        var firstName = element(by.repeater("cust in Customers").row(0).column("cust.fName"));
        firstName.getText().then(function(text){
            console.log(text);
        });

        expect(firstName.getText()).toEqual("Raman");

        browser.sleep(2000);
    }
       
};
module.exports = new BankManagerpage();