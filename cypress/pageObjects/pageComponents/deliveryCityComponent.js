class DeliveryCityComponent {
    constructor() {
        this.chooseDefaultCity = () => cy.xpath('//*[contains (@class, "product-aside__control_condensed-alter")]/span[1]');
        this.chooseCustomCity = () => cy.xpath('//*[contains (@class, "product-aside__control_condensed-alter")]/span[2]');
        this.typeCustomCity = () => cy.xpath('//*[contains (@class, "auth-form__input_width_full")]');
        this.applyCustomCity = () => cy.xpath('//*[contains (@class, "auth-button")]');
        this.deliveryCity = () => cy.xpath('//*[contains (@class, "product-aside__popover-handle")]/a');
    }
}

module.exports = new DeliveryCityComponent();