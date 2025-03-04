var BasePage = require('..//pages//BasePage.js');
var obj=require('..//util//Objects.json');
require('..//util//customlocator.js');

var LifeTimeMembershipPage = function() {

    this.navigateToLinkedin = function(){
        element(By.xpath(obj.LifeTimeObjects.locators.linkdin)).click();
        browser.sleep(5000);
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(function(){
                BasePage.getPageTitle().then(function(text){
                    console.log("linkdin site title:"+text);
                })
                expect(BasePage.getPageTitle()).toEqual("Sign Up | LinkedIn");
            })
        })
    }
    
    

    
};
module.exports = new LifeTimeMembershipPage();