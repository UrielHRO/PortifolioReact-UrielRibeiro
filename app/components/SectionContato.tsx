export default function SectionContato() {
  return (
    <section id="contato" className="w-full max-w-md mx-auto mb-20">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-800 flex flex-col items-center">
        <h2 className="text-2xl font-extrabold mb-4 text-center text-gray-900 dark:text-gray-100">Contato</h2>
        <p className="text-base text-center text-gray-700 dark:text-gray-300 mb-2">
          Gostou do meu trabalho? Vamos conversar!<br />
          Você pode me encontrar nas seguintes redes:
        </p>
        <div className="flex gap-8 mt-4">
          <a href="mailto:uriel.h.ribeiro@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-semibold">Email</a>
          <a href="https://www.linkedin.com/in/uriel-ribeiro-6965a4241/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-semibold">LinkedIn</a>
          <a href="https://github.com/UrielHRO" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-semibold">GitHub</a>
        </div>
      </div>
    </section>
  );
}
