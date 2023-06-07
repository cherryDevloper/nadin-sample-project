import { cy } from 'cypress';
describe('Sidebar', () => {
  beforeEach(() => {
    cy.visit('/'); // Adjust the URL if needed
  });

  it('should render sidebar items correctly', () => {
    cy.contains('Dashboard').should('be.visible');
    cy.contains('Profile').should('be.visible');
    cy.contains('Weather').should('be.visible');
    cy.contains('Todos').should('be.visible');
  });

  it('should change language on button click', () => {
    cy.contains('Change language').click();
    cy.contains('تغییر زبان').should('be.visible'); // Replace with the translation in the desired language
  });

  it('should navigate to the corresponding page on item click', () => {
    cy.contains('Profile').click();
    cy.url().should('include', '/profile'); // Adjust the expected URL if needed
  });
});
