"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { navItems, type NavItem } from "@/lib/nav-data"

function DesktopItem({ item }: { item: NavItem }) {
  if (!item.columns) {
    return (
      <a
        href={item.href}
        className="group relative py-2 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:text-foreground"
      >
        {item.label}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
      </a>
    )
  }

  return (
    <div className="group relative">
      <button
        className="flex items-center gap-1 py-2 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition-colors group-hover:text-foreground"
        aria-haspopup="true"
      >
        <span className="relative">
          {item.label}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
        </span>
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
      </button>

      {/* bridge + panel */}
      <div className="invisible absolute right-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="min-w-[280px] rounded-lg border border-border bg-background p-2 shadow-xl shadow-black/5">
          <ul className="flex flex-col">
            {item.columns.map((col) => (
              <li key={col.label}>
                {col.children ? (
                  <div className="px-3 py-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground">{col.label}</p>
                    <ul className="mt-1.5 flex flex-col gap-1 border-l border-border pl-3">
                      {col.children.map((child) => (
                        <li key={child}>
                          <a
                            href={item.href}
                            className="block py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {col.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function MobileItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)

  if (!item.columns) {
    return (
      <a
        href={item.href}
        className="block border-b border-border py-3 text-xs font-medium uppercase tracking-[0.14em] text-foreground"
      >
        {item.label}
      </a>
    )
  }

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-3 text-xs font-medium uppercase tracking-[0.14em] text-foreground"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="flex flex-col gap-1 pb-3 pl-3">
          {item.columns.map((col) => (
            <li key={col.label}>
              {col.children ? (
                <div className="py-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground">{col.label}</p>
                  <ul className="mt-1 flex flex-col gap-1 border-l border-border pl-3">
                    {col.children.map((child) => (
                      <li key={child}>
                        <a href={item.href} className="block py-1 text-sm text-muted-foreground">
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a href={item.href} className="block py-1.5 text-sm text-muted-foreground">
                  {col.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#b8974f]/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo — far left */}
        <a href="#" className="flex shrink-0 flex-col items-start" aria-label="Strona główna">
          <Image
            src="/logo.png"
            alt="Logo firmy"
            width={416}
            height={201}
            priority
            className="h-11 w-auto"
          />
          <span className="mt-1 text-[0.625rem] font-medium uppercase tracking-[0.25em] text-[#b8974f]/80">
            Broker kredytowy
          </span>
        </a>

        {/* Tabs — far right */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Główna nawigacja">
          {navItems.map((item) => (
            <DesktopItem key={item.label} item={item} />
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-2">
            {navItems.map((item) => (
              <MobileItem key={item.label} item={item} />
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
