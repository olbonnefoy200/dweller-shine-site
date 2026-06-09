import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { Phone, MapPin, Clock, ShieldCheck, Sparkles, Home, Building2, Wrench, Droplets, Trees, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dweller Cleaning Services — Hornchurch & London" },
      { name: "description", content: "Trusted domestic & commercial cleaning in Hornchurch and across London. End of tenancy, deep cleans, oven, gutters & more. Fully insured." },
      { property: "og:title", content: "Dweller Cleaning Services" },
      { property: "og:description", content: "Domestic & commercial cleaning specialists serving Hornchurch and London." },
    ],
  }),
  component: Index,
});

const PHONE = "020 0000 0000";
const PHONE_HREF = "tel:+442000000000";

const services = [
  { icon: Home, title: "End of Tenancy", desc: "Deposit-back cleans for tenants, landlords and letting agents. From £140 for a 1-bed flat." },
  { icon: Sparkles, title: "Deep & Spring Cleaning", desc: "Top-to-bottom refresh that reaches every corner, skirting and surface." },
  { icon: Building2, title: "Commercial Cleaning", desc: "Offices, retail and communal areas. Daytime, evening and out-of-hours slots." },
  { icon: Wrench, title: "Builders Cleans", desc: "Post-construction dust, paint and debris removal — ready for handover." },
  { icon: Droplets, title: "Oven, Gutter & Pressure Washing", desc: "Driveways, patios, gutters and ovens restored with professional kit." },
  { icon: Trees, title: "Gardening & Maintenance", desc: "Light gardening, refurbishment and property maintenance available." },
];

const reasons = [
  "Fully insured, uniformed staff",
  "Same-day response across London",
  "References available on request",
  "No job too small — one-offs welcome",
  "Evening & weekend slots",
  "Open 24 hours, 7 days a week",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: "var(--gradient-accent)" }}>
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="text-lg font-semibold tracking-tight">Dweller<span className="text-primary"> Cleaning</span></span>
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
          <img src={heroImg} alt="Bright, clean living room" className="h-full w-full object-cover" width={1600} height={1200} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> Hornchurch · London · Fully Insured
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] md:text-6xl">
              A spotless home, a polished workplace — done properly.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
              Dweller Cleaning Services are domestic & commercial cleaning specialists serving Hornchurch and Greater London. End of tenancy, deep cleans, maintenance and refurbishment — handled with care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary shadow-[var(--shadow-soft)] transition hover:bg-white/95">
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Request a quote
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/20 pt-6 text-sm text-white/85">
              <div>
                <div className="text-2xl font-semibold text-white">24/7</div>
                <div>Always open</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">Same day</div>
                <div>London response</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">From £140</div>
                <div>1-bed end of tenancy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">What we do</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Cleaning services tailored to your space.</h2>
          <p className="mt-4 text-muted-foreground">From a quick one-off to a full end-of-tenancy clean, we bring uniformed staff, professional kit and a sharp eye for detail.</p>
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
            <p className="text-sm font-medium uppercase tracking-wider text-primary">Why choose Dweller</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Reliable. Insured. First-class service.</h2>
            <p className="mt-4 text-muted-foreground">
              We're a subsidiary of Dweller Solutions estate agency, so we understand exactly what landlords, tenants and businesses expect from a clean. Responsive, courteous and thorough — every visit.
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
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">A reputable name in Hornchurch.</h2>
          </div>
          <div className="space-y-4 text-muted-foreground md:col-span-3">
            <p>
              Dweller Cleaning Services is a trusted local company offering end of tenancy cleaning, inventory, property maintenance, refurbishment and renovations across London.
            </p>
            <p>
              We're very responsive to your needs and will usually respond on the same day within London. A 1-bedroom flat end of tenancy clean starts from £140 — call for an accurate quote on larger properties or commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Ready for a sparkling clean?</h2>
            <p className="mt-4 max-w-md text-white/85">Call us for a friendly chat and a free, no-obligation quote. We cover Hornchurch, Havering and the whole of London.</p>
            <a href={PHONE_HREF} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary shadow-[var(--shadow-soft)] transition hover:bg-white/95">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
          <div className="grid gap-5 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur md:p-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <div className="text-sm font-semibold">Address</div>
                <div className="text-sm text-white/80">203 Warren Drive, Hornchurch, RM12 4PL</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <div className="text-sm font-semibold">Opening hours</div>
                <div className="text-sm text-white/80">Open 24 hours · 7 days a week</div>
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
                <div className="text-sm text-white/80">Hornchurch, Romford, Ilford, Upminster & Greater London</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Dweller Cleaning Services. All rights reserved.</div>
          <div>A subsidiary of Dweller Solutions.</div>
        </div>
      </footer>
    </div>
  );
}
