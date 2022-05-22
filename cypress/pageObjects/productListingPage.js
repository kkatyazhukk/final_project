const console_spec_filter = require('jasmine/lib/filters/console_spec_filter');
var _ = require('lodash');

class ProductListingPage {
    constructor() {
        this.sortingButton = () => cy.xpath('//*[@class="schema-order__link"]');
        this.ascPriceSorting = () => cy.xpath('//*[@id="schema-order"]/div[2]/div/div[2]/span');
        this.productLink1 = () => cy.xpath('//*[@id="schema-products"]/div[2]/div/div[3]/div[2]/div[1]/a/span');
        this.allPrices = () => cy.xpath(`//*[@data-bind="html: $root.format.minPrice($data.prices, 'BYN')"]`).invoke('text');
        this.producerApple = () => cy.xpath('//*[@id="schema-filter"]/div[5]/div[4]/div[2]/ul/li[1]/label/span[2]');
        this.allProductTitles = () => cy.xpath('//*[@data-bind="html: product.extended_name || product.full_name"]').invoke('text');
    }

    checkFiltering() {
        this.allProductTitles().should('contains', 'Apple')
    }

    checkSorting() {
        this.allPrices().as('defaultSorting'); // до сортировки по возрастанию цены

        cy.get("@defaultSorting")
            .then((defaultSorting) => {
                return defaultSorting.split(' р.').sort((a, b => a - b))
            }).as('defaultSortingAsc'); // тут валится ошибка, я не понимаю, почему не создается алиас

        this.sortingButton().click();
        cy.wait(300);

        this.ascPriceSorting().click(); // делаем сортировку по возрастанию цены
        cy.wait(500);

        this.allPrices().as('ascSorting');
        cy.wait(300);

        cy.get("@ascSorting").should('eq', "@defaultSortingAsc");
    }
}

module.exports = new ProductListingPage();