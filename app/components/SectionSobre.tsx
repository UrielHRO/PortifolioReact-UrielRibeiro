export default function SectionSobre() {
  return (
    <section id="sobre" className="flex flex-col items-center gap-6 w-full max-w-2xl mb-20">
      <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden flex items-center justify-center mb-2 shadow-lg border-4 border-blue-500">
  <img src={"/app/assets/foto_perfil.jpg"} alt="Foto de Uriel Ribeiro" className="w-full h-full object-cover" />
      </div>
      <h1 className="text-4xl font-extrabold mb-2 text-blue-700 dark:text-blue-400">Olá, eu sou Uriel Ribeiro 👋</h1>
      <p className="text-lg max-w-xl text-center mb-4 text-gray-700 dark:text-gray-300">
        Desenvolvedor e entusiasta de segurança cibernética. Apaixonado por criar soluções digitais simples, funcionais e bonitas. Confira meus projetos abaixo!
      </p>
    </section>
  );
}
