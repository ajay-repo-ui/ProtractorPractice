var UserDetails = function() {

    this.UserDetails = function(){

        // Enter first name
        element(by.id("firstName")).sendKeys("Rakesh");
        // Enter last name
        element(by.id("lastName")).sendKeys("Rana");
        // Email
        element(by.id("email")).sendKeys("abc@gmail.com");
        // Password
        element(by.id("password")).sendKeys("password");
        // Hobbies
        let checkboxes = element.all(by.xpath('//input[@name="hobbies"]'));
        checkboxes.each(function(selected){

            selected.click();
            
        });
        // Gender Selection
        let selectGender = element(by.id("gender"));
        selectGender.element(by.css('option[value="female"]')).click();

        // Print Selected Gender
        var printGender= selectGender.element(by.css('option[value="male"]')).getText();
        // printGender.getText().then(function(text){
        //     console.log(text);
        // });

        // About
        element(by.id("about")).sendKeys("Hello World");

    }

    this.RegisterButton = function(){

        // Click on Register Button
        element(by.buttonText("Register")).click();

    }

    this.ValidateSuccessMessage = function(){

        // Validate Success Message
        element(by.id("successMessage")).getText().then(function(text){
            expect(text).toContain("User registered successfully!");
            console.log(text);
        });
    }

    this.ValidateErrorMessage =  function(){

        // Verify Error message
        element(by.id("errorMessage")).getText().then(function(text){
            console.log(text);
            expect(text).toContain("All fields must be filled!");
            
        });
    }
   
};
module.exports = new UserDetails();