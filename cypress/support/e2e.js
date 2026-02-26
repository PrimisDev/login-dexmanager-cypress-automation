Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

//Eso sirve para evitar que Cypress falle el test cuando ocurre una excepción no controlada en la aplicación, si la app tira un error JavaScript no capturado