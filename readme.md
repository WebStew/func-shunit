
# func-shunit

A front-end support bootstrap that will handle documenting, testing, reporting and security analysis of your application. It'll even tie your shoe laces!

## Install

```bash
$ https://github.com/WebStew/func-shunit.git
$ cd func-shunit
$ npm install

// Run all the things
$ npm run func-shunit
```

## Testing

## Functional

Functional test suite driven by [WebdriverIO](http://webdriver.io/), [Selenium](http://www.seleniumhq.org/) and [CucumberJS](https://github.com/cucumber/cucumber-js) and extended with the [ChaiJS](http://chaijs.com/) assertion library. Tags, screenshots and coloured rspec terminal reporting come as default configuration. This task will automatically start and stop Selenium for you.

**Run**

```bash
$ npm run test:functional
```

### Unit

Unit test driven by [Mocha](https://mochajs.org/) and extended with the [ChaiJS](http://chaijs.com/) assertion library with coloured rspec reporting to the terminal.

**Run**

```bash
$ npm run test:unit
```

## JavaScript Documentation

[JSDOC](http://usejsdoc.org/) documentation websites built for application and both the feature steps and support JavaScript driving the functional test suite. The documentation utilises [ink-docstrap](https://www.npmjs.com/package/ink-docstrap) [Bootstrap](http://getbootstrap.com/2.3.2/) templates which offers 15 custom themes and is configurable.

### Application source

This documentation is aimed at the developerment team who are responsible for developing and maintaining the application code as a tool for knowledge share and transparency.

**Generate**

```bash
$ npm run document:javascripts:application
```

**Location**

```
./documentation/javascripts/application/index.html
```

### Functional Steps

This documentation is aimed at non technical stakeholders that would like to get involved in writing [feature files in the Gherkin syntax](https://cucumber.io/docs/reference) in either the specification outline, testing or regression stages.

**Generate**

```bash
$ npm run document:tests:functional:suite:steps
```

**Location**

```
./documentation/tests/functional/suite/steps/index.html
```

### Functional Support

This documentation is aimed at developers and covers the JavaScript implementation that supports the functional steps above.

**Generate**

```bash
$ npm run document:tests:functional:suite:support
```

**Location**

```
./documentation/tests/functional/suite/support/index.html
```

## Reporting

### Unit Testing

Unit tests results site generated with [mochawesome](https://www.npmjs.com/package/mochawesome) for a clear visual unit test health indication including test filtering, time lapse and code diplay.

**Generate**

```bash
$ npm run document:tests:unit:results
```

**Location**

```
./documentation/tests/unit/results/index.html
```

### Coverage

Unit test coverage results site generated with [Instanbul](https://github.com/gotwarlost/istanbul) for clear test coverage indication including statement, branch, function and line counts.

**Generate**

```bash
$ npm run document:tests:unit:coverage
```

**Location**

```
./documentation/tests/unit/coverage/Icov-report/index.html
```

### Function Testing

Functional test results site generated with [Allure](http://allure.qatools.ru/) for a clear visual functional health indication.

**Generate**

```bash
$ npm run document:tests:functional:results
```

**Location**

As the Allure report relies on [AJAX](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) to load in the data we need to host it on a local server to get this working as AJAX is not allowed by the browser on the file:// protocol.

```
$ allure report open --report-dir=documentation/tests/functional/results
```

### Application Complexity and Maintainability

Application JavaScript source code complexity site generated using [Plato](https://github.com/es-analysis/plato). Clear visual indication of source code size, complexity and maintainability scores as well as estimated and static lint errors.

**Generate**

```bash
$ npm run document:javascripts:complexity
```

**Location**

```
./documentation/javascripts/complexity
```

### Security Vulnerabilities

Any JavaScript dependencies your application uses are checked known security vulnerabilites in their current version using [RetireJS](https://retirejs.github.io/retire.js/).

**Generate**

```bash
$ npm run document:javascripts:vulnerabilities
```

**Location**

```
./documentation/javascripts/vulnerabilities/index.txt
```

## Roadmap

* ESLint configuration file
* Application [Styleguide](https://github.com/WebStew/styleguide)