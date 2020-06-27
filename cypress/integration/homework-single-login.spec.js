/// <reference types="cypress" />

describe ('Bitdefender Homework', function() {
  it('Should log into Bitdefender Central and go to At-Risk device', function() {
    cy.visit('/') // Cypress best practice is to set a baseUrl in the cypress.json file
    cy.get('#username').type(Cypress.env('email'))
    cy.get('#login-next').click()
    cy.get('#password_input').type(Cypress.env('password'))
    cy.get('#password-sign-in').click()
    cy.contains('Continue my trial').click()

    cy.url().should(function(url) {
      return url.startsWith(`${Cypress.config().baseUrl}/activity`)
    })

    cy.get('.left-nav-trigger').click()
    cy.get('#a_1580325650').click()

    cy.get('.device-status span').contains('At risk').first().click()
  })
})
