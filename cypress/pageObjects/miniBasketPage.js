class MiniBasket {
    constructor() {
        this.productTitle = () => cy.xpath('//*[contains (@class, "product-recommended__list product-recommended__list_alter")]/div/div[contains (@class, "product-recommended__title")]');
        this.productPrice = () => cy.xpath('//*[contains (@class, "product-recommended__list product-recommended__list_alter")]/div/div[contains (@class, "product-recommended__price")]/div/span');
        this.miniBasketSection = () => cy.xpath('//*[contains (@class, "product-recommended__sidebar-overflow")]');
        this.miniBasketTitle = () => cy.xpath('//*[contains (@class, "product-recommended__subheader")][1]');
        this.productTitleOnConfirmation = () => cy.xpath('//*[contains (@class, "product-recommended__list product-recommended__list_alter")][1]/div/div[contains (@class, "product-recommended__title")]/div[contains (@class, "product-recommended__link product-recommended__link_primary")]');
        this.incrementAmountButton = () => cy.xpath('//*[contains (@class, "product-recommended__button_increment")]');
        this.goToCart = () => cy.xpath('//*[contains (@class, "button-style_another button-style_base-alter product-recommended__button")]');
    }
}

module.exports = new MiniBasket();