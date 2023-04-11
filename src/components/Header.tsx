import { Search, Moon } from "lucide-react"

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 lg:left-80 flex items-center justify-between border-b border-white/10 px-8 py-3 backdrop-blur">
      <button className="flex h-8 w-full max-w-md items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 text-xs text-zinc-400">
        <Search size={14} />
        <span>Procure algo...</span>
      </button>

      <div className="flex items-center ml-6">
        <nav className="hidden lg:flex text-sm items-center gap-6"> 
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="">API</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="">Documentation</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="">Suport</a>
        </nav>

        <div className="flex items-center border-l border-white/10 pl-6 ml-6 gap-6">
          <button>
            <Moon size={14} className="text-zinc-100" />
          </button>

          <button className="whitespace-nowrap border border-cyan-800 bg-cyan-400/10 text-cyan-400 px-3 py-0.5 rounded">
            Sign In
          </button>
        </div>
      </div>
    </header>
  )
}
