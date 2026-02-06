import { useState } from "react";
import {
  Github,
  Bug,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Testes Manuais - SwagLabs (SauceDemo)",
      problem:
        "A aplicação web SwagLabs (SauceDemo) é uma plataforma de e-commerce de demonstração que precisa ter seus fluxos críticos validados manualmente para garantir a qualidade antes de qualquer automação.",
      solution:
        "Desenvolvi um ciclo completo de STLC (Software Testing Life Cycle): análise de requisitos, criação de casos de teste em formato BDD/Gherkin, execução manual dos cenários e documentação detalhada de bugs encontrados com evidências e severidade.",
      testTypes: [
        "Testes Manuais",
        "Testes Funcionais",
        "Testes Exploratórios",
        "Testes de End-to-End",
      ],
      tools: ["Gherkin/BDD", "STLC", "Bug Tracking", "GitHub Markdown"],

      links: {
        github: "https://github.com/adrianemaciel/QA-Manual-Testing-SwagLabs",
      },
      planning: {
        requirements:
          "Analisei a aplicação identificando os fluxos críticos: autenticação, navegação no catálogo, gestão do carrinho e checkout.",
        scope:
          "Escopo: Login com diferentes usuários (standard, locked_out), adição/remoção de produtos e fluxo de compra. Fora do escopo: Performance.",
      },

      testCases: [
        {
          scenario: "Login com usuário válido",
          given: "o usuário está na página de login do SwagLabs",
          when: "ele insere credenciais válidas (standard_user) e clica em Login",
          then: "ele deve ser redirecionado para a página de inventário com produtos visíveis",
        },
        {
          scenario: "Adicionar produto ao carrinho e finalizar compra",
          given: "o usuário está logado e visualiza a lista de produtos",
          when: "ele adiciona um produto ao carrinho e completa o checkout com dados válidos",
          then: "a mensagem 'Thank you for your order!' deve ser exibida confirmando a compra",
        },
        {
          scenario: "Login com usuário bloqueado",
          given: "o usuário está na página de login",
          when: "ele tenta fazer login com o usuário 'locked_out_user'",
          then: "uma mensagem de erro deve informar que o usuário está bloqueado",
        },
      ],
      bugReport: {
        title: "BUG [001] Duplicidade de Imagens no Inventário",
        steps: [
          "1. Acessar https://www.saucedemo.com",
          "2. Realizar login com as credenciais do problem_user.",
          "3. Visualizar a lista de produtos na página de inventário.",
        ],
        expected:
          "Todas as imagens dos produtos deveriam carregar corretamente, exibindo a foto correspondente a cada item.",
        actual:
          "As imagens dos produtos estão carregando de forma repetida, não correspondendo ao item listado.",
        severity: "Alta",
      },
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Crítica":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "Alta":
        return "bg-orange-500/20 text-orange-400 rounded-lg p-2 border-solid-orange-500";
      case "Média":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Baixa":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-[#1d283a4d] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Projetos & <span className="text-[#22d3ee]">Estudos de Caso</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto text-lg">
          Demonstração prática da minha abordagem em Quality Assurance: do
          planejamento à execução, com foco em documentação e resolução de
          problemas.
        </p>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1d283a] border-none rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="pb-4 pt-8 px-8">
                <div className="flex flex-row items-start justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {project.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="text-gray-300 text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-950 border-gray-800 text-white hover:bg-cyan-500 rounded-lg px-4 py-2 flex items-center gap-2"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Código
                  </a>
                </div>
              </div>

              <div className="px-8 pb-8 space-y-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <h4 className="text-cyan-400 font-semibold flex items-center gap-2 text-xl">
                      <Bug className="h-6 w-6" /> O Problema
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-md">
                      {project.problem}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-cyan-400 font-semibold flex items-center gap-2 text-xl">
                      <CheckCircle2 className="h-6 w-6" /> A Solução
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-md">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.testTypes.map((type, index) => (
                    <span
                      key={index}
                      className="text-cyan-400 hover:bg-cyan-950 border border-cyan-500 px-4 py-1.5 rounded-full text-xs font-medium"
                    >
                      {type}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="text-gray-400 hover:text-white hover:bg-cyan-500 text-sm flex items-center gap-2 w-full justify-center cursor-pointer py-2 rounded-lg transition-colors"
                  onClick={() =>
                    setExpandedProject(
                      expandedProject === project.id ? null : project.id,
                    )
                  }
                >
                  {expandedProject === project.id ? (
                    <>
                      <ChevronUp className="h-4 w-4 mr-2" />
                      Ocultar Detalhes do Plano de Testes
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4 mr-2" />
                      Ver Detalhes do Plano de Testes
                    </>
                  )}
                </button>

                {/* Detalhes Expandidos */}
                {expandedProject === project.id && (
                  <div className="space-y-6 pt-8 border-t border-white/10 mt-4">
                    {/* Planejamento */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-xl text-gray-200">
                        📋 Planejamento
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card/50 rounded-lg p-4">
                          <h5 className="font-medium mb-2 text-md text-cyan-500">
                            Análise de Requisitos
                          </h5>
                          <p className="text-muted-foreground text-md text-gray-400">
                            {project.planning.requirements}
                          </p>
                        </div>
                        <div className=" rounded-lg p-4">
                          <h5 className="font-medium mb-2 text-md text-cyan-500">
                            Escopo
                          </h5>
                          <p className="text-muted-foreground text-md text-gray-400">
                            {project.planning.scope}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Casos de Teste em Gherkin */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-xl text-gray-200">
                        🧪 Casos de Teste (Gherkin/BDD)
                      </h4>
                      <div className="space-y-3">
                        {project.testCases.map((testCase, index) => (
                          <div
                            key={index}
                            className="text-gray-400 rounded-lg p-4 border-border font-mono text-md bg-slate-950/50"
                          >
                            <p className="text-cyan-500 font-semibold mb-2">
                              Cenário: {testCase.scenario}
                            </p>
                            <p className="text-muted-foreground ">
                              <span className="text-green-400">Dado que</span>{" "}
                              {testCase.given}
                            </p>
                            <p className="text-muted-foreground">
                              <span className="text-blue-400">Quando</span>{" "}
                              {testCase.when}
                            </p>
                            <p className="text-muted-foreground">
                              <span className="text-purple-400">Então</span>{" "}
                              {testCase.then}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Relatório de Bug */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-xl text-gray-200">
                        🐛 Exemplo de Relatório de Bug
                      </h4>
                      <div className="p-5 space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <h5 className="text-lg font-medium text-foreground">
                            {project.bugReport.title}
                          </h5>
                          <span
                            className={getSeverityColor(
                              project.bugReport.severity,
                            )}
                          >
                            {project.bugReport.severity}
                          </span>
                        </div>

                        <div>
                          <p className="text-lg font-medium text-muted-foreground text-gray-400 mb-2">
                            Passos para Reproduzir:
                          </p>
                          <ul className="text-lg text-muted-foreground text-gray-400 space-y-1">
                            {project.bugReport.steps.map((step, index) => (
                              <li key={index}>{step}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-lg font-medium text-green-400 mb-1">
                              Resultado Esperado:
                            </p>
                            <p className="text-lg text-muted-foreground text-gray-400">
                              {project.bugReport.expected}
                            </p>
                          </div>
                          <div>
                            <p className="text-lg font-medium text-red-400 mb-1">
                              Resultado Atual:
                            </p>
                            <p className="text-lg text-muted-foreground text-gray-400">
                              {project.bugReport.actual}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
