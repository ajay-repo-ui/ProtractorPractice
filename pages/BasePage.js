
var BasePage = function(){

    this.navigateToURL = function(testurl){
      browser.get('testurl');
    };
  
    this.getPageTitle = function(){
        return browser.getTitle();
     }
  
  
  };
  module.exports = new BasePage();