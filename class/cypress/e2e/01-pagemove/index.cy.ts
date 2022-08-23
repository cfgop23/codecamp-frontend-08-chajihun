it("시나리오01 - 페이지이동 시나리오", () => {
  cy.visit("http://localhost:3000/34-04-cypress-e2e-test-routing");
  cy.get("button").click();
  cy.get("div").contains("철수야 놀자");
});
