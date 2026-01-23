const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#0a1120]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          Sobre <span className="text-[#00bcd4]">Mim</span>
        </h2>

        <div className="bg-[#1d283a]  rounded-xl p-8 md:p-12 shadow-lg ">
          <p className="text-lg text-slate-400 leading-relaxed text-justify">
            Sou graduada em Análise e Desenvolvimento de Sistemas e movida pelo
            compromisso de entregar softwares com qualidade. Minha trajetória
            inclui uma base sólida no STLC (Software Testing Life Cycle) e
            experiência prática em suporte técnico de TI, o que me deu uma visão
            privilegiada do usuário final e uma habilidade analítica para a
            identificação e reporte de bugs.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed mt-6 text-justify">
            Atualmente, foco em Automação de Testes com Cypress e Postman,
            unindo lógica de programação em JavaScript com as melhores práticas
            de QA. Minha missão é atuar com times ágeis e colaborativos,
            garantindo a qualidade do software em todas as etapas do
            desenvolvimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
