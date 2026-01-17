import { TestTube2, Code2, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: TestTube2,
      title: "Garantia da Qualidade (QA)",
      skills: [
        "Planos/Casos de Testes",
        "Testes Manuais",
        "Testes Funcionais",
        "Testes de Integração",
        "Testes Regressivos",
        "Testes Exploratórios",
      ],
    },
    {
      icon: Wrench,
      title: "Automação de Testes",
      skills: ["Cypress", "Postman"],
    },
    {
      icon: Code2,
      title: "Desenvolvimento e Versionamento",
      skills: ["JavaScript", "Git", "GitHub"],
    },
    {
      icon: Users,
      title: "Metodologias e Comportamento",
      skills: [
        "Scrum",
        "Metodologias Ágeis",
        "Comunicação",
        "Escuta Ativa",
        "Adaptabilidade",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#0a1120]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Habilidades <span className="text-[#00bcd4]">Técnicas</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1d283a] border border-slate-800 rounded-xl p-6 hover:border-[#00bcd4]/50 transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#00bcd4]/10 rounded-lg group-hover:bg-[#00bcd4]/20 transition-colors">
                  <category.icon className="h-6 w-6 text-[#00bcd4]" />
                </div>
                <h3 className="text-sm lg:text-base font-bold text-white leading-tight">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-slate-400 flex items-center gap-2 text-sm hover:text-slate-200 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-[#00bcd4] rounded-full shadow-[0_0_5px_#00bcd4]"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
