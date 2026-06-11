import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { Phone, MapPin, Mail, ShieldCheck, Sparkles, Droplets, HardHat, Trash2, Wrench, CloudRain, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dwellers Environmental Services — Merseyside" },
      { name: "description", content: "Safe environments, stronger properties, healthier communities. Damp & mould, asbestos, waste management, property maintenance, guttering and professional cleaning across Merseyside." },
      { property: "og:title", content: "Dwellers Environmental Services" },
      { property: "og:description", content: "Environment Agency licensed contractor serving councils, housing and businesses across Merseyside." },
    ],
  }),
  component: Index,
});

const PHONE = "07523 805337";
const PHONE_HREF = "tel:+447523805337";
const EMAIL = "segunadedirandonald@gmail.com";
const EMAIL_HREF = "mailto:segunadedirandonald@gmail.com";

const services = [
  { icon: Droplets, title: "Damp & Mould Specialists", desc: "Diagnosis and treatment of damp, condensation and mould to protect occupants and building fabric." },
  { icon: HardHat, title: "Asbestos Survey & Removal", desc: "Licensed inspections and safe removal that keep housing stock and public buildings compliant." },
  { icon: Trash2, title: "Waste Management & Collection", desc: "Quick, reliable clearance and disposal — tackling fly-tipping and keeping public areas tidy." },
  { icon: Wrench, title: "Property & Construction Management", desc: "General building repairs, upkeep and minor works for council-managed and private properties." },
  { icon: CloudRain, title: "Guttering & Maintenance", desc: "High-level gutter clearing and washdowns that prevent water damage before costly repairs." },
  { icon: Sparkles, title: "Professional Cleaning", desc: "Communal areas, voids and commercial spaces cleaned by uniformed, vetted teams." },
];

const reasons = [
  "Environment Agency licensed",
  "Registered on The Chest (NW Buyer Portal)",
  "Local team, local suppliers",
  "Fully insured & compliant",
  "Ready for minor works & frameworks",
  "Responsive across Merseyside",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: "var(--gradient-accent)" }}>
              <ShieldCheck className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="text-lg font-semibold tracking-tight">Dwellers<span className="text-primary"> Environmental</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#why" className="hover:text-foreground">Why us</a>
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <a href={PHONE_HREF} className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:opacity-90 md:inline-flex">
            <Phone className="h-4 w-4" /> Call us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Well-maintained residential properties" className="h-full w-full object-cover" width={1600} height={1200} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> Environment Agency Licensed · Merseyside
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] md:text-6xl">
              Safe environments. Stronger properties. Healthier communities.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
              Dwellers Environmental Services is a Merseyside-based contractor supporting councils, housing providers and businesses with damp & mould, asbestos, waste, maintenance, guttering and professional cleaning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary shadow-[var(--shadow-soft)] transition hover:bg-white/95">
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Request a capability sheet
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/20 pt-6 text-sm text-white/85">
              <div>
                <div className="text-2xl font-semibold text-white">Licensed</div>
                <div>Environment Agency</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">The Chest</div>
                <div>NW Buyer Portal</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">Local</div>
                <div>Merseyside team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">What we do</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Environmental, property & cleaning specialists.</h2>
          <p className="mt-4 text-muted-foreground">Six core service lines that keep estates, public spaces and commercial buildings safe, compliant and well maintained.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-primary/30">
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="bg-secondary/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-primary">Why choose Dwellers</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">A straightforward partner for councils & landlords.</h2>
            <p className="mt-4 text-muted-foreground">
              We know how much pressure local councils are under to keep neighbourhoods clean, safe and well-maintained on tight budgets. We set up our services to be a reliable, no-nonsense partner that can step in and take care of the heavy lifting.
            </p>
            <a href={PHONE_HREF} className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:opacity-90">
              <Phone className="h-4 w-4" /> Speak to the team
            </a>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm font-medium">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">About</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Investing in Merseyside.</h2>
          </div>
          <div className="space-y-4 text-muted-foreground md:col-span-3">
            <p>
              Dwellers Environmental Services is a local contractor supporting community, housing and environmental projects across Merseyside — from damp and asbestos works to waste clearance, minor building works, guttering and professional cleaning.
            </p>
            <p>
              Because we operate right here in Merseyside, we prioritise hiring local people, using local suppliers and making sure our waste disposal protects the local environment. We're already registered on The Chest (North West Buyer Portal) and ready to quote for minor works, upcoming frameworks or short-term projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Let's work together.</h2>
            <p className="mt-4 max-w-md text-white/85">Call or email for our capability sheet, a quote on minor works, or a quick chat about upcoming frameworks across Merseyside.</p>
            <a href={PHONE_HREF} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary shadow-[var(--shadow-soft)] transition hover:bg-white/95">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
          <div className="grid gap-5 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur md:p-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <div className="text-sm font-semibold">Address</div>
                <div className="text-sm text-white/80">4 Pym Street, Merseyside, L4 5TH</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <div className="text-sm font-semibold">Email</div>
                <a href={EMAIL_HREF} className="text-sm text-white/80 hover:text-white break-all">{EMAIL}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <div className="text-sm font-semibold">Phone</div>
                <a href={PHONE_HREF} className="text-sm text-white/80 hover:text-white">{PHONE}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <div className="text-sm font-semibold">Coverage</div>
                <div className="text-sm text-white/80">Liverpool, Wirral, Sefton, Knowsley, St Helens & wider Merseyside</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Dwellers Environmental Services. All rights reserved.</div>
          <div>Safe environments · Stronger properties · Healthier communities</div>
        </div>
      </footer>
    </div>
  );
}
