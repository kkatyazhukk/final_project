class SearchComponent {
    constructor() {
        this.searchInput = () => cy.xpath('//*[contains (@class, "fast-search__input")]');
    }
}

module.exports = new SearchComponent();