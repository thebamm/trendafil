"use client"
import React, { useState } from 'react'
import { ModeToggle } from '@/components/ModeToggle'
import { formatMacedonianDate } from '@/lib/utils'
import Link from 'next/link'
import { Search, Menu } from "lucide-react"
import { usePathname } from 'next/navigation'

const Header = ({
  categories
}) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric", year: "numeric",
  })

  return (
    // <header className='border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60'>
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
    {/* Top strip */}
      <div className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-[11px] uppercase tracking-widest text-muted-foreground">
          {/*<span>{formatMacedonianDate()}</span>*/}
          <span>{today}</span>
          <span className="hidden sm:block">News that punches above its weight</span>
        </div>
      </div>

      {/*<div className='flex h-14 items-center justify-between gap-8 px-2 sm:px-4 md:px-6'>*/}
      {/*  <div className='flex-none'>*/}
      {/*    <div className='w-32'>*/}
      {/*      LOGO*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <ModeToggle />*/}
      {/*</div>*/}
      {/* Main bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
        <Link className="shrink-0" href='/'>
          {/*<Logo />*/}
          LOGO
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {categories.map((cat) => (
            <Link
              key={`header-menu-${cat._id}`}
              href={`/sections/${cat.slug.current}`}
              className={`group relative text-sm font-medium ${pathname === `/sections/${cat.slug.current}` ? 'text-foreground' : 'text-foreground/80'} transition-colors hover:text-foreground`}
            >
              {cat.title}
              <span className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full ${pathname === `/sections/${cat.slug.current}` ? 'w-full' : ''}`} />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition hover:bg-secondary hover:text-foreground"
          >
            <Search className="h-4 w-4" />
          </button>

          <ModeToggle />

          {/*<Link*/}
          {/*  to="/"*/}
          {/*  className="hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition hover:bg-primary/90 sm:inline-flex"*/}
          {/*>*/}
          {/*  Subscribe*/}
          {/*</Link>*/}
          <button
            aria-label="Menu"
            onClick={() => setOpen((s) => !s)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition hover:bg-secondary hover:text-foreground md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {categories.map((cat) => (
              <li key={`mobile-menu-${cat._id}`}>
                <Link
                  href={`/sections/${cat.slug.current}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
                >
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
