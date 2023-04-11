import { Search, Moon } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 left-80 right-0 px-8 py-3 border-b border-white/10 backdrop-blur flex items-center justify-between">
      <button className="w-full max-w-md flex items-center gap-3 text-xs text-zinc-400 bg-white/5 border border-white/10 px-3 h-8 rounded-full">
        <Search size={14} />
        <span>Procure algo...</span>
      </button>

      <div>
        <nav>
          <a href="">API</a>
          <a href="">Documentation</a>
          <a href="">Suport</a>
        </nav>

        <div>
          <button>
            <Moon size={14} />
          </button>

          <button>
            Sign In
          </button>
        </div>
      </div>
    </header>
  )
}