class BasePage {
    constructor(page) {
        this.page = page;
    }

    navigate(url) {
        cy.visit(url)
    }
}

module.exports = BasePage;