const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-[#1d283a4d] border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-slate-400 font-medium tracking-wide">
          © {new Date().getFullYear()} Adriane Oliveira Maciel. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
