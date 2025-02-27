var HomePage = function() {

    this.SampleForm = function(){
        
        element(by.css('.btn.btn-primary')).click();
    };

    this.CustomerLogin = function(){

        element(by.buttonText('Customer Login')).click();
    };

    this.BankManagerLogin = function(){
        browser.sleep(2000);
        element(by.buttonText("Bank Manager Login")).click();
        
    }
   
    this.MembershipPage = function(){
        // element(by.linkText("Lifetime Membership")).click();
        element(by.xpath("(//a[@class='btn btn-primary btn-lg'])[2]")).click();
        browser.sleep(2000);
    }
};
module.exports = new HomePage();