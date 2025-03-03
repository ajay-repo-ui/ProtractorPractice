var SelectWrapper = require('..//util//select-wrapper.js');
var mySelect = new SelectWrapper(by.id("gender"));
var obj = require('..//util//Objects.json');

var UserDetails = function () {

    this.addAllregistrationdeatils = function (firstName, lastName, email, password) {
        element(by.xpath(obj.registrationPageObjects.locators.firstName)).sendKeys(firstName);
        element(by.xpath(obj.registrationPageObjects.locators.lastName)).sendKeys(lastName);
        element(by.xpath(obj.registrationPageObjects.locators.email)).sendKeys(email);
        element(by.xpath(obj.registrationPageObjects.locators.password)).sendKeys(password);
        element(by.xpath(obj.registrationPageObjects.locators.Reading)).click();
        element(by.xpath(obj.registrationPageObjects.locators.Traveling)).click();
        element(by.xpath(obj.registrationPageObjects.locators.Sports)).click();
        mySelect.selectByText(obj.registrationPageObjects.values.GenderFemale);
        element(by.xpath(obj.registrationPageObjects.locators.about)).sendKeys(obj.registrationPageObjects.values.aboutDesc);
        browser.sleep(2000);
        element(by.xpath(obj.registrationPageObjects.locators.RegisterBtn)).click();
        browser.sleep(1000);
        var message = element(by.xpath(obj.registrationPageObjects.locators.successMessage)).getText();
        expect(element(by.xpath(obj.registrationPageObjects.locators.successMessage)).getText()).toEqual(obj.registrationPageObjects.values.successMessage);
        console.log(message);

    };
    this.addfewdetailsandvalidateregistrationform = function (firstName, lastName, email, password) {
        element(by.xpath(obj.registrationPageObjects.locators.firstName)).sendKeys(firstName);
        element(by.xpath(obj.registrationPageObjects.locators.lastName)).sendKeys(lastName);
        element(by.xpath(obj.registrationPageObjects.locators.email)).sendKeys(email);
        element(by.xpath(obj.registrationPageObjects.locators.password)).sendKeys(password);
        element(by.xpath(obj.registrationPageObjects.locators.Reading)).click();
        element(by.xpath(obj.registrationPageObjects.locators.Traveling)).click();
        element(by.xpath(obj.registrationPageObjects.locators.Sports)).click();
        mySelect.selectByText(obj.registrationPageObjects.values.GenderFemale);
        browser.sleep(2000);
        element(by.xpath(obj.registrationPageObjects.locators.RegisterBtn)).click();
        browser.sleep(1000);
        var errmsg = element(by.xpath(obj.registrationPageObjects.locators.errorMessage)).getText();
        expect(element(by.xpath(obj.registrationPageObjects.locators.errorMessage)).getText()).toEqual(obj.registrationPageObjects.values.errorMessage);
        console.log(errmsg);
    };

};
module.exports = new UserDetails();