export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 pb-28 pt-4 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <a
          href="/"
          className="whitespace-nowrap rounded text-2xl text-primary transition hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD92F5] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <span className="font-semibold">Laravel</span>
          <span>Pulse</span>
        </a>
        <p className="text-sm text-white/60">
          Laravel Pulse is a Trademark of Taylor Otwell. Copyright © 2011-2023
          Laravel LLC.
        </p>
      </div>
    </footer>
  )
}
