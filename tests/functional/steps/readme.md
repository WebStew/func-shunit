# Step Definitions

Use this documentation to find the appropriate [Cucumber](https://cucumber.io/docs) step to create a [Gherkin Syntax](https://cucumber.io/docs/reference) 
feature file for automated testing purposes. 

## Example : Feature File

```gherkin
Feature: Test the attributes of a given element
	As a developer
	I want to be able to test the attributes of a given element

	Background:
		Given I open the site "/"

	Scenario: 	The attribute "id" of a element should be "view-application"
		Then 	I expect that the attribute "id" from element "#view-application" is "view-application"
``` 