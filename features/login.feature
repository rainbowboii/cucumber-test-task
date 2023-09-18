Feature: Login to saucedemo website

  Scenario: User should see "Epic sadface: Username is required" error message
    
    Given User is located on "<page>" of saucedemo website
    
    When User click "<Login>" button
    
    Then User should see "<message>" error 

  Examples:
  
    | Login            | message                            | page                       |
    | loginButton      | Epic sadface: Username is required | https://www.saucedemo.com/ |
