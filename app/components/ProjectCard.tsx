interface ProjectCardProps {
  nome: string;
  descricao: string;
  url: string;
  img?: string;
}

export default function ProjectCard({ nome, descricao, url, img }: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col items-center bg-white dark:bg-gray-900 shadow-lg hover:scale-[1.03] transition-transform">
      <div className="w-full h-40 bg-gray-100 dark:bg-gray-800 rounded mb-4 flex items-center justify-center">
        {img ? (
          <img src={img} alt={nome} className="h-full object-contain" />
        ) : (
          <span className="text-gray-400">Imagem do projeto</span>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400">{nome}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">{descricao}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        Ver Projeto
      </a>
    </div>
  );
}
