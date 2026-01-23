describe("Validação do Portfólio - Adriane Oliveira Maciel", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve carregar o Hero com o título e cargo corretos", () => {
    cy.contains("h1", "Adriane Oliveira Maciel").should("be.visible");
    cy.contains("Analista de Testes e Qualidade de Software Júnior").should(
      "be.visible",
    );
  });

  it("Deve validar o direcionamento para um link externo de LinkedIn e GitHub", () => {
    cy.get('a[href="https://linkedin.com/in/adrianemaciel"]')
      .should("have.attr", "target", "_blank")
      .click();
    cy.get('a[href="https://github.com/adrianemaciel"]')
      .should("have.attr", "target", "_blank")
      .click();
  });

  it("Deve validar a navegação suave para a seção Experiência", () => {
    cy.get('a[href="#experience"]').click();
    cy.url().should("include", "#experience");
    cy.get("#experience").should("be.visible");
  });

  it("Deve verificar se todas as categorias de habilidades estão presentes e visíveis", () => {
    cy.get("#skills").within(() => {
      // 1. Categoria QA
      cy.contains("Garantia da Qualidade (QA)").should("be.visible");

      // 2. Categoria Automação
      cy.contains("Automação de Testes").should("be.visible");

      // 3. Categoria Desenvolvimento
      cy.contains("Desenvolvimento e Versionamento").should("be.visible");

      // 4. Categoria Metodologias
      cy.contains("Metodologias e Comportamento").should("be.visible");
    });
  });

  it("Deve validar a presença da formação acadêmica", () => {
    cy.get("#education").should("be.visible");
    cy.contains("Análise e Desenvolvimento de Sistemas").should("be.visible");
  });
});
