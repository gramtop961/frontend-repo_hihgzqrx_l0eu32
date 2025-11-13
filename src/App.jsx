import { useRef } from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  const registerRef = useRef(null)

  const scrollToRegister = () => {
    registerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(139,92,246,0.25),transparent),radial-gradient(900px_500px_at_-10%_20%,rgba(56,189,248,0.2),transparent)] text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/60 border-b border-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-amber-400 shadow-inner" />
            <div className="leading-tight">
              <p className="font-semibold text-slate-900">ASCA</p>
              <p className="text-xs text-slate-500">AlgoUniversity School of CS & AI</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#why" className="hover:text-slate-900">Why ASCA</a>
            <a href="#faculty" className="hover:text-slate-900">Faculty</a>
            <a href="#tracks" className="hover:text-slate-900">Tracks</a>
            <a href="#outcomes" className="hover:text-slate-900">Outcomes</a>
            <a href="#seat" className="hover:text-slate-900">SEAT</a>
          </nav>
          <button onClick={scrollToRegister} className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-semibold shadow-lg shadow-slate-900/10 hover:scale-[1.02] active:scale-[.99] transition">
            Register for SEAT
            <span className="text-amber-300">→</span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8 md:pt-24 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-fuchsia-600">🔥 Next‑Gen University for Builders</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              AlgoUniversity School of CS & AI
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-600">
              Built by FAANG engineers. No ivory tower lectures — learn from the people who ship at scale. Replace theory‑only degrees with real‑world mastery, a portfolio that signals elite potential, and outcomes that compound.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button onClick={scrollToRegister} className="rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-amber-500 text-white px-6 py-3 font-semibold shadow-lg shadow-fuchsia-600/20 hover:brightness-110 transition">
                Register for SEAT — December
              </button>
              <a href="#seat" className="rounded-xl px-6 py-3 font-semibold text-slate-900 bg-white/70 backdrop-blur border border-white/60 hover:bg-white transition">
                Win ₹26 Lakh in Prizes
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
              <li className="flex items-center gap-2"><span className="text-emerald-500">✔</span> 100% scholarship opportunities</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500">✔</span> Singapore Trip, MacBook Air, iPad</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500">✔</span> Built by FAANG engineers</li>
              <li className="flex items-center gap-2"><span className="text-emerald-500">✔</span> Graduate with 1.5 years experience</li>
            </ul>
          </div>
          <div className="relative h-[420px] md:h-[520px] rounded-3xl bg-white/60 border border-white/60 shadow-xl overflow-hidden">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50" />
          </div>
        </div>
      </section>

      {/* Why ASCA Exists */}
      <section id="why" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">💡 Why ASCA Exists</h2>
          <p className="mt-4 text-slate-600 max-w-3xl">
            Traditional universities optimize for exams and attendance. We optimize for skill, velocity, and outcomes. Theory matters — but only when tied to production‑grade projects, mentorship from top engineers, and an environment that rewards building.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-white/60 shadow-sm">
              <p className="font-semibold">🎓 Old Model</p>
              <ul className="mt-3 space-y-2 text-slate-600 text-sm">
                <li>• One‑way lectures</li>
                <li>• Outdated curricula</li>
                <li>• Little industry exposure</li>
                <li>• Generic placements</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-white/60 shadow-sm">
              <p className="font-semibold">🚀 ASCA Model</p>
              <ul className="mt-3 space-y-2 text-slate-600 text-sm">
                <li>• Mentor‑led studios by FAANG engineers</li>
                <li>• Live code, reviews, shipping cadence</li>
                <li>• Tracks aligned to elite competitions</li>
                <li>• Direct pipeline to top teams</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-white/60 shadow-sm">
              <p className="font-semibold">🎯 Result</p>
              <ul className="mt-3 space-y-2 text-slate-600 text-sm">
                <li>• Portfolio that signals top 1%</li>
                <li>• Confidence to solve hard problems</li>
                <li>• Offers that change life trajectory</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="py-16 md:py-24 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">👩‍🏫 Faculty of Practitioners</h2>
          <p className="mt-4 text-slate-600 max-w-3xl">
            Learn from builders, not just lecturers. Our mentors have designed distributed systems, scaled ML at trillion‑token datasets, and shipped products to billions.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Swapnil', role: 'Ex-Google | Distributed Systems' },
              { name: 'Nikita', role: 'Ex-Amazon | Applied AI' },
              { name: 'Manas', role: 'Ex-Meta | Platform Engineering' },
              { name: 'Nalin', role: 'Ex-Microsoft | Data Platforms' },
            ].map((m) => (
              <div key={m.name} className="rounded-2xl p-6 bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-amber-400 mb-4" />
                <p className="font-semibold">{m.name}</p>
                <p className="text-sm text-slate-600">{m.role}</p>
                <ul className="mt-4 text-sm text-slate-600 space-y-1">
                  <li>• 1:1 mentorship and code reviews</li>
                  <li>• Masterclasses and mock interviews</li>
                  <li>• Hiring referrals via Talent Club</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track System */}
      <section id="tracks" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">🛣️ The Track System</h2>
          <p className="mt-4 text-slate-600 max-w-3xl">
            Choose a yearly Track. Ship expert‑level work. Earn badges that matter to elite recruiters. Each Track couples fundamentals with a flagship outcome.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 bg-white border border-slate-100">
              <p className="font-semibold">Google Summer of Code</p>
              <ul className="mt-2 text-slate-600 text-sm space-y-1">
                <li>• OSS engineering with global mentors</li>
                <li>• Systems design + deep Git workflow</li>
                <li>• Outcome: Accepted GSoC proposal</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-slate-100">
              <p className="font-semibold">Competitive Programming</p>
              <ul className="mt-2 text-slate-600 text-sm space-y-1">
                <li>• Algorithms, data structures mastery</li>
                <li>• Codeforces/ICPC ladder</li>
                <li>• Outcome: Expert/ICPC Regionals</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-slate-100">
              <p className="font-semibold">HFT Quant Engineering</p>
              <ul className="mt-2 text-slate-600 text-sm space-y-1">
                <li>• C++ performance, latency tricks</li>
                <li>• Market data, simulation frameworks</li>
                <li>• Outcome: HFT desk interviews</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-slate-100">
              <p className="font-semibold">Facebook AI Hacker Cup</p>
              <ul className="mt-2 text-slate-600 text-sm space-y-1">
                <li>• Problem solving at scale</li>
                <li>• ML systems and tooling exposure</li>
                <li>• Outcome: Global rank credentials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy & Outcomes */}
      <section id="outcomes" className="py-16 md:py-24 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">🏆 Legacy & Outcomes</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { kpi: '2000+', label: 'engineers trained' },
              { kpi: '₹25L', label: 'average package' },
              { kpi: '23', label: 'at Google' },
              { kpi: '15+', label: 'international offers' },
              { kpi: '₹1 Cr', label: 'top package' },
              { kpi: '1100+', label: 'partner tech companies' },
            ].map((s) => (
              <div key={s.kpi} className="rounded-2xl p-6 bg-white border border-slate-100 text-center shadow-sm">
                <p className="text-3xl font-extrabold tracking-tight">{s.kpi}</p>
                <p className="text-sm text-slate-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-slate-600">
            Backed by AlgoUniversity’s track record — products shipped, careers accelerated, and communities built at scale.
          </p>
        </div>
      </section>

      {/* Industry Integration */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">🤝 Industry Integration</h2>
          <p className="mt-4 text-slate-600 max-w-3xl">
            Our Talent Club connects you directly to hiring teams — 1300+ HRs across 1100 tech companies. Get insider opportunities, mentorship, and fast‑track referrals.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Product Engineering', 'AI/ML', 'Backend & Systems', 'Mobile & Web', 'Quant & FinTech', 'DevInfra & SRE'].map((tag) => (
              <div key={tag} className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700">
                • {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.5 years experience */}
      <section className="py-16 md:py-24 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">🧪 Graduate with 1.5 Years of Experience</h2>
          <p className="mt-4 text-slate-600 max-w-3xl">
            Studio‑based learning, production internships, and recurring code reviews build the muscle memory of a working engineer. You don’t graduate “ready to learn on the job” — you graduate already doing the job.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-700">
            <li className="rounded-xl bg-white border border-slate-100 px-5 py-4">• 3 production‑grade capstones</li>
            <li className="rounded-xl bg-white border border-slate-100 px-5 py-4">• 2 industry apprenticeships</li>
            <li className="rounded-xl bg-white border border-slate-100 px-5 py-4">• Weekly code reviews and design docs</li>
            <li className="rounded-xl bg-white border border-slate-100 px-5 py-4">• Interview prep baked into the journey</li>
            <li className="rounded-xl bg-white border border-slate-100 px-5 py-4">• Showcase portfolio and public profile</li>
            <li className="rounded-xl bg-white border border-slate-100 px-5 py-4">• Community that pushes your ceiling</li>
          </ul>
        </div>
      </section>

      {/* SEAT Test */}
      <section id="seat" ref={registerRef} className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">🎫 SEAT — Software Engineer Aptitude Test</h2>
          <p className="mt-4 text-slate-600 max-w-3xl">
            Your gateway to ASCA. Take SEAT this December and compete for scholarships and prizes worth ₹26 Lakh.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 bg-white border border-slate-100">
              <p className="font-semibold">Prizes & Scholarships</p>
              <ul className="mt-2 text-slate-600 text-sm space-y-1">
                <li>• Singapore Trip for top performers</li>
                <li>• MacBook Air, iPad, Official T‑shirts</li>
                <li>• Up to 100% scholarships</li>
                <li>• Exclusive invites to Talent Club</li>
              </ul>
              <div className="mt-4 text-xs text-slate-500">Terms apply. Limited seats.</div>
            </div>
            <div className="rounded-2xl p-6 bg-gradient-to-b from-white to-white/60 border border-white/70">
              <p className="font-semibold mb-3">Register Now</p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Registration received! We will reach out with details.'); }} className="space-y-3">
                <input required type="text" placeholder="Full name" className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
                <input required type="email" placeholder="Email" className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
                <input required type="tel" placeholder="Phone" className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
                <select className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400">
                  <option>Current status: High‑school</option>
                  <option>Current status: College (UG)</option>
                  <option>Current status: Working professional</option>
                </select>
                <button type="submit" className="w-full rounded-lg bg-slate-900 text-white py-2 font-semibold hover:opacity-95">Register for SEAT</button>
              </form>
              <p className="mt-3 text-xs text-slate-500">By registering, you agree to be contacted with exam details and scholarship updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Vision & CTA */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">🌌 Build the Future. Start at ASCA.</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            This is the place for people who refuse average — who want to learn like builders, ship like professionals, and join teams that define the next decade of technology.
          </p>
          <div className="mt-6 flex justify-center">
            <button onClick={scrollToRegister} className="rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-amber-500 text-white px-8 py-3 font-semibold shadow-lg shadow-fuchsia-600/20 hover:brightness-110 transition">
              Register Now
            </button>
          </div>
          <p className="mt-6 text-xs text-white/50">SEAT in December • Scholarships available • Limited seats</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} ASCA — AlgoUniversity School of CS & AI</p>
      </footer>
    </div>
  )
}

export default App
