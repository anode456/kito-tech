
import Link from "next/link";

const features = [
  {
    title: "Sales Overview",
    description: "Monitor daily revenue and completed transactions.",
    icon: "📊",
  },
  {
    title: "Inventory",
    description: "Manage products, prices, and available stock.",
    icon: "📦",
  },
  {
    title: "Employee Performance",
    description: "Track individual sales and employee progress.",
    icon: "👥",
  },
  {
    title: "Point of Sale",
    description: "Record purchases and deduct stock automatically.",
    icon: "🛒",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-12">
        <Link href="/" className="text-2xl font-black tracking-tight">
          KITO <span className="text-blue-400">TECH</span>
        </Link>
        <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
          Shop Management
        </span>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          Welcome to Kito Tech
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Your business.
          <br />
          <span className="text-blue-400">Under control.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Manage products, record sales, monitor stock, and track
          employee performance from one central shop management system.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/login"
            className="rounded-xl bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-400"
          >
            Sign in to your account →
          </Link>

          <a
            href="#features"
            className="rounded-xl border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/5"
          >
            Explore features
          </a>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto max-w-6xl px-6 pb-20"
      >
        <h2 className="mb-8 text-2xl font-bold">
          Everything your shop needs
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-blue-400/50"
            >
              <div className="mb-5 text-3xl">{feature.icon}</div>
              <h3 className="mb-3 text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="text-sm leading-6 text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-7 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Kito Tech. All rights reserved.
      </footer>
    </main>
  );
}
