class CartPage {
    constructor() {
        this.productTitle = () => cy.xpath('//*[contains (@class, "cart-form__description_condensed-other")]/a[contains (@class, "cart-form__link cart-form__link_primary cart-form__link_base-alter")]');
        this.inStockLabel = () => cy.xpath('//*[contains (@class, "cart-form__description_tiny cart-form__description_ellipsis cart-form__description_condensed-alter")]');
        this.shopName = () => cy.xpath('//*[contains (@class, "cart-form__offers-part_shop")]/a');
        this.incrementAmountButton = () => cy.xpath('//*[contains (@class, "cart-form__button_increment helpers_hide_tablet")]');

        // Prices
        this.productPrice = () => cy.xpath('//*[contains (@class, "cart-form__offers-part_price_specific")]/div[2]/span');
        this.productPrice1 = () => cy.xpath('//*[contains (@class, "cart-form__offers-list")]/div/div[3]/div/div[4]/div/div[3]/div[2]');
        this.productPrice2 = () => cy.xpath('//*[contains (@class, "cart-form__offers-list")]/div/div[2]/div/div[4]/div/div[3]/div[2]');
        this.finalCartPrice = () => cy.xpath('//*[contains (@class, "cart-form__description_font-weight_semibold cart-form__description_ellipsis cart-form__description_condensed-other")]/span');

        this.goToCheckout = () => cy.xpath('//*[contains (@class, "cart-form__button button-style_primary")]');
    }
}

module.exports = new CartPage();