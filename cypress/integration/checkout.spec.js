require('cypress-xpath');
const ProductPage = require('../pageObjects/productPage.js');
const CartPage = require('../pageObjects/cartPage.js');
const CheckoutPage = require('../pageObjects/checkoutPage.js');
const MiniBasket = require('../pageObjects/miniBasketPage.js');
ś
describe('Checkout page', () => {

    function removeCurrencyAndCentsFromPrice(string) {
        return +string.substring(0, string.length - 6);
    }

    function removeCentsFromPrice(string) {
        return +string.substring(0, string.length - 3);
    }

    it('Product price on "Cart" page = Product price on "Product" page', () => {
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        ProductPage.productPrice()
            .invoke('text')
            .then(removeCentsFromPrice)
            .as('productPriceProductPage');

        ProductPage.addToCart()
            .click();

        MiniBasket.goToCart()
            .click();

        CartPage.goToCheckout()
            .click();

        cy.get("@productPriceProductPage").then(productPriceProductPage => {
            CheckoutPage.productPrice()
                .invoke('text')
                .then(removeCurrencyAndCentsFromPrice)
                .should('eq', productPriceProductPage)
        });

        cy.get("@productPriceProductPage").then(productPriceProductPage => {
            CheckoutPage.finalCartPrice()
                .invoke('text')
                .then(removeCurrencyAndCentsFromPrice)
                .should('eq', productPriceProductPage)
        });
    });
});