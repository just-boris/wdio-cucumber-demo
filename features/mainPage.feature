Feature: Hacker news pages

  Scenario: Open main page
    Given the open page "/"
    Then should see 30 posts

  Scenario: Go to post
    Given the open page "/"
    And pending step
    And I click on 3rd link
    Then should see some comments
