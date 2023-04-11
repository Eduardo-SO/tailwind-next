"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  children: string
  href: string
}

export function NavLink({ children, href }: NavLinkProps) {
  const activeHref = usePathname()

  return (
    <Link
      data-active={activeHref === href}
      className="border-l border-white/5 px-4 py-2  text-zinc-400 transition-colors hover:border-sky-700  hover:text-white data-[active=true]:border-sky-400"
      href={href}
    >
      {children}
    </Link>
  )
}
