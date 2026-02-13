import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-[#1d283a4d]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Experiência <span className="text-[#00bcd4]">Profissional</span>
        </h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-700 md:-ml-px"></div>

          <div className="relative mb-8 md:mb-0 md:flex md:items-center md:justify-end md:w-1/2 md:pr-12 md:text-right">
            <div className="bg-[#1d283a] border border-slate-800 rounded-xl p-6 ml-8 md:ml-0 hover:border-[#00bcd4]/50 transition-colors shadow-lg">
              <div className="flex items-center gap-2 mb-2 md:justify-end">
                <Briefcase className="h-5 w-5 text-[#00bcd4]" />
                <h3 className="text-xl font-semibold text-white">
                  Estagiária em Tecnologia da Informação
                </h3>
              </div>

              <p className="text-[#00bcd4] font-medium mb-4">
                Secretaria Municipal de Saúde de Porto Alegre
              </p>

              <div className="flex items-center gap-2 text-sm text-slate-400 mb-4 md:justify-end">
                <Calendar className="h-4 w-4" />
                <span>04/2025 - 11/2025</span>
              </div>

              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#00bcd4] mt-1">•</span>
                  <span>
                    Gerenciamento de incidentes e solicitações via Help Desk
                    (GLPI/IT2M), garantindo organização e rastreabilidade dos
                    chamados de +130 UBS;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00bcd4] mt-1">•</span>
                  <span>
                    Redução do tempo de triagem de defeitos em aproximadamente
                    30% por meio de análise técnica e priorização adequada;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00bcd4] mt-1">•</span>
                  <span>
                    Identificação, documentação e reporte de +80 defeitos em
                    sistemas de saúde (Gercon, Dis, Gmat e etc.) com evidências,
                    passos de reprodução, severidade e prioridade;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00bcd4] mt-1">•</span>
                  <span>
                    Atuação em ambiente ágil, colaborando com desenvolvedores e
                    stakeholders;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00bcd4] mt-1">•</span>
                  <span>
                    Criação e atualização de artigos de autoatendimento e
                    materiais de apoio para a base de conhecimento técnico
                    reduzindo em aproximadamente 30% no tempo de resposta e
                    resolução;
                  </span>
                </li>
              </ul>
            </div>

            <div className="absolute left-0 md:left-auto md:right-0 top-6 w-4 h-4 bg-[#00bcd4] rounded-full border-4 border-[#0a1120] -ml-2 md:-mr-2 shadow-[0_0_10px_rgba(0,188,212,0.5)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
