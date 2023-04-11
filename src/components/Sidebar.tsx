import { Logo } from "./icons/Logo";

export function Sidebar() {
  return (
    <aside className="border-r border-white/10 w-80 fixed top-0 left-0 bottom-0 p-6">
      <Logo className="text-white h-4 w-auto" />

      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">
            Guias
          </strong>

          <div className="text-sm flex flex-col pl-2">
            <a className="px-4 py-2 border-l border-white/5 hover:border-sky-400 text-zinc-400 hover:text-white transition-colors" href="">Introdução</a>
            <a className="px-4 py-2 border-l border-white/5 hover:border-sky-400 text-zinc-400 hover:text-white transition-colors" href="">Iniciando</a>
            <a className="px-4 py-2 border-l border-white/5 hover:border-sky-400 text-zinc-400 hover:text-white transition-colors" href="">SDKs</a>
            <a className="px-4 py-2 border-l border-white/5 hover:border-sky-400 text-zinc-400 hover:text-white transition-colors" href="">Authentication</a>
            <a className="px-4 py-2 border-l border-white/5 hover:border-sky-400 text-zinc-400 hover:text-white transition-colors" href="">Paginação</a>
            <a className="px-4 py-2 border-l border-white/5 hover:border-sky-400 text-zinc-400 hover:text-white transition-colors" href="">Erros</a>
            <a className="px-4 py-2 border-l border-white/5 hover:border-sky-400 text-zinc-400 hover:text-white transition-colors" href="">Webhooks</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">
            Recursos
          </strong>

          <div className="text-sm flex flex-col pl-2">
            <a className="px-4 py-2 border-l border-white/5 hover:border-sky-400 text-zinc-400 hover:text-white transition-colors" href="">Contatos</a>
            <a className="px-4 py-2 border-l border-white/5 hover:border-sky-400 text-zinc-400 hover:text-white transition-colors" href="">Conversas</a>
            <a className="px-4 py-2 border-l border-white/5 hover:border-sky-400 text-zinc-400 hover:text-white transition-colors" href="">Mensagens</a>
            <a className="px-4 py-2 border-l border-white/5 hover:border-sky-400 text-zinc-400 hover:text-white transition-colors" href="">Grupos</a>
            <a className="px-4 py-2 border-l border-white/5 hover:border-sky-400 text-zinc-400 hover:text-white transition-colors" href="">Paginação</a>
            <a className="px-4 py-2 border-l border-white/5 hover:border-sky-400 text-zinc-400 hover:text-white transition-colors" href="">Anexos</a>
          </div>
        </div>
      </nav>
    </aside>
  )
}