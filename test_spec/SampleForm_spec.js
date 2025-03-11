var BasePage = require('..//pages//BasePage.js');
var HomePage = require('..//pages//HomePage.js');
var UserDetails = require('../pages/UserDetails.js');
var obj = require('..//util//Objects.json');

describe("Validate Sample Form Registration", function () {

    beforeEach(function () {
        BasePage.navigateToURL(obj.url);
        browser.sleep(2000);
        HomePage.SampleForm();
    });

    it("Verify the Sample form by entering all required details", function () {
        UserDetails.addAllregistrationdeatils(obj.registrationPageObjects.values.fname, obj.registrationPageObjects.values.lname, obj.registrationPageObjects.values.email, obj.registrationPageObjects.values.pwd);
    });
    it("verify the sample form without entering all fields", function () {
        UserDetails.addfewdetailsandvalidateregistrationform(obj.registrationPageObjects.values.fname, obj.registrationPageObjects.values.lname, obj.registrationPageObjects.values.email, obj.registrationPageObjects.values.pwd);
    });
});