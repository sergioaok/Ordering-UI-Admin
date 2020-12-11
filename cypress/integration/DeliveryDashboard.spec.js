context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('input[name=email]').type('sergio+admin@ordering.co')
    cy.get('input[name=password]').type('test2020')
    cy.get('button').contains('Login').click()
    cy.wait('@postLogin').its('status').should('eq', 200)
    cy.visit('/delivery-dashboard')
  })

  it('Check UI', () => {
    cy.get('.drivers-location').should('exist')
    cy.viewport(1024, 768)
    cy.get('button[name=order-open]').should('exist').click()
    cy.get('button[name=order-close]').should('exist')
  })
})