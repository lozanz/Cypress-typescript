export class CartPage{
    btn_sauceLabsCart = '#shopping_cart_container'
    btn_cartCheckout = '#checkout'
    txt_firstName = '#first-name'
    txt_lastName = '#last-name'
    txt_postalCode = '#postal-code'
    btn_continue = '#continue'
    btn_finish = '#finish'
    btn_removeBoltTShirt = '#remove-sauce-labs-bolt-t-shirt'
    btn_removeOnesie = '#remove-sauce-labs-onesie'

    clickCart(){
        cy.get(this.btn_sauceLabsCart).click()
        cy.contains('Your Cart').should('contain','Your Cart')
    }
    clickCartCheckout(){
        cy.get(this.btn_cartCheckout).click()
        cy.contains('Checkout: Your Information').should('contain','Checkout: Your Information')
    }
    inputFirstName(){
        cy.get(this.txt_firstName).type('Lo')
    }
    inputLastName(){
        cy.get(this.txt_lastName).type('Zanzz')
    }
    inputPostalCode(){
        cy.get(this.txt_postalCode).type('12345')
    }
    clickCartContinue(){
        cy.get(this.btn_continue).click()
        cy.contains('Checkout: Overview').should('contain','Checkout: Overview')
    }
    clickCartContinueWithoutAssert(){
        cy.get(this.btn_continue).click()
    }
    clickCartFinish(){
        cy.get(this.btn_finish).click()
        cy.contains('Thank you for your order!').should('contain','Thank you for your order!')
    }
    assertBoltTShirtAndOnesie(){
        cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible') 
        cy.contains('Sauce Labs Onesie').should('be.visible') 
    }
    checkoutProduct(){
        this.clickCart()
        this.clickCartCheckout()
        this.inputFirstName()
        this.inputLastName()
        this.inputPostalCode()
        this.clickCartContinue()
        this.clickCartFinish()
    }
    checkoutProductEmptyInformation(){
        this.clickCart()
        this.clickCartCheckout()
        this.clickCartContinueWithoutAssert()
    }
    assertFailCheckoutEmptyInformation(){
        cy.get('[data-test="error"]').should('be.visible')
        cy.contains('Error: First Name is required').should('contain','Error: First Name is required')
    }
    removeBoltTShirt(){
        cy.get(this.btn_removeBoltTShirt).click()
        cy.contains('Sauce Labs Bolt T-Shirt').should('not.exist');
    }
    removeOnesie(){
        cy.get(this.btn_removeOnesie).click()
        cy.contains('Sauce Labs Onesie').should('not.exist');
    }
    removeBoltTShirtnOnesie(){
        this.removeBoltTShirt()
        this.removeOnesie()
    }

}