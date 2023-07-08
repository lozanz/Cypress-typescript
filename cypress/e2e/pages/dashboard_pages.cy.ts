export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    link_sauceLabsBoltTShirt = 'Sauce Labs Bolt T-Shirt'
    btn_TShirtAddToCart = '#add-to-cart-sauce-labs-bolt-t-shirt'
    btn_backToProducts = '#back-to-products'
    link_sauceLabsOnesie = 'Sauce Labs Onesie'
    btn_OnesieAddToCart = '#add-to-cart-sauce-labs-onesie'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    sauceLabsBoltTShirt(){
        cy.contains(this.link_sauceLabsBoltTShirt).click()
        cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible') 
        cy.get(this.btn_TShirtAddToCart).click()
        cy.contains('Remove').should('be.visible') 
    }
    
    clickBackToProducts(){
        cy.get(this.btn_backToProducts).click()
        cy.get('.title').should('be.visible')
        // cy.get('.peek').should('be.visible')
        cy.contains('Products').should('contain','Products')

    }
    sauceLabsOnesie(){
        cy.contains(this.link_sauceLabsOnesie).click()
        cy.contains('Sauce Labs Onesie').should('be.visible') 
        cy.get(this.btn_OnesieAddToCart).click()
        cy.contains('Remove').should('be.visible') 
    }
}