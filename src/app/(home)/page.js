import Image from "next/image";
import { ModeToggle } from '@/components/ModeToggle'
import { Button } from '@/components/ui/button'
import AdSlot from '@/components/shared/AdSlot'

export default function Home() {
  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <p>
          Samsung Galaxy S26 пристигнува како стандарден флегшип со 2 nm Exynos 2600 процесор, освежен дизајн и премиум хардвер Според информациите објавени од познатиот инсајдер evleaks, се појавија официјални рендери од моделот Samsung Galaxy S26.
        </p>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.js file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-3 lg:py-14">
          {/*<Link*/}
          {/*  to="/article/$slug"*/}
          {/*  params={{ slug: featured.slug }}*/}
          {/*  className="group fade-up lg:col-span-2"*/}
          {/*>*/}
          {/*  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted shadow-card">*/}
          {/*    <img*/}
          {/*      src={featured.image}*/}
          {/*      alt={featured.title}*/}
          {/*      width={1600}*/}
          {/*      height={1024}*/}
          {/*      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"*/}
          {/*    />*/}
          {/*    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />*/}
          {/*    <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">*/}
          {/*      <span className="inline-block rounded-sm bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-foreground">*/}
          {/*        {cat?.name} · Featured*/}
          {/*      </span>*/}
          {/*      <h1 className="mt-4 max-w-3xl font-display text-3xl font-black leading-[1.05] text-white text-balance md:text-5xl lg:text-6xl">*/}
          {/*        {featured.title}*/}
          {/*      </h1>*/}
          {/*      <p className="mt-4 hidden max-w-2xl text-base text-white/85 md:block">*/}
          {/*        {featured.excerpt}*/}
          {/*      </p>*/}
          {/*      <div className="mt-5 flex items-center gap-3 text-xs text-white/70">*/}
          {/*        <span className="font-medium text-white">{featured.author}</span>*/}
          {/*        <span>·</span>*/}
          {/*        <span>{featured.date}</span>*/}
          {/*        <span>·</span>*/}
          {/*        <span>{featured.readTime}</span>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</Link>*/}

          {/* Side rail */}
          <div className="flex flex-col gap-6 fade-up">
            <h2 className="border-l-4 border-brand pl-3 font-display text-sm font-bold uppercase tracking-widest">
              Top Stories
            </h2>
            <div className="flex flex-col divide-y divide-border">
              {/*{secondary.map((a) => (*/}
              {/*  <div key={a.slug} className="py-4 first:pt-0">*/}
              {/*    <ArticleCard article={a} variant="compact" />*/}
              {/*  </div>*/}
              {/*))}*/}
            </div>
            <AdSlot size="rectangle" />
          </div>
        </div>
      </section>

      {/* Leaderboard ad */}
      <div className="mx-auto max-w-7xl px-4 pt-8">
        <AdSlot size="leaderboard" />
      </div>

      {/* Latest grid */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand">
              The Latest
            </span>
            <h2 className="mt-1 font-display text-3xl font-black md:text-4xl">
              What's moving the world
            </h2>
          </div>
          {/*<Link*/}
          {/*  to="/category/$slug"*/}
          {/*  params={{ slug: "world" }}*/}
          {/*  className="hidden items-center gap-1 text-sm font-semibold text-foreground hover:text-brand sm:inline-flex"*/}
          {/*>*/}
          {/*  All stories <ArrowRight className="h-4 w-4" />*/}
          {/*</Link>*/}
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/*{rest.map((a, i) => (*/}
          {/*  <div key={a.slug} style={{ animationDelay: `${i * 60}ms` }} className="fade-up">*/}
          {/*    <ArticleCard article={a} />*/}
          {/*  </div>*/}
          {/*))}*/}
        </div>
      </section>

      {/* Brand band */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand">
              The Buttercupz Brief
            </span>
            <h3 className="mt-2 font-display text-3xl font-black leading-tight text-balance md:text-4xl">
              The day's news, distilled.<br/>In your inbox by 7am.
            </h3>
            <p className="mt-3 max-w-md text-sm text-primary-foreground/70">
              One email. Five stories. Zero filler. Join 240,000 readers who skip the noise.
            </p>
          </div>
          {/*<form*/}
          {/*  onSubmit={(e) => e.preventDefault()}*/}
          {/*  className="flex flex-col gap-3 sm:flex-row"*/}
          {/*>*/}
          {/*  <Input*/}
          {/*    type="email"*/}
          {/*    placeholder="your@email.com"*/}
          {/*    required*/}
          {/*    className="h-12 flex-1 border-white/20 bg-white/5 text-white placeholder:text-white/50"*/}
          {/*  />*/}
          {/*  <Button type="submit" className="h-12 bg-brand px-6 text-sm font-bold uppercase tracking-wider text-brand-foreground hover:bg-brand/90">*/}
          {/*    Subscribe*/}
          {/*  </Button>*/}
          {/*</form>*/}
        </div>
      </section>

      {/* Bottom ad */}
      <div className="mx-auto max-w-7xl px-4 pt-12">
        <AdSlot size="billboard" />
      </div>
    </>
  )
}
