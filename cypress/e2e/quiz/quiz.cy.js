/// <reference types="cypress" />

describe("end to end test of quiz project", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000/");
  });

  it("display home page as default", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get(".logo").should("have.text", "Logo");

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    cy.wait(1000);
  });

  it("can type something in input", () => {
    const input = cy.get("#search");
    input.type("trangs de su");
    input.clear();
    cy.wait(300);
    input.type("group 1 comeback");
    input.clear();
    cy.wait(300);
    input.type("ét ô ét");
    input.clear();
    cy.wait(300);
    cy.wait(1000);
  });

  it("test go to add quiz set page", () => {
    cy.get("button").contains("Add QuizSet");
  });

  it("test add a quiz set", () => {
    cy.get("button").contains("Add QuizSet").click();
    cy.get(".p-1").type("new quiz");
    cy.get("select").select("new subject");
    cy.get("button").contains("Add quiz").click();
    cy.get("div .text-green-400");
    cy.wait(1000);
  });

  it("try flash card", () => {
    cy.get("div .bg-slate-600").contains("title").click();
    cy.get("#flashcard").click();
    cy.get("#next").click();
    cy.get("#prev").click();
    cy.get("#next").click();
    cy.get("#prev").click();
    cy.get("#next").click();
    cy.get("#prev").click();
    cy.get("#next").click();
    cy.get("#prev").click();
    cy.wait(1000);
  });

  it("can take quiz", () => {
    cy.get("div .bg-slate-600").contains("title").click();
    cy.get("#takequiz").click();
    for (let i = 0; i < 3; i++) {
      cy.get("div").contains("correct answer").click();
      cy.wait(1000);
      cy.get("div").contains("correct answer").click();
      cy.wait(1000);
      cy.get("div").contains("correct answer").click();
      cy.wait(1000);
      cy.get("div").contains("correct answer").click();
      cy.wait(1000);
      cy.get("button").contains("Restart").click();
      cy.wait(500);
    }
    cy.wait(1000);
  });

  it("can login with google", () => {
    cy.get("button").contains("Login").click();
    cy.get("#ggbtn").click();
  });
});
