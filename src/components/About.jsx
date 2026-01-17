const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#0a1120]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          Sobre <span className="text-[#00bcd4]">Mim</span>
        </h2>

        <div className="bg-[#1d283a]  rounded-xl p-8 md:p-12 shadow-lg">
          <p className="text-lg text-slate-400 leading-relaxed">
            Profissional em Análise e Desenvolvimento de Sistemas com foco em
            QA. Possuo conhecimento sólido no STLC (Ciclo de Vida do Teste de
            Software). Experiência em análise de sistemas e suporte, com
            habilidades de comunicação clara para registrar e acompanhar
            defeitos.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed mt-6">
            Conhecimento em automação de testes utilizando Cypress e Postman,
            além de noções em desenvolvimento JavaScript. Comprometida com a
            qualidade e excelência em cada entrega.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
