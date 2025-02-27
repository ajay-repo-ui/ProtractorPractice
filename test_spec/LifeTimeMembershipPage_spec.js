var BasePage = require('..//pages//BasePage.js');
var HomePage = require('..//pages//HomePage.js');
var LifeTimeMembershipPage = require('..//pages//LifeTimeMembershipPage.js');

describe("Validate Bank Manager Login Functionality",function(){

    it("Open website",function(){

        BasePage.navigateToURL();
        browser.sleep(2000);
    });

    it("click on Lifetime Membership button",function(){

        HomePage.MembershipPage();
        browser.sleep(2000);
    });

    it("Click on LinkedIn and Print Titlr with Windows havdle",function(){

        LifeTimeMembershipPage.navigateToLinkedin();
        browser.sleep(2000);
    });
    
});