import LoginPage from '../pages/LoginPage'

describe('Login functionality', () => {

  const loginPage = new LoginPage()
  let loginData

  // Carga los datos desde fixture antes de los tests
  beforeEach(() => {
    cy.clearCookies() // Limpia cookies para evitar sesión persistente
    cy.clearLocalStorage() // Limpia almacenamiento local
    loginPage.visit() // Navega a la pantalla de login

    cy.fixture('loginData').then((data) => {
      loginData = data // Guarda los datos del fixture en variable
    })
  })

  // Limpia sesión y navega a login antes de cada test
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    loginPage.visit()
  })

  it('Should login successfully with valid credentials', () => {

    // Ejecuta login válido
    loginPage.login(loginData.validUser, loginData.validPass)

    // Valida postcondición
    loginPage.validateSuccessfulLogin() 
  })

it('Should show error message with invalid credentials', () => {

  // Ejecuta login inválido
  loginPage.login(loginData.invalidUser, loginData.invalidPass)

  // Valida modal visible
  cy.contains('Error').should('be.visible') 

  // Valida mensaje de error
  cy.contains('User or password do not match.')
    .should('be.visible') 
  
  // Valida que seguimos en login
  cy.url().should('include', 'login') 
  })

  it('Should navigate to forgot password page', () => {

  // Click en forgot password
  loginPage.clickForgotPassword() 

  // Valida pantalla
  loginPage.validateForgotPasswordPage() 

  // Ingresa email
  loginPage.enterForgotUsername(loginData.forgotEmail)

  // Click en enviar
  loginPage.clickSendForgotPassword()
  })

})