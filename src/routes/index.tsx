import { createFileRoute } from "@tanstack/react-router";
import logoImg from "@/assets/dweller-logo.jpg";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";
import wasteImg from "@/assets/service-waste.jpg";
import dampImg from "@/assets/service-damp.jpg";
import asbestosImg from "@/assets/service-asbestos.jpg";
import propertyImg from "@/assets/service-property.jpg";
import cleaningImg from "@/assets/service-cleaning.jpg";
import { Phone, MapPin, Mail, ShieldCheck, Sparkles, Droplets, HardHat, Trash2, Wrench, Check, Globe } from "lucide-react";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Dweller Environmental Services — Merseyside" },
      { name: "description", content: "Safe environments, stronger properties, healthier communities. Damp & mould, asbestos, waste management, property maintenance, guttering and professional cleaning across Merseyside." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Dweller Environmental Services — Environmental & Property Services in Merseyside" },
      { property: "og:url", content: "https://dweller-shine-site.lovable.app/" },
      { property: "og:description", content: "Environment Agency licensed contractor serving councils, housing and businesses across Merseyside." },
    ],
    links: [{ rel: "canonical", href: "https://dweller-shine-site.lovable.app/" }],
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
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2 text-xs font-medium">
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 shrink-0" /> Environment Agency Licensed</span>
          <span className="hidden sm:block">Serving Merseyside and its communities</span>
          <a href={PHONE_HREF} className="flex shrink-0 items-center gap-2"><Phone className="h-3.5 w-3.5" /> {PHONE}</a>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" aria-label="Dweller Environmental Services home" className="flex items-center gap-3">
            <img src={logoImg} alt="Dweller Environmental Services Ltd. logo" width={1024} height={768} className="h-20 w-28 object-contain" />
            <span className="hidden border-l border-border pl-4 text-xs leading-relaxed text-muted-foreground lg:block">Safe environments.<br />Stronger properties.<br />Healthier communities.</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#services" className="transition-colors hover:text-primary">Services</a>
            <a href="#why" className="transition-colors hover:text-primary">Why us</a>
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </nav>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90"><a href={PHONE_HREF}><Phone /> <span className="hidden sm:inline">Speak to the team</span><span className="sm:hidden">Call us</span></a></Button>
        </div>
        <nav aria-label="Mobile navigation" className="flex justify-between border-t border-border px-5 py-3 text-sm font-medium md:hidden">
          <a href="#services">Services</a><a href="#why">Why us</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="top" className="relative isolate overflow-hidden bg-hero-surface text-hero-foreground">
          <img src={heroImg} alt="Well-maintained residential properties" width={1600} height={1200} className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="hero-overlay absolute inset-0 -z-10" />
          <div className="mx-auto max-w-6xl px-5 py-10 md:py-20">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase"><span className="h-2 w-2 bg-accent" /> Local expertise. Lasting care.</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">Dweller<br />Environmental Services</h1>
            <p className="mt-5 max-w-xl text-lg font-medium">Safe environments. Stronger properties.<br className="hidden sm:block" /> Healthier communities.</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-hero-foreground/85 md:text-base">Your trusted partner for waste management, damp & mould remediation, licensed asbestos works, property management and professional cleaning across Merseyside.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90"><a href={PHONE_HREF}><Phone /> {PHONE}</a></Button>
              <Button asChild variant="outline" size="lg" className="border-hero-foreground/40 bg-transparent text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground"><a href="#contact">Request a capability sheet</a></Button>
            </div>
          </div>
          <div className="border-t border-hero-foreground/20 bg-hero-surface/55">
            <div className="mx-auto grid max-w-6xl grid-cols-3 gap-3 px-5 py-5 text-xs sm:text-sm">
              <div><strong className="block font-semibold">Licensed</strong><span className="text-hero-foreground/75">Environment Agency</span></div>
              <div><strong className="block font-semibold">The Chest</strong><span className="text-hero-foreground/75">NW Buyer Portal</span></div>
              <div><strong className="block font-semibold">Local</strong><span className="text-hero-foreground/75">Merseyside team</span></div>
            </div>
          </div>
        </section>
        <section id="services" className="mx-auto max-w-6xl px-5 py-10 md:py-20">
          <p className="section-label">What we do</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-4xl">Specialist care for your property<br className="hidden md:block" /> and the environment.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">Experienced local teams, with safety, compliance and sustainability at the heart of every job.</p>
          <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
            {services.map(({ icon: Icon, title, desc, bullets, image }, index) => (
              <article key={title} className="group overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)]">
                <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                  <img src={image} alt={title} loading="lazy" width={1024} height={576} className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
                  <span className="absolute bottom-0 left-0 flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground"><Icon className="h-6 w-6" /></span>
                </div>
                <div className="border-t-4 border-accent p-6 md:p-7">
                  <div className="flex items-start justify-between gap-3"><h3 className="text-xl font-bold">{title}</h3><span className="pt-1 text-xs font-semibold text-accent">0{index + 1}</span></div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  <ul className="mt-5 space-y-3 border-t border-border pt-5">{bullets.map(b => <li key={b} className="flex items-start gap-2 text-sm leading-relaxed"><Check className="mt-1 h-4 w-4 shrink-0 text-accent" /><span>{b}</span></li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="why" className="border-y border-border bg-secondary">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
            <div><p className="section-label">Why choose Dweller</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">A straightforward partner for councils & landlords.</h2><p className="mt-5 leading-relaxed text-muted-foreground">We know how much pressure local councils are under to keep neighbourhoods clean, safe and well-maintained on tight budgets. We set up our services to be a reliable, no-nonsense partner that can step in and take care of the heavy lifting.</p><Button asChild className="mt-7"><a href={PHONE_HREF}><Phone /> Speak to the team</a></Button></div>
            <ul className="grid content-center gap-x-6 sm:grid-cols-2">{reasons.map(r => <li key={r} className="flex items-start gap-3 border-b border-border py-5"><ShieldCheck className="h-5 w-5 shrink-0 text-accent" /><span className="text-sm font-semibold">{r}</span></li>)}</ul>
          </div>
        </section>
        <section id="about" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-5 md:py-20">
          <div className="md:col-span-2"><p className="section-label">Rooted in our community</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Investing in Merseyside.</h2><div className="mt-6 h-1 w-16 bg-accent" /></div>
          <div className="space-y-5 leading-relaxed text-muted-foreground md:col-span-3"><p>Dweller Environmental Services is a local contractor supporting community, housing and environmental projects across Merseyside — from damp and asbestos works to waste clearance, minor building works, guttering and professional cleaning.</p><p>Because we operate right here in Merseyside, we prioritise hiring local people, using local suppliers and making sure our waste disposal protects the local environment. We're already registered on The Chest (North West Buyer Portal) and ready to quote for minor works, upcoming frameworks or short-term projects.</p></div>
        </section>
        <section id="contact" className="border-t-4 border-accent bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
            <div><p className="text-xs font-semibold uppercase text-primary-foreground/75">Get in touch</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Let's work together.</h2><p className="mt-5 max-w-md leading-relaxed text-primary-foreground/85">Call or email for our capability sheet, a quote on minor works, or a quick chat about upcoming frameworks across Merseyside.</p><Button asChild size="lg" className="mt-7 bg-accent text-accent-foreground hover:bg-accent/90"><a href={PHONE_HREF}><Phone /> {PHONE}</a></Button></div>
            <dl className="space-y-5 md:border-l md:border-primary-foreground/25 md:pl-10">
              <div className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0" /><div><dt className="text-sm font-semibold">Address</dt><dd className="mt-1 text-sm text-primary-foreground/85">4 Pym Street, Merseyside, L4 5TH</dd></div></div>
              <div className="flex gap-3"><Mail className="mt-1 h-5 w-5 shrink-0" /><div className="min-w-0"><dt className="text-sm font-semibold">Email</dt><dd className="mt-1 text-sm"><a href={EMAIL_HREF} className="break-all text-primary-foreground/85 hover:underline">{EMAIL}</a></dd></div></div>
              <div className="flex gap-3"><Globe className="mt-1 h-5 w-5 shrink-0" /><div className="min-w-0"><dt className="text-sm font-semibold">Website</dt><dd className="mt-1 break-all text-sm text-primary-foreground/85">{WEBSITE}</dd></div></div>
              <div className="flex gap-3"><Phone className="mt-1 h-5 w-5 shrink-0" /><div><dt className="text-sm font-semibold">Phone</dt><dd className="mt-1 text-sm"><a href={PHONE_HREF} className="text-primary-foreground/85 hover:underline">{PHONE}</a></dd></div></div>
              <div className="flex gap-3"><ShieldCheck className="mt-1 h-5 w-5 shrink-0" /><div><dt className="text-sm font-semibold">Coverage</dt><dd className="mt-1 text-sm leading-relaxed text-primary-foreground/85">Liverpool, Wirral, Sefton, Knowsley, St Helens & wider Merseyside</dd></div></div>
            </dl>
          </div>
        </section>
      </main>
      <footer className="bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-7 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <a href="#top" aria-label="Dweller Environmental Services home"><img src={logoImg} alt="Dweller Environmental Services Ltd." width={1024} height={768} className="h-24 w-32 object-contain" loading="lazy" /></a>
          <div>© {new Date().getFullYear()} Dweller Environmental Services. All rights reserved.<p className="mt-2 font-medium text-accent">Trusted · Reliable · Professional</p></div>
        </div>
      </footer>
    </div>
  );
}
