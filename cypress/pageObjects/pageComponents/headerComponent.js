class HeaderComponent {
    constructor() {
        this.navigateCartButton = () => cy.xpath('//*[contains (@class, "auth-bar__item--cart")]');
    }
}

module.exports = new HeaderComponent();