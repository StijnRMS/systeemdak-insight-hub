'use client'

import React, { useState } from 'react'
import { supabase } from '@/lib/supabase'

const SLATE = '#1c2b3a'
const SLATE_DEEP = '#111a23'
const COPPER = '#c4914a'
const WARM_WHITE = '#f8f7f5'
const WARM_GRAY = '#f0ede9'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <Header />
      <main>
        <Hero />
        <WatIsSysteemdak />
        <ProductSlate />
        <ProductPermapan />
        <Vergelijking />
        <Toepassingen />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

/* ── HEADER ─────────────────────────────────────────────── */
function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded" style={{ backgroundColor: SLATE }}>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight" style={{ color: SLATE }}>
            Systeem<span style={{ color: COPPER }}>dak</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
          <a href="#slate" className="hover:text-gray-900 transition-colors">JI Slate</a>
          <a href="#permapan" className="hover:text-gray-900 transition-colors">Permapan</a>
          <a href="#vergelijking" className="hover:text-gray-900 transition-colors">Vergelijking</a>
          <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
        </nav>
        <button
          onClick={() => scrollTo('contact')}
          className="rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition hover:bg-opacity-10"
          style={{ borderColor: COPPER, color: COPPER }}
        >
          Meer info aanvragen
        </button>
      </div>
    </header>
  )
}

