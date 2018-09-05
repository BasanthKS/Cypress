
describe('The test home page',() => {
    it('successfully loads', ()=> {
cy.visit('/')
cy.get(".col1 > h2").contains("treat your inbox");
cy.get('body').contains("new in");
    })
})