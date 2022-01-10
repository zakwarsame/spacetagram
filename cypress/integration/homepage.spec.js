describe("Home", () => {
  beforeEach(() => {
    let count = 10;
    let apiKey = Cypress.env("CYPRESS_API_KEY");
    cy.intercept(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`,
      { fixture: "example.json" }
    );
    cy.visit("/");
    cy.contains("Spacetagram");
  });

  it("show linear progress bar when loading", () => {
    cy.get(".MuiLinearProgress-root").should("be.visible");
  });

  it("should display logo", () => {
    cy.get("[alt=Logo]").should("have.attr", "src");
  });
  it("should have the title spacetagram", () => {
    cy.get(".MuiTypography-h6").should(($title) => {
      expect($title).to.contain("Spacetagram");
    });
  });

  it("should be able to like", () => {
    cy.get(".MuiCheckbox-root").first().click();
    cy.get(':checkbox').should('be.enabled')
  });

});
