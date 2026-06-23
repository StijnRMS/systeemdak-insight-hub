'use client'

import { useState, FormEvent } from 'react'
import { supabase } from '@/lib/supabase'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Pijnpunten />
        <HoeHetWerkt />
        <ProductSpotlight />
        <SocialProof />
        <PrijsIndicatie />
        <LeadForm />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md" style={{ backgroundColor: '#1a2744' }}>
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span className="font-semibold tracking-tight text-gray-900">
            De Daker <span className="font-normal text-gray-500">Daksystemen</span>
          </span>
        </div>
        <button
          onClick={() => scrollTo('dakscan')}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition hover:brightness-110"
          style={{ backgroundColor: '#f59e0b', color: '#131d35' }}
        >
          Gratis dakscan
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32 lg:py-40" style={{ backgroundColor: '#1a2744' }}>
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="h-full w-full bg-gradient-to-br from-amber-400 to-transparent" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
            Al 200+ daken gerenoveerd in de regio
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Een nieuw dak.{' '}
            <span style={{ color: '#f59e0b' }}>Lagere energierekening.</span>{' '}
            Binnen enkele dagen.
          </h1>
          <p className="mt-6 max-w-xl text-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Premium dakrenovatie met de Joris Ide JI Slate sandwichpanelen. Snel, netjes,
            maximale isolatiewaarde — en één aanspreekpunt van offerte tot oplevering.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => scrollTo('dakscan')}
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition hover:brightness-110"
              style={{ backgroundColor: '#f59e0b', color: '#131d35' }}
            >
              Vraag je gratis dakscan aan
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              ✓ 100% gratis · geen verplichtingen
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-sm">
            {[
              { value: '200+', label: 'daken gerenoveerd' },
              { value: '30 jr', label: 'garantie' },
              { value: '4.9/5', label: 'beoordeling' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Pijnpunten() {
  const items = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      title: 'Energierekening blijft stijgen?',
      body: 'Een slecht geïsoleerd dak is de grote boosdoener. Tot 30% van je warmte verdwijnt erdoor.',
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Oud, lelijk of lekkend dak?',
      body: 'Wij vervangen het volledig in dagen, niet weken. Geen eindeloze bouwwerf, wél een strak resultaat.',
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Premies lopen af.',
      body: 'Profiteer nu nog van maximale subsidies. We begeleiden je volledig in de aanvraag.',
    },
  ]

  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: '#f8fafc' }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#d97706' }}>Waarom nu?</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#131d35' }}>
            Wachten kost je elke maand geld
          </h2>
          <p className="mt-4 text-base text-gray-500">Drie redenen om je dakrenovatie niet langer uit te stellen.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: 'rgba(245,158,11,0.12)', color: '#d97706' }}>
                {item.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold" style={{ color: '#131d35' }}>{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm font-medium" style={{ color: '#131d35' }}>
          <span className="mr-2 inline-block h-2 w-2 rounded-full align-middle" style={{ backgroundColor: '#f59e0b' }} />
          Aanvragen voor 2026 zijn beperkt — plan vandaag nog je gratis scan.
        </p>
      </div>
    </section>
  )
}

