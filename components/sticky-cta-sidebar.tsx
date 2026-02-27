import Link from "next/link"

export function StickyCtaSidebar() {
  return (
    <aside className="hidden lg:block w-72 flex-shrink-0">
      <div className="sticky top-24 px-8 py-10">
        <div className="flex flex-col gap-6">
          <p className="text-caption text-muted-foreground">Готовы начать?</p>
          <Link
            href="#form"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground text-small font-medium tracking-wide hover:bg-[var(--accent-hover)] transition-colors text-center"
          >
            Получить программу
          </Link>
          <Link
            href="/courses"
            className="text-small text-muted-foreground hover:text-foreground transition-colors text-center border-b border-border pb-1 self-center"
          >
            Все курсы
          </Link>
        </div>
      </div>
    </aside>
  )
}
