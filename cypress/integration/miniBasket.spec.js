require('cypress-xpath');
const ProductPage = require('../pageObjects/productPage.js');
const MiniBasket = require('../pageObjects/miniBasketPage.js');

describe('MiniBasket page', () => {
    function formatProductTitle(string) {
        return string.trim();
    }

    function removeCurrencyAndCentsFromPrice(string) {
        return +string.trim().substring(0, string.length - 3);
    }

    function removeCentsFromPrice(string) {
        return +string.trim().substring(0, string.length - 3);
    }

    it('Product title on "MiniBasket" page = Product title on "Product" page', () => {
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        ProductPage.productTitle()
            .invoke('text')
            .then(formatProductTitle)
            .as('productTitleProductPage');

        ProductPage.addToCart()
            .click();

        cy.get("@productTitleProductPage").then(productTitleProductPage => {
            MiniBasket.productTitle()
                .invoke('text')
                .then(formatProductTitle)
                .should('contains', productTitleProductPage)
        });
    });

    it('Price on "MiniBasket" page = Price on "Product" page', () => {
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        ProductPage.productPrice()
            .invoke('text')
            .then(removeCentsFromPrice)
            .as('productPriceProductPage');

        ProductPage.addToCart()
            .click();

        cy.get("@productPriceProductPage").then(productPriceProductPage => {
            MiniBasket.productPrice()
                .invoke('text')
                .then(removeCurrencyAndCentsFromPrice)
                .should('eq', productPriceProductPage)
        });
    });

    it('Prices on "MiniBasket" page, if several items of the same Product', () => {
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        ProductPage.productPrice()
            .invoke('text')
            .then(removeCentsFromPrice)
            .as('productPriceProductPage');

        ProductPage.addToCart()
            .click();

        MiniBasket.incrementAmountButton()
            .click();

        cy.wait(1200);

        cy.get("@productPriceProductPage").then(productPriceProductPage => {
            MiniBasket.productPrice()
                .invoke('text')
                .should('contains', productPriceProductPage * 2)
        });
    });
});