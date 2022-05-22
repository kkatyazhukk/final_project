require('cypress-xpath');
const ProductPage = require('../pageObjects/productPage.js');
const CartPage = require('../pageObjects/cartPage.js');
const MiniBasket = require('../pageObjects/miniBasketPage.js');

describe('Cart page', () => {
    function formatProductTitle(string) {
        return string.trim();
    }

    function removeCurrencyAndCentsFromPrice(string) {
        return +string.substring(0, string.length - 6);
    }

    function removeCentsFromPrice(string) {
        return +string.substring(0, string.length - 3);
    }

    it('Product title on "Cart" page = Product title on "Product" page', () => {
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        ProductPage.productTitle()
            .invoke('text')
            .then(formatProductTitle)
            .as('productTitleProductPage');

        ProductPage.addToCart()
            .click();

        MiniBasket.goToCart()
            .click();

        cy.get("@productTitleProductPage").then(productTitleProductPage => {
            CartPage.productTitle()
                .invoke('text')
                .then(formatProductTitle)
                .should('eq', productTitleProductPage)
        });
    });

    it('Price on "Cart" page = Price on "Product" page', () => {
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        ProductPage.productPrice()
            .invoke('text')
            .then(removeCentsFromPrice)
            .as('productPriceProductPage');

        ProductPage.addToCart()
            .click();

        MiniBasket.goToCart()
            .click();

        cy.get("@productPriceProductPage").then(productPriceProductPage => {
            CartPage.productPrice()
                .invoke('text')
                .then(removeCurrencyAndCentsFromPrice)
                .should('eq', productPriceProductPage)
        });

        cy.get("@productPriceProductPage").then(productPriceProductPage => {
            CartPage.finalCartPrice()
                .invoke('text')
                .then(removeCurrencyAndCentsFromPrice)
                .should('eq', productPriceProductPage)
        });
    });

    it('Prices on "Cart" page, if several items of the same Product', () => {
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        ProductPage.productPrice()
            .invoke('text')
            .then(removeCentsFromPrice)
            .as('productPriceProductPage');

        ProductPage.addToCart()
            .click();

        MiniBasket.goToCart()
            .click();

        CartPage.incrementAmountButton()
            .click();

        cy.wait(1200);

        cy.get("@productPriceProductPage").then(productPriceProductPage => {
            CartPage.productPrice()
                .invoke('text')
                .should('contains', productPriceProductPage + productPriceProductPage)
        });

        cy.get("@productPriceProductPage").then(productPriceProductPage => {
            CartPage.finalCartPrice()
                .invoke('text')
                .should('contains', productPriceProductPage * 2)
        });
    });

    it('Prices on "Cart" page, if several different Products', () => {
        // Add the first Product to Cart
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13pro');

        ProductPage.productPrice()
            .invoke('text')
            .then(removeCentsFromPrice)
            .as('productPriceProductPage1');

        ProductPage.addToCart()
            .click();

        // Add the second Product to Cart
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        ProductPage.productPrice()
            .invoke('text')
            .then(removeCentsFromPrice)
            .as('productPriceProductPage2');

        ProductPage.addToCart()
            .click();

        // Go to Cart Page
        MiniBasket.goToCart()
            .click();

        cy.get("@productPriceProductPage1").then(productPriceProductPage1 => {
            CartPage.productPrice1()
                .invoke('text')
                .should('contains', productPriceProductPage1)
        });

        cy.get("@productPriceProductPage2").then(productPriceProductPage2 => {
            CartPage.productPrice2()
                .invoke('text')
                .should('contains', productPriceProductPage2)
        });

        cy.wait(1200);

        cy.get("@productPriceProductPage1")
            .then((productPriceProductPage1) => {
                cy.get("@productPriceProductPage2")
                    .then((productPriceProductPage2) => {
                        CartPage.finalCartPrice()
                            .invoke('text')
                            .then(removeCurrencyAndCentsFromPrice)
                            .should('eq', productPriceProductPage1 + productPriceProductPage2)
                    })
            })
    });

    it('Go to Checkout page from Cart page', () => {
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        ProductPage.addToCart()
            .click();

        MiniBasket.goToCart()
            .click();

        CartPage.goToCheckout()
            .click();

        cy.url().should('eq', 'https://cart.onliner.by/order');
    });
});