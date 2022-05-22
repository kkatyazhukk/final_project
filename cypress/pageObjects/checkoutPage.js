class CheckoutPage {
    constructor() {
        this.productTitle = () => cy.xpath('//*[contains (@class, "cart-form__total-box")]/div/div/div[2]/div/div');
        this.productPrice = () => cy.xpath('//*[contains (@class, "cart-form__total-box")]/div/div/div[2]/div/div/div[1]');
        this.finalCartPrice = () => cy.xpath('//*[contains (@class, "cart-form__total-footer")]/div/div/div/div[2]/span');
    }
}

module.exports = new CheckoutPage();