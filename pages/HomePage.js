require('..//util//customlocator.js');
var obj=require('..//util//Objects.json');

var HomePage = function() {

    this.SampleForm = function(){
        
        element(by.css('.btn.btn-primary')).click();
    };

    this.CustomerLogin = function(){

        element(by.ngClick("customer()")).click();
    };

    this.BankManagerLogin = function(){
        element(by.ngClick("manager()")).click();
    }
   
    this.MembershipPage = function(){
        // element(by.linkText("Lifetime Membership")).click();
        element(by.xpath("(//a[@class='btn btn-primary btn-lg'])[2]")).click();
        browser.sleep(obj.sleepTime);
    }
};
module.exports = new HomePage();