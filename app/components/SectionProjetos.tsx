import ProjectCard from "./ProjectCard";

const projetos = [
  {
    nome: "Página Geradora de Tickets",
    descricao:
      "Aplicação para gerar tickets personalizados para eventos, com design responsivo e fácil de usar.",
    url: "https://github.com/UrielHRO/GeneratorTickets",
    img: "/assets/Gerador-Ticket.jpg",
  },
  {
    nome: "Calculadora de Idade",
    descricao:
      "Ferramenta simples e intuitiva para calcular sua idade com base na data de nascimento.",
      url: "https://github.com/UrielHRO/Calculator-age-app",
     img: "/assets/calculadora_idade.jpg",
  },
  {
    nome: "Web Scraper básico",
    descricao:
      "Script para web scraping básico, extraindo dados de páginas web de forma simples e eficiente.",
    url: "https://github.com/UrielHRO/WebScraperCode",
    img: "/assets/Web_scrapper.jpg",
  },
  {
    nome: "Ferramenta de Criptografia e Descriptografia",
    descricao:
      "Aplicação para criptografar e descriptografar textos, garantindo segurança e praticidade.",
    url: "https://github.com/UrielHRO/CryptoCode",
    img: "/assets/criptografia_image.jpg",
  },
];

export default function SectionProjetos() {
  return (
    <section id="projetos" className="w-full max-w-4xl mb-20">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-700 dark:text-blue-400">Meus Projetos</h2>
      <div className="grid gap-8 md:grid-cols-2 w-full">
        {projetos.map((projeto) => (
          <ProjectCard key={projeto.nome} {...projeto} />
        ))}
      </div>
    </section>
  );
}
