// type definitions for Cypress object "cy"
///<reference types="Cypress" />

// type definitions for custom commands like "createDefaultTodos"
describe('Quality Assurance on Sirclo', function() {
  it('Factorial', function() {
    cy.visit("http://qa-interview.srcli.xyz/login")
    cy.get('[type="text"]').type("root")
    cy.get('[type="password"]').type("root123")
    cy.get('[type="submit"]').click()
  })
})
