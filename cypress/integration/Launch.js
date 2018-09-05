
describe('Assertion for a tab called new in in the home page',() => {
    it('successfully loads', ()=> {
cy.visit('/')
cy.get(".col1 > h2").contains("treat your inbox");
cy.get('body').contains("new in");
    })
})