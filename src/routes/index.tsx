import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import wasteImg from "@/assets/service-waste.jpg";
import dampImg from "@/assets/service-damp.jpg";
import asbestosImg from "@/assets/service-asbestos.jpg";
import propertyImg from "@/assets/service-property.jpg";
import cleaningImg from "@/assets/service-cleaning.jpg";
import { Phone, MapPin, Mail, ShieldCheck, Sparkles, Droplets, HardHat, Trash2, Wrench, Check, Globe } from "lucide-react";

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

const PHONE = "07337 018717";
const PHONE_HREF = "tel:+447337018717";
const EMAIL = "info@dwellerenvironmentalservice.com";
const EMAIL_HREF = "mailto:info@dwellerenvironmentalservice.com";
const WEBSITE = "www.dwellerenvironmental.com";

const services = [
  {
    icon: Trash2,
    image: wasteImg,
    title: "Waste Management",
    desc: "Comprehensive, eco-friendly collection, recycling and disposal that meets regulatory requirements for domestic, industrial and construction waste.",
    bullets: [
      "Landfill — compliant disposal and landfill management for non-recyclable materials.",
      "Recycling — comprehensive sorting, processing and recycling to minimise environmental impact.",
      "Scrap Yard — collection and processing of scrap metal and reusable materials.",
      "Sewage Work — safe handling, treatment and disposal of sewage and wastewater.",
      "Water Treatment — treatment solutions to ensure safe water discharge and environmental compliance.",
      "Construction Waste — expert handling and disposal of building waste in line with environmental regulations.",
      "Domestic Waste — safe, responsible collection to keep homes clean and tidy.",
      "Industrial Waste — specialist solutions for hazardous and non-hazardous industrial waste with minimal environmental impact.",
    ],
  },
  {
    icon: Droplets,
    image: dampImg,
    title: "Damp, Condensation & Mould",
    desc: "Expert testing, treatment and repair to protect occupants from health hazards and properties from structural damage.",
    bullets: [
      "Testing & Inspection — professional surveys to identify mould and moisture issues.",
      "Repair & Prevention — moisture control, ventilation improvements and lasting repairs.",
    ],
  },
  {
    icon: HardHat,
    image: asbestosImg,
    title: "Licensed Asbestos Removal",
    desc: "Fully certified asbestos services for residential, commercial and industrial properties, carried out to strict safety regulations.",
    bullets: [
      "Testing for Asbestos — accurate testing to confirm presence and type.",
      "Sampling of Asbestos — safe collection and laboratory analysis.",
      "Removal of Asbestos — careful, compliant removal with post-clearance reports.",
    ],
  },
  {
    icon: Wrench,
    image: propertyImg,
    title: "Property Management",
    desc: "Reliable property maintenance, repairs and minor building works to keep residential and commercial buildings safe and in good repair.",
    bullets: [
      "Property Maintenance — planned and reactive repairs for housing stock and commercial sites.",
      "Guttering & Drainage — clearing, repairs and replacement to prevent water damage.",
      "Fencing & Boundaries — installation and repair of fences, gates and perimeter works.",
      "Minor Building Works — small repairs, making good and reinstatement after environmental works.",
      "Planned Maintenance — scheduled programmes to help councils and landlords protect property value.",
    ],
  },
  {
    icon: Sparkles,
    image: cleaningImg,
    title: "Professional Cleaning",
    desc: "High-standard industrial, domestic and post-construction cleaning using advanced equipment and eco-friendly solutions.",
    bullets: [
      "Industrial Cleaning — thorough cleaning of factories, warehouses and large facilities.",
      "Domestic Cleaning — deep cleaning of kitchens, bathrooms and living spaces.",
      "Construction Cleaning — post-construction dust and debris removal to prepare sites for occupancy.",
    ],
  },
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
              Your trusted partner for environmental solutions.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
              Dweller Environmental Services is a trusted provider of high-quality, specialist services — waste management, damp & mould remediation, licensed asbestos works and professional cleaning — delivered with care for people and the environment.
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
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Specialist environmental & cleaning services.</h2>
          <p className="mt-4 text-muted-foreground">Four core service lines, delivered by experienced teams following best practice for safety, compliance and sustainability.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, desc, bullets, image }) => (
            <article key={title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-primary/30">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  width={1024}
                  height={576}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <ul className="mt-4 space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
          <Globe className="mt-0.5 h-5 w-5 text-accent" />
          <div>
            <div className="text-sm font-semibold">Website</div>
            <div className="text-sm text-white/80">{WEBSITE}</div>
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
          <div>© {new Date().getFullYear()} Dweller Environmental Services. All rights reserved.</div>
          <div>Trusted · Reliable · Professional</div>
        </div>
      </footer>
    </div>
  );
}
