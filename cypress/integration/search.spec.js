require('cypress-xpath');
const SearchComponent = require('../pageObjects/pageComponents/searchComponent.js');

describe('Search', () => {
    // не работает из-за айфрейма
    it.only('Search', () => {
        cy.visit('https://catalog.onliner.by');
        cy.get('iframe');

        SearchComponent.searchInput()
            .click()
            .type('Apple');
    });
});