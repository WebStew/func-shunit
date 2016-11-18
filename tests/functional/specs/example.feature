
Feature: Test the attributes of a given element
	As a developer
	I want to be able to test the attributes of a given element

	Background:
		Given I open the "site" "/"

	Scenario: 	The attribute "id" of a element should be "viewport"
		Then 	the attribute "id" from element "#viewport" is "viewport"
