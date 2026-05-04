import React from 'react'
import Link from 'next/link'
import Logo from '@/components/shared/Logo'

const Footer = ({ categories }) => {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link className="block w-full max-w-40" href='/'>
            <Logo />
          </Link>

          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Independent journalism, sharp opinions and the stories worth your morning coffee.
            Trendafil delivers the news with bite.
          </p>
          {/*<form*/}
          {/*  onSubmit={(e) => e.preventDefault()}*/}
          {/*  className="mt-6 flex max-w-sm gap-2"*/}
          {/*>*/}
          {/*  <input*/}
          {/*    type="email"*/}
          {/*    required*/}
          {/*    placeholder="your@email.com"*/}
          {/*    className="h-10 flex-1 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"*/}
          {/*  />*/}
          {/*  <button className="h-10 rounded-md bg-brand px-4 text-sm font-semibold text-brand-foreground transition hover:opacity-90">*/}
          {/*    Join*/}
          {/*  </button>*/}
          {/*</form>*/}
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Секции
          </h4>
          <ul className="space-y-2 text-sm">
            {categories.map((cat) => (
              <li key={cat._id}>
                <Link
                  href={`/sections/${cat.slug.current}`}
                  className="text-foreground/80 hover:text-brand"
                >
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a className="text-foreground/80 hover:text-brand" href="#">About</a></li>
            <li><a className="text-foreground/80 hover:text-brand" href="#">Newsroom</a></li>
            <li><a className="text-foreground/80 hover:text-brand" href="#">Advertise</a></li>
            <li><a className="text-foreground/80 hover:text-brand" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} ТРЕНДАФИЛ</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
