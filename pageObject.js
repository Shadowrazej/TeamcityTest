var pageObject = function() {

    this.buttonMenu = element(by.className('mat-button'));
    this.buttonTutorial = element(by.buttonText('Tutorial'));
    this.buttonIntroduction = element(by.cssContainingText('a', '1. Introduction'));
    this.angularHomeButton = element(by.css('[class="nav-link home"]'));
    this.chinaLanguage = element(by.cssContainingText('a', '中文版'));
    this.linkBlockElement = element(by.css('[title="Angular Quickstart"]'));
    this.searchField = element(by.css('[placeholder="Search"]'));
    this.searchElement = element(by.cssContainingText('a', 'setAngularJSGlobal()'));
    this.elementTestExpand1 = element(by.className('vertical-menu-item heading ng-star-inserted level-1 expanded'));
    this.elementTestExpand2 = element(by.className('vertical-menu-item level-2 expanded selected'));
    this.searchResultsElement = element(by.cssContainingText('h2', 'Search Results'));
    this.searchNoResultsElement = element(by.cssContainingText('p', 'No results found.'));


    this.getLinkLineElement = function(tag, name) {
        return element(by.cssContainingText(tag, name));
    };

    this.getTitle = function(element) {
        return element.getAttribute('title');
    };

    this.getBrowserTitle = function() {
        return browser.getTitle();
    };

    this.getBrowserCurrentUrl = function() {
        return browser.getCurrentUrl();
    };

};
module.exports = new pageObject();