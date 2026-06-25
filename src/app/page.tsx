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
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TraditioneelVsSandwich />
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
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-500 md:flex">
          <a href="#hoe-het-werkt" className="hover:text-gray-900 transition-colors">Hoe het werkt</a>
          <a href="#slate" className="hover:text-gray-900 transition-colors">JI Slate</a>
          <a href="#permapan" className="hover:text-gray-900 transition-colors">Permapan</a>
          <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
        </nav>
        <button
          onClick={() => scrollTo('contact')}
          className="rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition hover:opacity-80"
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
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c4914a 0, #c4914a 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium" style={{ borderColor: 'rgba(196,145,74,0.4)', color: COPPER, backgroundColor: 'rgba(196,145,74,0.08)' }}>
            Onafhankelijke productinformatie voor particulieren
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Uw woning opnieuw dakdicht én<br />
            <span style={{ color: COPPER }}>perfect geïsoleerd in enkele dagen</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Geïsoleerde sandwichdakpanelen vervangen de volledige traditionele dakopbouw in één handeling.
            Ontdek hoe <strong className="text-white">JI Slate</strong> en <strong className="text-white">JI Permapan</strong> van Joris Ide werken,
            en welk systeem het beste past bij uw woning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => scrollTo('hoe-het-werkt')} className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110" style={{ backgroundColor: COPPER }}>
              Hoe werkt een sandwichdak?
            </button>
            <button onClick={() => scrollTo('vergelijking')} className="rounded-full border px-6 py-3 text-sm font-semibold transition hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}>
              Producten vergelijken
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── TRADITIONEEL VS SANDWICH ───────────────────────────── */
function TraditioneelVsSandwich() {
  const traditioneel = [
    { stap: '1', label: 'Dakstructuur / gordingen', detail: 'Houten of stalen draagstructuur' },
    { stap: '2', label: 'Isolatieplaten', detail: 'Afzonderlijke PIR- of minerale wolplaten' },
    { stap: '3', label: 'Dampscherm', detail: 'Folie om vochtdoorslag te voorkomen' },
    { stap: '4', label: 'Onderdak / onderpan', detail: 'Extra waterkerende laag' },
    { stap: '5', label: 'Lattwerk & tengels', detail: 'Houten onderbouw voor de dakpannen' },
    { stap: '6', label: 'Dakpannen of leien', detail: 'Definitieve dakbedekking' },
  ]
  const sandwich = [
    { stap: '1', label: 'Dakstructuur / gordingen', detail: 'Houten of stalen draagstructuur' },
    { stap: '2', label: 'Sandwichdakpaneel', detail: 'Isolatie + dampscherm + dakbedekking in één paneel', highlight: true },
  ]
  return (
    <section id="hoe-het-werkt" className="py-20 sm:py-28" style={{ backgroundColor: WARM_WHITE }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Traditioneel vs. sandwichdak"
          title="Waarom een sandwichdaksysteem zoveel sneller gaat"
          description="Bij een traditionele dakrenovatie worden 5 tot 6 afzonderlijke lagen aangebracht door verschillende vaklieden. Een sandwichdakpaneel vervangt die lagen allemaal in één stap."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Traditioneel */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="rounded-full px-3 py-1 text-xs font-semibold text-gray-500 bg-gray-100 uppercase tracking-wider">Traditionele dakopbouw</div>
              <span className="text-xs text-gray-400">4 – 8 weken</span>
            </div>
            <div className="space-y-2">
              {traditioneel.map((l) => (
                <div key={l.stap} className="flex items-start gap-3 rounded-lg border border-gray-100 p-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">{l.stap}</div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">{l.label}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{l.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-gray-50 p-3 text-xs text-gray-500">
              Elke laag vereist een aparte levering en plaatsing. Weersomstandigheden bepalen de planning.
            </div>
          </div>

          {/* Sandwich */}
          <div className="rounded-2xl border-2 p-6 shadow-sm" style={{ borderColor: COPPER, backgroundColor: 'rgba(196,145,74,0.04)' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider" style={{ backgroundColor: 'rgba(196,145,74,0.15)', color: COPPER }}>Sandwichdaksysteem</div>
              <span className="text-xs font-semibold" style={{ color: COPPER }}>1 – 3 dagen</span>
            </div>
            <div className="space-y-2">
              {sandwich.map((l) => (
                <div key={l.stap} className={`flex items-start gap-3 rounded-lg p-3 ${l.highlight ? 'border-2' : 'border border-gray-100 bg-white'}`} style={l.highlight ? { borderColor: COPPER, backgroundColor: 'rgba(196,145,74,0.06)' } : {}}>
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: l.highlight ? COPPER : '#9ca3af' }}>{l.stap}</div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: l.highlight ? SLATE : '#374151' }}>{l.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: l.highlight ? '#78716c' : '#9ca3af' }}>{l.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg p-3 text-xs" style={{ backgroundColor: 'rgba(196,145,74,0.1)', color: '#92400e' }}>
              <strong>Resultaat:</strong> constructie, isolatie en waterdichtheid worden in één dag geplaatst door één vakploeg. Geen coördinatie tussen verschillende aannemers nodig.
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-lg bg-white p-3 border border-gray-100">
                <div className="text-lg font-bold" style={{ color: SLATE }}>–70%</div>
                <div className="text-xs text-gray-500 mt-0.5">minder bouwtijd</div>
              </div>
              <div className="rounded-lg bg-white p-3 border border-gray-100">
                <div className="text-lg font-bold" style={{ color: SLATE }}>1 ploeg</div>
                <div className="text-xs text-gray-500 mt-0.5">één vakman</div>
              </div>
              <div className="rounded-lg bg-white p-3 border border-gray-100">
                <div className="text-lg font-bold" style={{ color: SLATE }}>30 jr</div>
                <div className="text-xs text-gray-500 mt-0.5">productgarantie</div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-400">
          Bij renovatie worden de bestaande pannen of leien eerst verwijderd. De sandwichdakpanelen worden daarna rechtstreeks op de gordingen bevestigd — zonder volledige herbouw van de dakstructuur.
        </p>
      </div>
    </section>
  )
}

/* ── PRODUCT: JI VB SLATE 1000 DAK ─────────────────────── */
function ProductSlate() {
  const specs = [
    { label: 'Fabrikant', value: 'Joris Ide (Zwevezele, België)' },
    { label: 'Type', value: 'JI VB Slate 1000 Dak' },
    { label: 'Isolatiekern', value: 'PIR (polyisocyanuraat), CFC/HCFC-vrij' },
    { label: 'Afwerking buitenzijde', value: 'Staalplaat met leisteenmotief (125 × 250 mm)' },
    { label: 'Coating', value: 'Grandem 40 µ — RAL 7024 (antraciet)' },
    { label: 'Dikte 60 mm', value: 'U-waarde 0,37 W/m²K — R 2,65 m²K/W' },
    { label: 'Dikte 120 mm', value: 'U-waarde 0,18 W/m²K — R 5,60 m²K/W' },
    { label: 'Minimale dakhelling', value: '≥ 25°' },
    { label: 'Bevestiging', value: 'Verborgen — geen zichtbare schroeven' },
    { label: 'Paneelbreedte', value: '1000 mm (werkend)' },
    { label: 'Paneelengte', value: '2500 – 10 000 mm (stap 250 mm)' },
    { label: 'Brandklasse', value: 'B-s1,d0 (EN 13501-1)' },
  ]
  return (
    <section id="slate" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: 'rgba(196,145,74,0.1)', color: COPPER }}>
              Product 1 · Hellend dak ≥ 25°
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: SLATE }}>
              Joris Ide JI VB Slate 1000 Dak
            </h2>
            <p className="mt-1 text-base font-medium text-gray-400">Klassiek leisteenlook · verborgen bevestiging · PIR-kern</p>
            <p className="mt-5 leading-relaxed text-gray-600">
              De <strong>JI VB Slate 1000 Dak</strong> is een geïsoleerd sandwichdakpaneel met de klassieke uitstraling van leien.
              De buitenplaat heeft een reliëfpatroon van 125 × 250 mm dat het uitzicht van echte leien nabootst.
              Dankzij de verborgen bevestiging zijn er geen zichtbare schroeven — het eindresultaat is strak en verzorgd.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              De PIR-isolatiekern is CFC- en HCFC-vrij en biedt uitstekende thermische prestaties per centimeter dikte.
              Bij 120 mm dikte haalt het paneel een U-waarde van 0,18 W/m²K — ruim voldoende voor de Belgische EPB-normen.
              Het paneel is geschikt voor hellende daken met een minimale helling van 25°.
            </p>
            <div className="mt-6 space-y-3">
              <Voordeel>Leistenen uitstraling zonder het gewicht van echte leien</Voordeel>
              <Voordeel>Verborgen bevestiging — geen zichtbare schroeven of schroefgaten</Voordeel>
              <Voordeel>PIR-kern: hoge isolatiewaarde per cm dikte, CFC/HCFC-vrij</Voordeel>
              <Voordeel>Bij renovatie bevestigd op bestaande gordingen — geen volledige herbouw nodig</Voordeel>
              <Voordeel>Lichtgewicht staal — geen extra versteviging van de draagstructuur</Voordeel>
              <Voordeel>Minimaal onderhoud dankzij duurzame Grandem-coating</Voordeel>
            </div>
            <button onClick={() => scrollTo('contact')} className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110" style={{ backgroundColor: COPPER }}>
              Vraag info aan bij een dakwerker
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Technische specificaties</h3>
            <div className="divide-y divide-gray-50">
              {specs.map(s => (
                <div key={s.label} className="flex justify-between gap-4 py-3 text-sm">
                  <span className="text-gray-400 shrink-0">{s.label}</span>
                  <span className="font-medium text-right" style={{ color: SLATE }}>{s.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl p-4 text-sm leading-relaxed" style={{ backgroundColor: WARM_GRAY }}>
              <strong style={{ color: SLATE }}>Geschikt voor:</strong>
              <span className="text-gray-600"> woningen met een hellend dak van minimaal 25°. Ideaal voor renovatie én nieuwbouw in residentiële sector.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── PRODUCT: JI PERMAPAN 1100 ──────────────────────────── */
function ProductPermapan() {
  const specs = [
    { label: 'Fabrikant', value: 'Joris Ide (Zwevezele, België)' },
    { label: 'Type', value: 'JI Permapan 1100' },
    { label: 'Isolatiekern', value: 'PIR (polyisocyanuraat), CFC/HCFC-vrij' },
    { label: 'Afwerking buitenzijde', value: 'Geprofileerde stalen dakpanvorm (183 × 350 mm)' },
    { label: 'Dikte 60 mm', value: 'U-waarde 0,33 W/m²K — R 3,00 m²K/W' },
    { label: 'Dikte 80 mm', value: 'U-waarde 0,26 W/m²K — R 3,90 m²K/W' },
    { label: 'Dikte 100 mm', value: 'U-waarde 0,21 W/m²K — R 4,80 m²K/W' },
    { label: 'Dikte 120 mm', value: 'U-waarde 0,18 W/m²K — R 5,55 m²K/W' },
    { label: 'Minimale dakhelling', value: '≥ 8°' },
    { label: 'Bevestiging', value: 'Op de golf van de dakpan' },
    { label: 'Paneelbreedte', value: '1100 mm (werkend)' },
    { label: 'Paneelengte', value: '2100 – 10 000 mm' },
    { label: 'Brandklasse', value: 'B-s2,d0 (EN 13501-1)' },
  ]
  return (
    <section id="permapan" className="py-20 sm:py-28" style={{ backgroundColor: WARM_WHITE }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:order-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Technische specificaties</h3>
            <div className="divide-y divide-gray-50">
              {specs.map(s => (
                <div key={s.label} className="flex justify-between gap-4 py-3 text-sm">
                  <span className="text-gray-400 shrink-0">{s.label}</span>
                  <span className="font-medium text-right" style={{ color: SLATE }}>{s.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl p-4 text-sm leading-relaxed" style={{ backgroundColor: WARM_GRAY }}>
              <strong style={{ color: SLATE }}>Geschikt voor:</strong>
              <span className="text-gray-600"> woningen met een hellend dak vanaf 8°. Combineert de traditonele dakpanuitstraling met moderne isolatieprestaties.</span>
            </div>
          </div>
          <div className="lg:order-2">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: 'rgba(28,43,58,0.08)', color: SLATE }}>
              Product 2 · Hellend dak ≥ 8°
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: SLATE }}>
              Joris Ide JI Permapan 1100
            </h2>
            <p className="mt-1 text-base font-medium text-gray-400">Klassieke dakpanvorm · PIR-kern · breed toepasbaar</p>
            <p className="mt-5 leading-relaxed text-gray-600">
              De <strong>JI Permapan 1100</strong> is een geïsoleerd sandwichdakpaneel met een klassieke dakpanprofilering in de buitenplaat.
              Het paneel geeft uw woning de vertrouwde uitstraling van traditionele dakpannen, maar dan gecombineerd met
              superieure isolatie en een drastisch kortere plaatsingstijd.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Dankzij de minimale helling van slechts 8° is de Permapan 1100 toepasbaar op een veel bredere waaier van
              woningdaken dan de JI Slate. Beschikbaar in diktes van 40 tot 120 mm, waarbij de 120 mm-versie een U-waarde
              van 0,18 W/m²K haalt — in lijn met de strengste EPB-vereisten.
            </p>
            <div className="mt-6 space-y-3">
              <Voordeel>Klassieke dakpanuitstraling — vertrouwd voor elke buurt</Voordeel>
              <Voordeel>Toepasbaar bij lage hellingen vanaf 8°</Voordeel>
              <Voordeel>PIR-kern: uitstekende isolatie in een compacte dikte</Voordeel>
              <Voordeel>5 diktes beschikbaar (40 – 120 mm) voor elk isolatieniveau</Voordeel>
              <Voordeel>Combineerbaar met JI Dakpanplaat voor naadloos geheel</Voordeel>
              <Voordeel>Stevig en weerbestendig — geen onderhoud na plaatsing</Voordeel>
            </div>
            <button onClick={() => scrollTo('contact')} className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:brightness-110" style={{ backgroundColor: SLATE, color: 'white' }}>
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
    { kenmerk: 'Uitstraling', slate: 'Leisteenmotief (modern/strak)', permapan: 'Klassieke dakpanvorm' },
    { kenmerk: 'Minimale dakhelling', slate: '≥ 25°', permapan: '≥ 8°' },
    { kenmerk: 'Isolatiekern', slate: 'PIR (CFC/HCFC-vrij)', permapan: 'PIR (CFC/HCFC-vrij)' },
    { kenmerk: 'Beste U-waarde', slate: '0,18 W/m²K (120 mm)', permapan: '0,18 W/m²K (120 mm)' },
    { kenmerk: 'Bevestiging', slate: 'Verborgen — geen zichtbare schroeven', permapan: 'Op de golf van de dakpan' },
    { kenmerk: 'Beschikbare diktes', slate: '60 mm of 120 mm', permapan: '40 / 60 / 80 / 100 / 120 mm' },
    { kenmerk: 'Renovatie over bestaand dak', slate: '✓ Mogelijk', permapan: '✓ Mogelijk' },
    { kenmerk: 'Nieuwbouw', slate: '✓ Ja', permapan: '✓ Ja' },
  ]
  return (
    <section id="vergelijking" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Vergelijking"
          title="JI Slate vs. JI Permapan"
          description="Beide panelen zijn geïsoleerde sandwichdakpanelen van Joris Ide met PIR-kern. Het verschil zit in de uitstraling, de minimale dakhelling en het aantal beschikbare diktes."
        />
        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
          <div className="grid grid-cols-3 border-b border-gray-100 bg-gray-50 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <div>Kenmerk</div>
            <div style={{ color: COPPER }}>JI Slate</div>
            <div style={{ color: SLATE }}>JI Permapan</div>
          </div>
          {rijen.map((r, i) => (
            <div key={r.kenmerk} className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
              <div className="font-medium text-gray-700">{r.kenmerk}</div>
              <div className="text-gray-600">{r.slate}</div>
              <div className="text-gray-600">{r.permapan}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>Keuzehulp:</strong> Is uw dak steiler dan 25° en wilt u een strakke, moderne uitstraling? Kies JI Slate. Heeft uw dak een lagere helling of wilt u de klassieke dakpanvorm behouden? Dan is JI Permapan de juiste keuze.
        </div>
        <div className="mt-4 text-center">
          <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-2.5 text-sm font-semibold transition hover:opacity-80" style={{ borderColor: COPPER, color: COPPER }}>
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
    {
      icon: '🏠',
      titel: 'Renovatie van bestaande woning',
      tekst: 'De bestaande pannen of leien worden verwijderd, waarna de sandwichdakpanelen rechtstreeks op de gordingen worden bevestigd. De draagstructuur blijft volledig behouden.',
      systeem: 'JI Slate of JI Permapan',
    },
    {
      icon: '🏗️',
      titel: 'Nieuwbouw woning',
      tekst: 'Snelle dakopbouw bij nieuwbouw. Dankzij het lichte gewicht van de panelen volstaat een eenvoudigere en goedkopere draagstructuur.',
      systeem: 'JI Slate of JI Permapan',
    },
    {
      icon: '⚡',
      titel: 'Energetische renovatie',
      tekst: 'EPC-waarde verbeteren voor de premies en subsidies? Een geïsoleerd sandwichdakpaneel heeft een directe en meetbare impact op uw energielabel.',
      systeem: 'JI Slate of JI Permapan',
    },
    {
      icon: '🔄',
      titel: 'Vervanging van asbestdak',
      tekst: 'Na verwijdering van asbesthoudende dakplaten worden sandwichdakpanelen geplaatst op de bestaande gordingen — zonder volledige herbouw van de dakstructuur.',
      systeem: 'JI Slate of JI Permapan',
    },
  ]
  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: WARM_WHITE }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Toepassingen" title="Voor welke woningprojecten is dit geschikt?" description="Sandwichdakpanelen zijn uitsluitend bestemd voor residentieel gebruik. Hieronder de meest voorkomende toepassingen bij particulieren." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(item => (
            <div key={item.titel} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 font-semibold" style={{ color: SLATE }}>{item.titel}</h3>
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
    {
      v: 'Moet de bestaande dakbedekking verwijderd worden?',
      a: 'Ja, de bestaande pannen of leien worden altijd verwijderd. De sandwichdakpanelen worden daarna rechtstreeks op de gordingen bevestigd — de bestaande dakstructuur blijft behouden. Dit is sneller en goedkoper dan een volledige dakbouw, maar er is wel degelijk afvoer van het oude dakmateriaal nodig.',
    },
    {
      v: 'Wat is het verschil tussen JI Slate en JI Permapan?',
      a: 'Beide zijn geïsoleerde sandwichdakpanelen van Joris Ide met een PIR-kern. Het belangrijkste verschil is de uitstraling en de minimale dakhelling: JI Slate heeft een leisteenmotief en vereist een helling van minimaal 25°. JI Permapan heeft een klassieke dakpanvorm en kan al vanaf 8° helling toegepast worden. Permapan is ook beschikbaar in meer diktes (40 tot 120 mm).',
    },
    {
      v: 'Welke dikte heb ik nodig voor de Belgische EPB-normen?',
      a: 'De Belgische EPB-normen vereisen voor daken een minimale Rd-waarde van 6 m²K/W in nieuwbouw. De 120 mm versie van zowel JI Slate (R 5,60) als JI Permapan (R 5,55) zit daar dicht bij. Voor nieuwbouw raadt u best een energieadviseur en erkende dakwerker te raadplegen om de exacte vereiste dikte te berekenen. Voor renovatie gelden soepelere normen.',
    },
    {
      v: 'Hoe lang duurt de plaatsing bij een gemiddelde woning?',
      a: 'Bij een gemiddelde gezinswoning (dakoppervlak van 80 – 150 m²) duurt de plaatsing van sandwichdakpanelen typisch 1 tot 3 werkdagen. Dit staat in schril contrast met een traditionele dakrenovatie waarbij meerdere lagen door meerdere aannemers worden geplaatst over een periode van 4 tot 8 weken.',
    },
    {
      v: 'Hoeveel onderhoud vraagt een sandwichdakpaneel?',
      a: 'Vrijwel geen. De stalen buitenplaat is behandeld met een duurzame coating (Grandem 40µ) die bestand is tegen het Belgische klimaat, zelfreinigend werkt en geen mosvorming toelaat. Een periodieke visuele controle volstaat. De fabrikant geeft een productgarantie tot 30 jaar.',
    },
    {
      v: 'Kan ik premies of subsidies krijgen voor een sandwichdak?',
      a: 'Ja, in de meeste Belgische gemeenten en gewesten zijn er premies beschikbaar voor dakisolatie en energierenovatie. De exacte premies hangen af van uw woonplaats, het EPC-niveau vóór en na de werken, en uw inkomen. Een erkend dakwerker kan u hierbij begeleiden en de aanvraag mee opvolgen.',
    },
  ]
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader eyebrow="Veelgestelde vragen" title="Uw vragen beantwoord" />
        <div className="mt-12 space-y-3">
          {vragen.map((item, i) => (
            <div key={i} className="rounded-xl border border-gray-100 overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium transition hover:bg-gray-50" style={{ color: SLATE }}>
                <span className="pr-4">{item.v}</span>
                <svg className={`h-4 w-4 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: COPPER }}>
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

  async function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    if (!daktype) { setError('Kies een daktype.'); return }
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
          <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: 'rgba(196,145,74,0.15)', color: COPPER }}>
            Meer info aanvragen
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Laat u adviseren door een erkend dakwerker
          </h2>
          <p className="mt-3 text-base text-white/65">
            Vul uw gegevens in en een vakman neemt contact met u op voor persoonlijk advies — vrijblijvend en gratis.
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
                <Field id="daktype" label="Daktype" required>
                  <select id="daktype" value={daktype} onChange={e => setDaktype(e.target.value)} className={inputCls} style={{ color: daktype ? '#1a1a1a' : '#9ca3af' }}>
                    <option value="" disabled>Kies daktype</option>
                    <option value="hellend-steil">Hellend dak (steiler dan 25°)</option>
                    <option value="hellend-licht">Hellend dak (8° – 25°)</option>
                    <option value="weet-niet">Weet ik niet zeker</option>
                  </select>
                </Field>
                <Field id="product" label="Interesse in">
                  <select id="product" value={product} onChange={e => setProduct(e.target.value)} className={inputCls} style={{ color: product ? '#1a1a1a' : '#9ca3af' }}>
                    <option value="" disabled>Kies product</option>
                    <option value="JI Slate">JI VB Slate 1000 Dak</option>
                    <option value="JI Permapan">JI Permapan 1100</option>
                    <option value="beide">Weet nog niet</option>
                  </select>
                </Field>
              </div>
              <Field id="bericht" label="Uw vraag of situatie">
                <textarea id="bericht" name="bericht" rows={3} maxLength={2000} placeholder="Beschrijf kort uw project of stel uw vraag…" className={`${inputCls} resize-none`} />
              </Field>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button type="submit" disabled={submitting} className="h-14 w-full rounded-full py-3.5 text-base font-semibold text-white transition hover:brightness-110 disabled:opacity-60" style={{ backgroundColor: COPPER }}>
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
        <p className="text-xs text-center text-gray-400 max-w-sm">
          Onafhankelijke informatie over geïsoleerde sandwichdaksystemen voor particuliere woningen. Productinfo gebaseerd op officiële Joris Ide technische fiches.
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

const inputCls = "rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 w-full bg-white"
