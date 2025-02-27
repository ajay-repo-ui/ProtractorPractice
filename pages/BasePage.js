
var BasePage = function(){

    this.navigateToURL = function(){
  
      browser.get("https://www.way2automation.com/angularjs-protractor/banking/#/login");
      browser.manage().window().maximize();
    };
  
    this.getPageTitle = function(){
      
        return browser.getTitle();
     }
  
  
  };
  module.exports = new BasePage();