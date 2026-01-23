import { MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#0a1120]"
    >
      <div className="max-w-4xl mx-auto text-center fade-in">
        <p className="text-[#00bcd4] text-sm font-medium tracking-wider uppercase mb-4">
          Olá, eu sou
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#00bcd4]">
          Adriane Oliveira Maciel
        </h1>

        <p className="text-2xl md:text-3xl text-slate-300 mb-8">
          Analista de Qualidade de Software Júnior
        </p>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Graduada em Análise e Desenvolvimento de Sistemas com foco em QA e em
          garantir a excelência de software através de testes manuais, automação
          com Cypress e vivência em metodologias ágeis.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href="#experience"
            className="border border-[#00bcd4] text-[#00bcd4] hover:bg-[#00bcd4]/10 px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all"
          >
            Ver Experiência
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-slate-400">
          <a
            href="https://linkedin.com/in/adrianemaciel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#00bcd4] transition-colors"
          >
            <FaLinkedin className="h-5 w-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <span className="text-slate-600">•</span>

          <a
            href="https://github.com/sadrianemaciel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#00bcd4] transition-colors"
          >
            <FaGithub className="h-5 w-5" />
            <span className="text-sm">GitHub</span>
          </a>
          <span className="text-slate-600">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span className="text-sm">Rio Grande do Sul, Brasil</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
