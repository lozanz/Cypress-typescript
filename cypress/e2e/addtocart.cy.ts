import {LoginPage} from "./pages/login_pages.cy"
import {DashboardPage} from "./pages/dashboard_pages.cy"
import {CartPage} from "./pages/cart_pages.cy"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()

const URL = 'https://www.saucedemo.com/'

it('Add To Cart - Bolt TShirt & Onesie', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    cy.wait(1000)
    dashboardPage.sauceLabsBoltTShirt() 
    cy.wait(1000)
    dashboardPage.clickBackToProducts()
    cy.wait(1000)
    dashboardPage.sauceLabsOnesie()
    cy.wait(1000)
    cartPage.clickCart()
    cy.wait(1000)
    cartPage.assertBoltTShirtAndOnesie()
    cy.wait(2000)
})

it('Remove From Cart - Bolt TShirt & Onesie', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    dashboardPage.sauceLabsBoltTShirt() 
    cy.wait(1000)
    dashboardPage.clickBackToProducts()
    cy.wait(1000)
    dashboardPage.sauceLabsOnesie()
    cy.wait(1000)
    cartPage.clickCart()
    cy.wait(1000)
    cartPage.assertBoltTShirtAndOnesie()
    cy.wait(1000)
    cartPage.removeBoltTShirtnOnesie()
    cy.wait(2000)
})