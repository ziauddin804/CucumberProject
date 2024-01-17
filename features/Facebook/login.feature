Feature: Login

    Scenario: Verify eroor for invalid Login
    Given I am on facebook
    When I type 'user123' as username
    And I type 'abcd1234' as password
    And I click login button
    Then I verify error is displayed