class ProductPage {
    constructor() {
        this.productTitle = () => cy.xpath('//*[contains (@class, "catalog-masthead__title")]');
        this.productPrice = () => cy.xpath('//*[contains (@class, "product-aside__offers-item product-aside__offers-item_primary")][1]/div/div/div/a/span');

        this.addToCart = () => cy.xpath('//*[contains (@class, "product-aside__offers-item product-aside__offers-item_primary")]/div[4]/a[2]');
        this.buyNow = () => cy.xpath('//*[contains (@class, "product-aside__offers-item product-aside__offers-item_primary")]/div[4]/a[1]');

        // Change storage amount
        this.storageAmount1 = () => cy.xpath('//*[contains (@id, "product-facets-container")]/div[1]/div[contains (@class, "offers-description-filter__field")]/*[1]');
        this.storageAmount2 = () => cy.xpath('//*[contains (@id, "product-facets-container")]/div[1]/div[contains (@class, "offers-description-filter__field")]/*[2]');
        this.storageAmount3 = () => cy.xpath('//*[contains (@id, "product-facets-container")]/div[1]/div[contains (@class, "offers-description-filter__field")]/*[3]');

        // Change product color
        this.color1 = () => cy.xpath('//*[contains (@id, "product-facets-container")]/div[2]/div[contains (@class, "offers-description-filter__field")]/*[1]');
        this.color2 = () => cy.xpath('//*[contains (@id, "product-facets-container")]/div[2]/div[contains (@class, "offers-description-filter__field")]/*[2]');

        // Image carousel
        this.imageInCarousel1 = () => cy.xpath('//*[contains (@class, "product-gallery__shaft")]/div[1]');
        this.imageViewer = () => cy.xpath('//*[contains (@class, "fotorama__active")]/img');
    }
}

module.exports = new ProductPage();