function HoeHetWerkt() {
  const steps = [
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Gratis dakscan',
      body: 'We komen ter plaatse, meten en analyseren je dak. Je krijgt meteen een eerlijk advies.',
    },
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Duidelijke offerte',
      body: 'Vaste prijs, geen verrassingen. Inclusief volledige begeleiding bij premies en subsidies.',
    },
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Snelle uitvoering',
      body: 'Ons eigen team plaatst je nieuwe dak in dagen, netjes opgeleverd tot het laatste detail.',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#d97706' }}>Hoe het werkt</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#131d35' }}>
            Van eerste contact tot nieuw dak in 3 stappen
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
              <div className="absolute -top-4 left-7 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: '#1a2744' }}>
                {i + 1}
              </div>
              <div className="mt-2" style={{ color: '#1a2744' }}>{step.icon}</div>
              <h3 className="mt-4 text-lg font-semibold" style={{ color: '#131d35' }}>{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductSpotlight() {
  const features = [
    { title: 'Superieure isolatie', body: 'Lage U-waarde, voelbaar warmer in winter, koeler in zomer.' },
    { title: 'Snel gemonteerd', body: 'Grote panelen, kortere bouwtijd, minder overlast.' },
    { title: '30 jaar garantie', body: 'Premium kwaliteit van Joris Ide — voor decennia zorgeloos.' },
    { title: 'Strakke esthetiek', body: 'Tijdloos slate-design dat elk huis opwaardeert.' },
  ]
  const comparison = [
    { feat: 'Isolatiewaarde', ji: 'Topklasse (PIR-kern)', trad: 'Beperkt' },
    { feat: 'Uitvoeringstijd', ji: 'Enkele dagen', trad: 'Weken' },
    { feat: 'Garantie', ji: '30 jaar', trad: '10 jaar' },
    { feat: 'Onderhoud', ji: 'Minimaal', trad: 'Regelmatig' },
  ]

  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: '#131d35' }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#f59e0b' }}>Het product</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Joris Ide JI Slate — het sandwichpaneel dat alles oplost in één laag
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Een nieuw dak hoeft geen weken te duren. Met JI Slate combineren we constructie,
              isolatie en afwerking in één strak paneel.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: '#f59e0b' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="text-sm font-semibold text-white">{f.title}</div>
                    <div className="mt-0.5 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>{f.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border p-6 backdrop-blur" style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.04)' }}>
            <div className="grid grid-cols-3 gap-3 border-b pb-3 text-xs uppercase tracking-wide" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
              <div>Eigenschap</div>
              <div style={{ color: '#f59e0b' }}>JI Slate</div>
              <div>Traditioneel</div>
            </div>
            {comparison.map((row) => (
              <div key={row.feat} className="grid grid-cols-3 gap-3 border-b py-4 text-sm last:border-b-0" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div style={{ color: 'rgba(255,255,255,0.65)' }}>{row.feat}</div>
                <div className="font-semibold text-white">{row.ji}</div>
                <div style={{ color: 'rgba(255,255,255,0.55)' }}>{row.trad}</div>
              </div>
            ))}
            <button
              onClick={() => scrollTo('dakscan')}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:brightness-110"
              style={{ backgroundColor: '#f59e0b', color: '#131d35' }}
            >
              Bekijk wat het voor jouw dak betekent
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  const reviews = [
    { name: 'Familie Janssens', city: 'Antwerpen', text: 'Op vijf dagen lag er een compleet nieuw dak. Strak werk, alles netjes opgeruimd, en het verschil in temperatuur op zolder is enorm.' },
    { name: 'Peter De Smet', city: 'Gent', text: 'Eindelijk een aannemer die afspraken nakomt. Eerlijke prijs, perfecte opvolging van de premies, geen verrassingen achteraf.' },
    { name: 'Ann Vermeiren', city: 'Mechelen', text: 'De gratis dakscan was meteen duidelijk en deskundig. Wij voelden ons geen seconde onder druk gezet. Echt een aanrader.' },
  ]

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#d97706' }}>Wat klanten zeggen</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#131d35' }}>
            4.9 / 5 op basis van honderden gerenoveerde daken
          </h2>
          <div className="mt-3 flex items-center justify-center gap-1" style={{ color: '#f59e0b' }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm font-medium text-gray-500">Actief in Vlaanderen</span>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
              <div className="flex gap-1" style={{ color: '#f59e0b' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-gray-600">&ldquo;{r.text}&rdquo;</blockquote>
              <figcaption className="mt-5">
                <div className="text-sm font-semibold" style={{ color: '#131d35' }}>{r.name}</div>
                <div className="text-sm text-gray-500">{r.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
          <span>Joris Ide Partner</span>
          <span>·</span>
          <span>Erkend Aannemer</span>
          <span>·</span>
          <span>Premiebegeleiding</span>
          <span>·</span>
          <span>30 jaar garantie</span>
        </div>
      </div>
    </section>
  )
}

function PrijsIndicatie() {
  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: '#f8fafc' }}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#d97706' }}>Prijs</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: '#131d35' }}>
          Wat kost een dakrenovatie?
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Een eerlijke prijs hangt af van je dakoppervlak, helling en huidige staat. Daarom geven we nooit prijzen op de gok — wel meteen na de gratis scan.
        </p>
        <button
          onClick={() => scrollTo('dakscan')}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition hover:brightness-110"
          style={{ backgroundColor: '#f59e0b', color: '#131d35' }}
        >
          Ontvang een vrijblijvende prijsindicatie op maat
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

function LeadForm() {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [daktype, setDaktype] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const fd = new FormData(e.currentTarget)
    const data = {
      naam: fd.get('naam') as string,
      telefoon: fd.get('telefoon') as string,
      email: fd.get('email') as string,
      postcode: fd.get('postcode') as string,
      daktype,
      bericht: (fd.get('bericht') as string) || null,
      aangemaakt_op: new Date().toISOString(),
    }

    if (!data.daktype) {
      setError('Kies een daktype.')
      return
    }

    setSubmitting(true)
    const { error: sbError } = await supabase.from('leads').insert([data])
    setSubmitting(false)

    if (sbError) {
      setError('Er ging iets mis. Probeer het opnieuw of bel ons.')
      return
    }
    setDone(true)
  }

  return (
    <section id="dakscan" className="py-20 sm:py-28" style={{ backgroundColor: '#131d35' }}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#f59e0b' }}>Gratis dakscan</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Plan je gratis dakscan
          </h2>
          <p className="mt-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
            We bellen je binnen 24 uur terug om een moment in te plannen. Geen verplichtingen.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white p-6 shadow-2xl sm:p-8">
          {done ? (
            <div className="py-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(245,158,11,0.12)' }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#d97706' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold" style={{ color: '#131d35' }}>Bedankt voor je aanvraag!</h3>
              <p className="mt-2 text-sm text-gray-500">We nemen binnen 24 uur contact met je op om de gratis dakscan in te plannen.</p>
              <button onClick={() => { setDone(false); setDaktype('') }} className="mt-6 text-sm font-medium underline-offset-4 hover:underline" style={{ color: '#1a2744' }}>
                Nieuwe aanvraag indienen
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label htmlFor="naam" className="text-sm font-medium" style={{ color: '#131d35' }}>Naam <span style={{ color: '#d97706' }}>*</span></label>
                  <input id="naam" name="naam" required maxLength={100} placeholder="Voornaam Naam" className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="telefoon" className="text-sm font-medium" style={{ color: '#131d35' }}>Telefoon <span style={{ color: '#d97706' }}>*</span></label>
                  <input id="telefoon" name="telefoon" type="tel" required maxLength={30} placeholder="04XX XX XX XX" className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium" style={{ color: '#131d35' }}>E-mail <span style={{ color: '#d97706' }}>*</span></label>
                  <input id="email" name="email" type="email" required maxLength={200} placeholder="jij@email.be" className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="postcode" className="text-sm font-medium" style={{ color: '#131d35' }}>Postcode <span style={{ color: '#d97706' }}>*</span></label>
                  <input id="postcode" name="postcode" required maxLength={20} placeholder="2000" className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" />
                </div>
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="daktype" className="text-sm font-medium" style={{ color: '#131d35' }}>Type dak <span style={{ color: '#d97706' }}>*</span></label>
                <select
                  id="daktype"
                  value={daktype}
                  onChange={(e) => setDaktype(e.target.value)}
                  className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                  style={{ color: daktype ? '#1a1a1a' : '#9ca3af' }}
                >
                  <option value="" disabled>Kies een daktype</option>
                  <option value="hellend">Hellend dak</option>
                  <option value="plat">Plat dak</option>
                  <option value="combinatie">Combinatie hellend &amp; plat</option>
                  <option value="bijgebouw">Bijgebouw / loods</option>
                  <option value="weet-niet">Weet ik niet zeker</option>
                </select>
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="bericht" className="text-sm font-medium" style={{ color: '#131d35' }}>
                  Bericht <span className="text-gray-400 font-normal">(optioneel)</span>
                </label>
                <textarea id="bericht" name="bericht" rows={3} maxLength={2000} placeholder="Iets dat we vooraf moeten weten?" className="resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" />
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="h-14 w-full rounded-full text-base font-semibold transition hover:brightness-110 disabled:opacity-60"
                style={{ backgroundColor: '#f59e0b', color: '#131d35' }}
              >
                {submitting ? 'Versturen…' : 'Ja, ik wil mijn gratis dakscan!'}
              </button>
              <p className="text-center text-xs text-gray-400">Geen verplichtingen · Reactie binnen 24u · 100% gratis</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-semibold tracking-tight text-gray-900">
            <div className="flex h-9 w-9 items-center justify-center rounded-md" style={{ backgroundColor: '#1a2744' }}>
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            De Daker Daksystemen
          </div>
          <p className="mt-3 max-w-xs text-sm text-gray-500">
            Premium dakrenovatie met Joris Ide JI Slate. Eén aanspreekpunt, van offerte tot oplevering.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-semibold" style={{ color: '#131d35' }}>Contact</div>
          <ul className="mt-3 space-y-2 text-gray-500">
            <li>📞 0XX XX XX XX</li>
            <li>✉️ info@dedaker.be</li>
            <li>📍 Actief in heel Vlaanderen</li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold" style={{ color: '#131d35' }}>Bedrijf</div>
          <ul className="mt-3 space-y-2 text-gray-500">
            <li>BTW: BEXXXX.XXX.XXX</li>
            <li><a href="#" className="hover:text-gray-900">Privacybeleid</a></li>
            <li><a href="#" className="hover:text-gray-900">Algemene voorwaarden</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 text-xs text-gray-400">
        © {new Date().getFullYear()} De Daker Daksystemen — Alle rechten voorbehouden.
      </div>
    </footer>
  )
}
