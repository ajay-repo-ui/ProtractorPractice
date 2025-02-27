// var BasePage = require('..//pages//BasePage.js');
 
var LifeTimeMembershipPage = function() {

    this.navigateToLinkedin = function(){
        var linkedIn = element(by.css('a[aria-label="Linkedin"]'));
        linkedIn.click();
        browser.sleep(5000);


        browser.getAllWindowHandles().then(function(handles){
            if(handles.length >= 1) {
                browser.switchTo().window(handles[1]).then(function() {
                    browser.getTitle().then(function(title) {
                        console.log(title);
                    });
                });
            }
            else
            {
                console.log('No additional window found');
            }
        });
    }
    

    
};
module.exports = new LifeTimeMembershipPage();