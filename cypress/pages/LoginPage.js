class LoginPage {

  // Rutas utilizadas en la página
  static routes = {
    login: '/DexFrontEnd/#!/login',
    forgot: 'forgot-password'
  }

  // Selectores centralizados de la página
  static selectors = {
    inputContainer: 'paper-input-container',
    loginButton: '.accept-btn.login-btn',
    forgotButton: 'paper-button.forgot-btn',
    primaryButton: 'paper-button.accept-btn',
    dialogConfirmButton: 'paper-button[dialog-confirm]',
    dialog: 'paper-dialog'
  }

  // Textos utilizados para ubicar elementos
  static texts = {
    forgotInputLabel: 'Username or e-mail'
  }

  // Navega a la pantalla de login
  visit() {
    cy.visit(LoginPage.routes.login)
  }

  // Obtiene un input por índice dentro del formulario
  getInputByIndex(index) {
    return cy.get(LoginPage.selectors.inputContainer)
      .eq(index)
      .find('input')
      .should('be.visible')
  }

  // Ingresa el username en el primer input
  enterUsername(username) {
    this.getInputByIndex(0).clear().type(username)
  }

  // Ingresa el password en el segundo input
  enterPassword(password) {
    this.getInputByIndex(1).clear().type(password)
  }

  // Ingresa el email o username en forgot password
  enterForgotUsername(username) {
    cy.contains(LoginPage.texts.forgotInputLabel)
      .parents(LoginPage.selectors.inputContainer)
      .find('input')
      .should('be.visible')
      .clear()
      .type(username)
  }

  // Hace click en el botón login
  clickLogin() {
    cy.get(LoginPage.selectors.loginButton)
      .should('be.visible')
      .click()
  }

  // Hace click en el botón forgot password
  clickForgotPassword() {
    cy.get(LoginPage.selectors.forgotButton)
      .should('be.visible')
      .click()
  }

  // Hace click en el botón principal (SEND)
  clickSendForgotPassword() {
    cy.get(LoginPage.selectors.primaryButton)
      .should('be.visible')
      .click()
  }

  // Hace click en el botón OK del modal
  clickDialogConfirm() {
    cy.get(LoginPage.selectors.dialogConfirmButton)
      .should('be.visible')
      .click()
  }

  // Ejecuta el flujo completo de login
  login(username, password) {
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLogin()
  }

  // Valida que el login fue exitoso
  validateSuccessfulLogin() {
    cy.url().should('not.include', LoginPage.routes.login)
  }

  // Valida que estamos en la pantalla de login
  validateOnLoginPage() {
    cy.url().should('include', LoginPage.routes.login)
    cy.get(LoginPage.selectors.loginButton).should('be.visible')
  }

  // Valida que estamos en la pantalla forgot password
  validateForgotPasswordPage() {
    cy.url().should('include', LoginPage.routes.forgot)
    cy.get(LoginPage.selectors.primaryButton).should('be.visible')
  }

  // Valida que el modal está visible
  validateDialogVisible() {
    cy.get(LoginPage.selectors.dialog).should('be.visible')
  }
}

export default LoginPage