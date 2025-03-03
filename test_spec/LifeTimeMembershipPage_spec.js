var BasePage = require('..//pages//BasePage.js');
var HomePage = require('..//pages//HomePage.js');
var LifeTimeMembershipPage = require('..//pages//LifeTimeMembershipPage.js');
var obj=require('..//util//Objects.json');

describe("Validate Bank Manager Login Functionality",function(){

    it("Open website",function(){

        BasePage.navigateToURL(obj.testurl);
        browser.sleep(obj.sleepTime);
    });

    it("click on Lifetime Membership button",function(){

        HomePage.MembershipPage();
        browser.sleep(obj.sleepTime);
    });

    it("Click on LinkedIn and Print Titlr with Windows handle",function(){

        LifeTimeMembershipPage.navigateToLinkedin();
        browser.sleep(obj.sleepTime);
    });
    
});