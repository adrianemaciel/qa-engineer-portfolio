import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const certifications = [
    {
      title: "Testes Automatizados com Cypress",
      institution: "Talking About Testing | Udemy",
      status: "Em conclusão",
      description:
        "Foco em otimização de testes de GUI (Interface Gráfica do Usuário) e chamadas de APIs.",
    },
    {
      title: "QA para Times Ágeis",
      institution: "Code Like a Tester |Udemy",
      status: "01/2026",
      description: "Qualidade Ágil e Framework Scrum.",
    },
    {
      title: "Fundamentos e Técnicas do Teste de Software",
      institution: "Udemy",
      status: "11/2025",
      description: "Técnicas, tipos e níveis de teste.",
    },
    {
      title: "Processos de Teste de Software",
      institution: "TIC em Trilhas",
      status: "10/2025",
      description:
        "Entendimento aprofundado do fluxo STLC (Ciclo de Vida do Teste de Software).",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-[#1d283a4d]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Formação <span className="text-[#00bcd4]">Acadêmica</span>
        </h2>

        <div className="bg-[#1d283a] border border-[#00bcd4]/30 rounded-xl p-8 hover:border-[#00bcd4]/60 transition-all mb-12 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#1d283a]/10 rounded-lg">
              <GraduationCap className="h-8 w-8 text-[#00bcd4]" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                Análise e Desenvolvimento de Sistemas
              </h3>
              <p className="text-lg text-[#00bcd4] font-medium mb-3">
                Universidade Estácio
              </p>
              <div className="flex items-center gap-2 text-slate-400">
                <Calendar className="h-4 w-4" />
                <span>Concluído</span>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center text-white">
          Cursos e <span className="text-[#00bcd4]">Certificações</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1d283a] border border-slate-800 rounded-xl p-6 hover:border-[#00bcd4]/50 transition-all duration-300 shadow-md group"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#00bcd4]/10 rounded-lg group-hover:bg-[#00bcd4]/20 transition-colors">
                  <Award className="h-5 w-5 text-[#00bcd4]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-1 leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-[#00bcd4] font-medium mb-2">
                    {cert.institution}
                  </p>
                  <p className="text-xs text-slate-500 mb-3 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {cert.status}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
