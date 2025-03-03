// var BasePage = require('..//pages//BasePage.js');
 
var LifeTimeMembershipPage = function() {

    this.navigateToLinkedin = function(){
        element(By.xpath(obj.LifeTime.locators.linkdin)).click();
        browser.sleep(5000);
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(function(){
                basepage.pageTitle().then(function(text){
                    console.log("linkdin site title:"+text);
                })
                expect(basepage.pageTitle()).toEqual("Sign Up | LinkedIn");
            })
        })
    }
    
    

    
};
module.exports = new LifeTimeMembershipPage();