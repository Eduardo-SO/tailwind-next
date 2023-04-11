import { NavLink } from "./NavLink"
import { Logo } from "./icons/Logo"

export function Sidebar() {
  return (
    <aside className="fixed hidden lg:block bottom-0 left-0 top-0 w-80 border-r border-white/10 p-6">
      <Logo className="h-4 w-auto text-white" />

      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-sm font-medium text-zinc-100">Guias</strong>

          <div className="flex flex-col pl-2 text-sm">
            <NavLink href="/test/a">Introdução</NavLink>
            <NavLink href="/test/b">Iniciando</NavLink>
            <NavLink href="/test/c">SDKs</NavLink>
            <NavLink href="/test/d">Authentication</NavLink>
            <NavLink href="/test/e">Paginação</NavLink>
            <NavLink href="/test/f">Erros</NavLink>
            <NavLink href="/test/g">Webhooks</NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <strong className="text-sm font-medium text-zinc-100">
            Recursos
          </strong>

          <div className="flex flex-col pl-2 text-sm">
            <NavLink href="/test/h">Contatos</NavLink>
            <NavLink href="/test/i">Conversas</NavLink>
            <NavLink href="/test/j">Mensagens</NavLink>
            <NavLink href="/test/k">Grupos</NavLink>
            <NavLink href="/test/l">Paginação</NavLink>
            <NavLink href="/test/m">Anexos</NavLink>
          </div>
        </div>
      </nav>
    </aside>
  )
}
