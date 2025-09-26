import { Link, useLocation } from "react-router";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="font-bold text-xl text-gray-900 dark:text-white">
        <a href="#sobre">Uriel Ribeiro</a>
      </div>
      <div className="flex gap-6">
        <a
          href="#sobre"
          className="text-gray-700 dark:text-gray-200 hover:underline font-semibold"
        >
          Início
        </a>
        <a
          href="#projetos"
          className="text-gray-700 dark:text-gray-200 hover:underline font-semibold"
        >
          Projetos
        </a>
        <a
          href="#contato"
          className="text-gray-700 dark:text-gray-200 hover:underline font-semibold"
        >
          Contato
        </a>
      </div>
    </nav>
  );
}
