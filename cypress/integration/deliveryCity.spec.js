require('cypress-xpath');
const DeliveryCityComponent = require('../pageObjects/pageComponents/deliveryCityComponent.js');
ś
describe('Delivery City', () => {
    it('Confirm default city for delivery', () => {
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        DeliveryCityComponent.chooseDefaultCity()
            .click();

        DeliveryCityComponent.deliveryCity()
            .invoke('text')
            .should('contains', 'Минск');
    });

    it('Select city for delivery', () => {
        cy.visit('https://catalog.onliner.by/mobile/apple/iphone13');

        DeliveryCityComponent.chooseCustomCity()
            .click();

        DeliveryCityComponent.typeCustomCity()
            .click()
            .type('Витебск');

        cy.wait(600);

        DeliveryCityComponent.typeCustomCity()
            .click()
            .type('{enter}');

        DeliveryCityComponent.applyCustomCity()
            .click();

        DeliveryCityComponent.deliveryCity()
            .invoke('text')
            .should('contains', 'Витебск');
    });
});