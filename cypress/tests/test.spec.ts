describe('Test suite', function() {
    // before(() => {
    //     cy.viewport('iphone-x')
    // }) 

    beforeEach(function() {
        cy.visit('/');
    })

    it('First test', function() {
        cy.fixture('example').then(data => {
            console.log(data);
            cy.get('#twotabsearchtextbox').type(data.search, {delay:500}); 
        })
        cy.get('#nav-search-submit-button').click(); 
        cy.task('log', '*********************HERE**********************************')
        cy.login("password", "username"); 
    })
})