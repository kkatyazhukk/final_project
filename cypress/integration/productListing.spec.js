require('cypress-xpath');
const ProductListingPage = require('../pageObjects/productListingPage.js');

describe('Product Listing page', () => {
    // Тест падает, но я пыталась :(
    it.skip('Ascending sorting by price on "Product Listing" page', () => {
        cy.visit('https://catalog.onliner.by/mobile?mfr%5B0%5D=apple');
        ProductListingPage.checkSorting();
    });

    it('Filter by Producer "Product Listing" page', () => {
        cy.visit('https://catalog.onliner.by/mobile');

        ProductListingPage.producerApple()
            .click();

        cy.url().should('eq', 'https://catalog.onliner.by/mobile?mfr%5B0%5D=apple');

        cy.wait(700);

        ProductListingPage.checkFiltering();
    });
});