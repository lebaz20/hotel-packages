describe("Add package item", () => {
  const uniqueString = new Date().getTime();
  const uniqueName = `package${uniqueString}`;
  const uniqueDuration = `${uniqueString} nights`;
  const uniqueValidity = `valid till ${uniqueString}`;
  const uniqueDescription = `full description ${uniqueString}`;
  const uniquePrice = `11.9${Math.floor(Math.random() * 10)}`;
  it("Should fill form as expected", () => {
    cy.visit("/new");
    cy.get("#duration")
      .select(uniqueDuration)
      .invoke("val")
      .should("deep.equal", uniqueDuration);
    cy.get("#validity")
      .select(uniqueValidity)
      .invoke("val")
      .should("deep.equal", uniqueValidity);
    cy.get("#description")
      .select(uniqueDescription)
      .invoke("val")
      .should("deep.equal", uniqueDescription);
    cy.get("#name")
      .type(uniqueName)
      .invoke("val")
      .should("deep.equal", uniqueName);
    cy.get("#price")
      .type(uniquePrice)
      .invoke("val")
      .should("deep.equal", uniquePrice);
    cy.get("form").submit().wait(5000);
  });
  it("Should display success message", () => {
    cy.get("div.alert-success")
      .should("be.visible")
      .should("have", "saved successfully");
  });
  it("Should be displayed in package list", () => {
    cy.visit("/").wait(5000);
    cy.get("div.card-title").should("be.visible").should("contain", uniqueName);
    cy.get("div.card-title")
      .should("be.visible")
      .should("contain", `$${uniquePrice}`);
  });
});
