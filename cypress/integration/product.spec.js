require('cypress-xpath');
const ProductPage = require('../pageObjects/productPage.js');
const MiniBasket = require('../pageObjects/miniBasketPage.js');

describe('Product page', () => {

    it('"Add to Cart" button on Product Page', () => {
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        ProductPage.addToCart()
            .click();

        MiniBasket.miniBasketSection()
            .should('be.visible');

        MiniBasket.miniBasketTitle()
            .invoke('text')
            .should('contains', 'Товар добавлен в корзину');
    });

    it('"Buy now" button on Product Page', () => {
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        ProductPage.buyNow()
            .click();

        cy.url().should('eq', 'https://cart.onliner.by/order');
    });

    it('Select different storage capacity of product', () => {
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        // 256 gb
        ProductPage.storageAmount2()
            .click()

        cy.url().should('eq', 'https://catalog.onliner.by/mobile/apple/iphone13256dn');

        ProductPage.productTitle()
            .invoke('text')
            .should('contains', '256GB');

        // 512 gb
        ProductPage.storageAmount3()
            .click();

        cy.url().should('eq', 'https://catalog.onliner.by/mobile/apple/iphone13512dn');

        ProductPage.productTitle()
            .invoke('text')
            .should('contains', '512GB');
    });

    it('Select different color of product', () => {
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        // green color    
        ProductPage.color1()
            .click();

        cy.url().should('eq', 'https://catalog.onliner.by/mobile/apple/iphone13128green');

        ProductPage.productTitle()
            .invoke('text')
            .should('contains', 'зеленый');
    });

    it('Open product photo', () => {
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        ProductPage.imageInCarousel1()
            .click();

        ProductPage.imageViewer()
            .should('be.visible');
    });
});