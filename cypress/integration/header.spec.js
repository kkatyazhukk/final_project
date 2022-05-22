require('cypress-xpath');
const HeaderComponent = require('../pageObjects/pageComponents/headerComponent.js');
const ProductPage = require('../pageObjects/productPage.js');

describe('Header', () => {
    it('Go to Cart from Header', () => {
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        ProductPage.addToCart()
            .click();

        HeaderComponent.navigateCartButton()
            .click();

        cy.url().should('eq', 'https://cart.onliner.by/');
    });
});