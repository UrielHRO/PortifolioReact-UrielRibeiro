import Navbar from "../components/Navbar";
import SectionSobre from "../components/SectionSobre";
import SectionProjetos from "../components/SectionProjetos";
import SectionContato from "../components/SectionContato";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 scroll-smooth">
      <Navbar />
      <main className="flex flex-col items-center justify-center py-24 px-4 w-full">
        <SectionSobre />
        <SectionProjetos />
        <SectionContato />
      </main>
      {/* Rodapé */}
      <footer className="w-full py-6 text-center text-gray-400 bg-transparent">
        <span className="text-sm">© {new Date().getFullYear()} Uriel Ribeiro. Todos os direitos reservados.</span>
      </footer>
    </div>
  );
}