/* ── HERO ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden py-24 sm:py-32" style={{ backgroundColor: SLATE_DEEP }}>
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c4914a 0, #c4914a 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium" style={{ borderColor: 'rgba(196,145,74,0.4)', color: COPPER, backgroundColor: 'rgba(196,145,74,0.08)' }}>
            Onafhankelijke productinformatie
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Geïsoleerde daksystemen:<br />
            <span style={{ color: COPPER }}>alles wat u moet weten</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Sandwichdakpanelen combineren constructie, isolatie en afwerking in één laag.
            Ontdek hoe <strong className="text-white">Joris Ide Slate</strong> en <strong className="text-white">Permapan</strong> werken,
            wat de verschillen zijn en welk systeem bij uw situatie past.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('slate')}
              className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              style={{ backgroundColor: COPPER }}
            >
              Bekijk de producten
            </button>
            <button
              onClick={() => scrollTo('vergelijking')}
              className="rounded-full border px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}
            >
              Producten vergelijken
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── WAT IS EEN SYSTEEMDAK ──────────────────────────────── */
function WatIsSysteemdak() {
  const kenmerken = [
    { icon: '🧱', title: 'Alles-in-één paneel', body: 'Constructie, isolatie en dakbedekking zitten verwerkt in één sandwichpaneel. Geen afzonderlijke lagen nodig.' },
    { icon: '🌡️', title: 'Maximale isolatie', body: 'De PIR- of PUR-kern zorgt voor een uitstekende thermische weerstand, meetbaar in U-waarde en Rd-waarde.' },
    { icon: '⚡', title: 'Snelle plaatsing', body: 'Grote panelen worden snel gemonteerd. De bouwtijd is aanzienlijk korter dan bij traditionele dakopbouw.' },
    { icon: '♻️', title: 'Duurzame keuze', body: 'Lange levensduur, weinig onderhoud en een positief effect op uw energieprestatiepeil (EPC).' },
  ]
  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: WARM_WHITE }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Wat is een systeemdak?" title="Eén paneel. Volledige oplossing." description="Een sandwichdaksysteem is een geprefabriceerd dakpaneel bestaande uit twee metalen deklagen met een isolerende kern ertussen. Het vervangt de volledige traditionele dakopbouw in één handeling." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {kenmerken.map(k => (
            <div key={k.title} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="text-3xl">{k.icon}</div>
              <h3 className="mt-4 font-semibold" style={{ color: SLATE }}>{k.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{k.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── PRODUCT: JI SLATE ──────────────────────────────────── */
function ProductSlate() {
  const specs = [
    { label: 'Fabrikant', value: 'Joris Ide (België)' },
    { label: 'Kern', value: 'PIR (polyisocyanuraat)' },
    { label: 'U-waarde', value: 'tot 0,17 W/m²K (120mm)' },
    { label: 'Dakbedekking', value: 'Geprofileerde staalplaat, leisteenlook' },
    { label: 'Dikte', value: '60 mm – 200 mm' },
    { label: 'Garantie', value: 'tot 30 jaar' },
    { label: 'Toepassing', value: 'Hellende daken (>5°)' },
    { label: 'Brandklasse', value: 'B-s2, d0 (Euroklasse)' },
  ]
  return (
    <section id="slate" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: 'rgba(196,145,74,0.1)', color: COPPER }}>
              Product 1
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: SLATE }}>
              Joris Ide JI Slate
            </h2>
            <p className="mt-1 text-lg font-medium text-gray-400">Het geïsoleerde hellend daksysteem</p>
            <p className="mt-5 leading-relaxed text-gray-600">
              De <strong>Joris Ide JI Slate</strong> is een Belgisch sandwichdakpaneel voor hellende daken. Het paneel combineert een stijve PIR-isolatiekern met een geprofileerde stalen bovenbekleding in een tijdloos leisteenrelief. Het resultaat is een dak dat er verzorgd uitziet én uitstekend isoleert.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Het systeem is geschikt voor renovatie én nieuwbouw. Bij renovatie wordt het paneel vaak rechtstreeks op de bestaande dakstructuur geplaatst, wat sloopwerk minimaliseert. De PIR-kern heeft een hoge isolatiewaarde per centimeter dikte — een groot voordeel bij beperkte dakhoogte.
            </p>
            <div className="mt-6 space-y-3">
              <Voordeel>Hoge isolatiewaarde (lage U-waarde) dankzij PIR-kern</Voordeel>
              <Voordeel>Leisteenrelief geeft authentieke dakuitstraling</Voordeel>
              <Voordeel>Snel te plaatsen — minder bouwhinder</Voordeel>
              <Voordeel>Geschikt voor renovatie over bestaand dak</Voordeel>
              <Voordeel>Bijdrage aan EPC-verbetering (energielabel)</Voordeel>
            </div>
            <button
              onClick={() => scrollTo('contact')}
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              style={{ backgroundColor: COPPER }}
            >
              Vraag info aan bij een dakwerker
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Technische specificaties</h3>
            <div className="divide-y divide-gray-50">
              {specs.map(s => (
                <div key={s.label} className="flex justify-between gap-4 py-3 text-sm">
                  <span className="text-gray-500">{s.label}</span>
                  <span className="font-medium text-right" style={{ color: SLATE }}>{s.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl p-4 text-sm leading-relaxed text-gray-600" style={{ backgroundColor: WARM_GRAY }}>
              <strong style={{ color: SLATE }}>Wanneer kiezen voor JI Slate?</strong><br />
              Ideaal voor woningen met een hellend dak die energetisch willen renoveren met een strakke, moderne uitstraling — zonder maanden bouwoverlast.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── PRODUCT: PERMAPAN ──────────────────────────────────── */
function ProductPermapan() {
  const specs = [
    { label: 'Type', value: 'Geïsoleerd dakpaneel' },
    { label: 'Kern', value: 'PUR (polyurethaan)' },
    { label: 'U-waarde', value: 'tot 0,15 W/m²K' },
    { label: 'Dakbedekking', value: 'Vlakke of licht geprofileerde staalplaat' },
    { label: 'Dikte', value: '80 mm – 220 mm' },
    { label: 'Toepassing', value: 'Vlakke & licht hellende daken' },
    { label: 'Waterdichtheid', value: 'Volledig geïntegreerd systeem' },
    { label: 'Brandklasse', value: 'B-s2, d0 (Euroklasse)' },
  ]
  return (
    <section id="permapan" className="py-20 sm:py-28" style={{ backgroundColor: WARM_WHITE }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:order-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Technische specificaties</h3>
            <div className="divide-y divide-gray-50">
              {specs.map(s => (
                <div key={s.label} className="flex justify-between gap-4 py-3 text-sm">
                  <span className="text-gray-500">{s.label}</span>
                  <span className="font-medium text-right" style={{ color: SLATE }}>{s.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl p-4 text-sm leading-relaxed text-gray-600" style={{ backgroundColor: WARM_GRAY }}>
              <strong style={{ color: SLATE }}>Wanneer kiezen voor Permapan?</strong><br />
              Uitstekend voor platte of licht hellende daken op woningen, bijgebouwen en loodsen. De volledig geïntegreerde waterdichtheid maakt dit systeem bijzonder betrouwbaar.
            </div>
          </div>
          <div className="lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: 'rgba(28,43,58,0.08)', color: SLATE }}>
              Product 2
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: SLATE }}>
              Permapan
            </h2>
            <p className="mt-1 text-lg font-medium text-gray-400">Het geïsoleerde plat daksysteem</p>
            <p className="mt-5 leading-relaxed text-gray-600">
              <strong>Permapan</strong> is een sandwichdakpaneel voor vlakke en licht hellende daken. Het systeem integreert isolatie en dakbedekking in één paneel met een PUR-kern — een van de best isolerende materialen die vandaag beschikbaar zijn.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Het gesloten paneel is volledig waterdicht uit de fabriek. Naad voor naad worden de panelen met speciaal gevormde verbindingen samengezet, waardoor er geen koudebrug of vochtprobleem kan optreden. Permapan is populair voor renovatie van platte daken op woningen en voor industriële toepassingen.
            </p>
            <div className="mt-6 space-y-3">
              <Voordeel>Superieure isolatiewaarde door PUR-kern</Voordeel>
              <Voordeel>Volledig geïntegreerde waterdichtheid</Voordeel>
              <Voordeel>Naadverbinding elimineert koudebruggen</Voordeel>
              <Voordeel>Toepasbaar op woning, bijgebouw en loods</Voordeel>
              <Voordeel>Lange levensduur met minimaal onderhoud</Voordeel>
            </div>
            <button
              onClick={() => scrollTo('contact')}
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:brightness-110"
              style={{ backgroundColor: SLATE, color: 'white' }}
            >
              Vraag info aan bij een dakwerker
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── VERGELIJKING ───────────────────────────────────────── */
function Vergelijking() {
  const rijen = [
    { kenmerk: 'Daktype', slate: 'Hellend (>5°)', permapan: 'Vlak / licht hellend' },
    { kenmerk: 'Isolatiekern', slate: 'PIR', permapan: 'PUR' },
    { kenmerk: 'Beste U-waarde', slate: '0,17 W/m²K', permapan: '0,15 W/m²K' },
    { kenmerk: 'Esthetiek', slate: 'Leisteenrelief', permapan: 'Strak vlak' },
    { kenmerk: 'Waterdichtheid', slate: 'Via dakbedekking', permapan: 'Volledig geïntegreerd' },
    { kenmerk: 'Renovatie over bestaand dak', slate: '✓ Mogelijk', permapan: '✓ Mogelijk' },
    { kenmerk: 'EPC-verbetering', slate: '✓ Ja', permapan: '✓ Ja' },
  ]
  return (
    <section id="vergelijking" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeader eyebrow="Vergelijking" title="JI Slate vs. Permapan" description="Beide systemen zijn kwalitatief hoogwaardige oplossingen. Het juiste systeem hangt af van uw daktype en situatie." />
        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
          <div className="grid grid-cols-3 gap-0 border-b border-gray-100 bg-gray-50 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <div>Kenmerk</div>
            <div style={{ color: COPPER }}>JI Slate</div>
            <div style={{ color: SLATE }}>Permapan</div>
          </div>
          {rijen.map((r, i) => (
            <div key={r.kenmerk} className={`grid grid-cols-3 gap-0 px-6 py-4 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
              <div className="font-medium text-gray-700">{r.kenmerk}</div>
              <div className="text-gray-600">{r.slate}</div>
              <div className="text-gray-600">{r.permapan}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-400">
          Twijfelt u welk systeem geschikt is? Een erkend dakwerker bekijkt uw situatie en geeft concreet advies.
        </p>
        <div className="mt-4 text-center">
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-2.5 text-sm font-semibold transition hover:bg-opacity-5"
            style={{ borderColor: COPPER, color: COPPER }}
          >
            Laat u adviseren door een dakwerker
          </button>
        </div>
      </div>
    </section>
  )
}

/* ── TOEPASSINGEN ───────────────────────────────────────── */
function Toepassingen() {
  const items = [
    { titel: 'Woningrenovatie', tekst: 'Energetische renovatie van een bestaand hellend of plat dak. Vaak plaatsbaar over het bestaande dak zonder volledige sloop.', systeem: 'JI Slate of Permapan' },
    { titel: 'Nieuwbouw woning', tekst: 'Snelle en efficiënte dakopbouw voor nieuwbouwwoningen. Één product vervangt meerdere traditionele lagen.', systeem: 'JI Slate of Permapan' },
    { titel: 'Bijgebouw & garage', tekst: 'Platte daken van garages, carports en bijgebouwen krijgen een duurzame, volledig waterdichte oplossing.', systeem: 'Permapan' },
    { titel: 'Landbouw & industrie', tekst: 'Grote oppervlakken worden snel gedekt. De panelen zijn bestand tegen extreme weersomstandigheden.', systeem: 'JI Slate of Permapan' },
  ]
  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: WARM_WHITE }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Toepassingen" title="Voor welke projecten is dit geschikt?" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(item => (
            <div key={item.titel} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold" style={{ color: SLATE }}>{item.titel}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.tekst}</p>
              <div className="mt-4 inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium" style={{ backgroundColor: 'rgba(196,145,74,0.1)', color: COPPER }}>
                {item.systeem}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── FAQ ────────────────────────────────────────────────── */
function FAQ() {
  const vragen = [
    { v: 'Kan ik een sandwichdakpaneel op mijn bestaand dak plaatsen?', a: 'In veel gevallen wel. Bij renovatie wordt het paneel dikwijls rechtstreeks op de bestaande dakstructuur of dakbedekking gemonteerd. Dit bespaart sloopkosten en -tijd. Een dakwerker beoordeelt of de draagstructuur voldoende sterk is.' },
    { v: 'Wat is het verschil tussen PIR en PUR isolatie?', a: 'Beide zijn schuimplastics met uitstekende isolerende eigenschappen. PIR (polyisocyanuraat) heeft een iets hogere brandweerstand en wordt daarom vaak gebruikt in hellende daken (JI Slate). PUR (polyurethaan) heeft een marginaal hogere isolatiewaarde en is gangbaar in platte daksystemen zoals Permapan.' },
    { v: 'Welke dikte heb ik nodig om te voldoen aan de normen?', a: 'De Belgische EPB-normen schrijven een minimale Rd-waarde voor. Voor een dak ligt die momenteel op minimum 6 m²K/W in nieuwbouw. Een dikte van 120–160 mm PIR of PUR haalt dit comfortabel. Een dakwerker of energieadviseur berekent de exacte benodigde dikte voor uw project.' },
    { v: 'Hoe lang gaat een sandwichdakpaneel mee?', a: 'Een correct geplaatst sandwichdaksysteem gaat 30 tot 50 jaar mee. Joris Ide geeft tot 30 jaar productgarantie. Het stalen buitenoppervlak is behandeld met een corrosiewerende coating die bestand is tegen Belgisch klimaat.' },
    { v: 'Wat kost een sandwichdaksysteem?', a: 'De prijs hangt af van het dakoppervlak, de gekozen dikte en de complexiteit van het project. Sandwichdaksystemen zijn initieel duurder dan traditionele dakbedekking, maar de plaatskost is lager door de snellere uitvoering en de isolatie is meegenomen in de prijs. Vraag een offerte aan bij een erkend dakwerker voor een correcte vergelijking.' },
  ]
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader eyebrow="Veelgestelde vragen" title="Uw vragen beantwoord" />
        <div className="mt-12 space-y-3">
          {vragen.map((item, i) => (
            <div key={i} className="rounded-xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium transition hover:bg-gray-50"
                style={{ color: SLATE }}
              >
                {item.v}
                <svg className={`h-4 w-4 shrink-0 ml-4 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: COPPER }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm leading-relaxed text-gray-600" style={{ backgroundColor: WARM_WHITE }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CONTACT FORM ───────────────────────────────────────── */
function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [daktype, setDaktype] = useState('')
  const [product, setProduct] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const fd = new FormData(e.currentTarget)
    const data = {
      naam: fd.get('naam') as string,
      telefoon: fd.get('telefoon') as string,
      email: fd.get('email') as string,
      postcode: fd.get('postcode') as string,
      daktype,
      bericht: `Product interesse: ${product || 'niet opgegeven'}. ${fd.get('bericht') || ''}`.trim(),
      aangemaakt_op: new Date().toISOString(),
    }

    if (!daktype) { setError('Kies een daktype.'); return }

    setSubmitting(true)
    const { error: sbError } = await supabase.from('leads').insert([data])
    setSubmitting(false)

    if (sbError) { setError('Er ging iets mis. Probeer het opnieuw.'); return }
    setDone(true)
  }

  return (
    <section id="contact" className="py-20 sm:py-28" style={{ backgroundColor: SLATE_DEEP }}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: 'rgba(196,145,74,0.15)', color: COPPER }}>
            Meer info aanvragen
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Laat u adviseren door een erkend dakwerker
          </h2>
          <p className="mt-3 text-base" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Vul uw gegevens in en een vakman neemt contact met u op voor persoonlijk advies over uw project — zonder verplichtingen.
          </p>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
          {done ? (
            <div className="py-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(196,145,74,0.12)' }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: COPPER }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold" style={{ color: SLATE }}>Aanvraag ontvangen</h3>
              <p className="mt-2 text-sm text-gray-500">Een erkend dakwerker neemt zo snel mogelijk contact met u op.</p>
              <button onClick={() => { setDone(false); setDaktype(''); setProduct('') }} className="mt-6 text-sm font-medium underline-offset-4 hover:underline" style={{ color: COPPER }}>
                Nieuwe aanvraag
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="naam" label="Naam" required>
                  <input id="naam" name="naam" required maxLength={100} placeholder="Voornaam Naam" className={inputCls} />
                </Field>
                <Field id="telefoon" label="Telefoon" required>
                  <input id="telefoon" name="telefoon" type="tel" required maxLength={30} placeholder="04XX XX XX XX" className={inputCls} />
                </Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="email" label="E-mail" required>
                  <input id="email" name="email" type="email" required maxLength={200} placeholder="u@email.be" className={inputCls} />
                </Field>
                <Field id="postcode" label="Postcode" required>
                  <input id="postcode" name="postcode" required maxLength={20} placeholder="2000" className={inputCls} />
                </Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="daktype" label="Type dak" required>
                  <select id="daktype" value={daktype} onChange={e => setDaktype(e.target.value)} className={inputCls} style={{ color: daktype ? '#1a1a1a' : '#9ca3af' }}>
                    <option value="" disabled>Kies daktype</option>
                    <option value="hellend">Hellend dak</option>
                    <option value="plat">Plat dak</option>
                    <option value="combinatie">Combinatie</option>
                    <option value="weet-niet">Weet ik niet</option>
                  </select>
                </Field>
                <Field id="product" label="Interesse in">
                  <select id="product" value={product} onChange={e => setProduct(e.target.value)} className={inputCls} style={{ color: product ? '#1a1a1a' : '#9ca3af' }}>
                    <option value="" disabled>Kies product</option>
                    <option value="JI Slate">Joris Ide JI Slate</option>
                    <option value="Permapan">Permapan</option>
                    <option value="beide">Beide / weet nog niet</option>
                  </select>
                </Field>
              </div>
              <Field id="bericht" label="Uw vraag of situatie">
                <textarea id="bericht" name="bericht" rows={3} maxLength={2000} placeholder="Beschrijf kort uw project of stel uw vraag…" className={`${inputCls} resize-none`} />
              </Field>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button type="submit" disabled={submitting} className="h-13 w-full rounded-full py-3.5 text-base font-semibold text-white transition hover:brightness-110 disabled:opacity-60" style={{ backgroundColor: COPPER }}>
                {submitting ? 'Versturen…' : 'Stuur mijn aanvraag →'}
              </button>
              <p className="text-center text-xs text-gray-400">Vrijblijvend · geen verplichtingen · wij respecteren uw privacy</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

/* ── FOOTER ─────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10" style={{ backgroundColor: WARM_WHITE }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 font-bold" style={{ color: SLATE }}>
          <div className="flex h-7 w-7 items-center justify-center rounded" style={{ backgroundColor: SLATE }}>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          Systeem<span style={{ color: COPPER }}>dak</span>
        </div>
        <p className="text-xs text-center text-gray-400">
          Onafhankelijke informatie over geïsoleerde daksystemen. Niet gelieerd aan een specifieke fabrikant of installateur.
        </p>
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Systeemdak</p>
      </div>
    </footer>
  )
}

/* ── HELPERS ────────────────────────────────────────────── */
function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: COPPER }}>{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: SLATE }}>{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-gray-500">{description}</p>}
    </div>
  )
}

function Voordeel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 text-sm text-gray-600">
      <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: COPPER }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      {children}
    </div>
  )
}

function Field({ id, label, required, children }: { id: string; label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium" style={{ color: SLATE }}>
        {label}{required && <span className="ml-0.5" style={{ color: COPPER }}>*</span>}
      </label>
      {children}
    </div>
  )
}

const inputCls = "rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 w-full"
