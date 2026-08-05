function GroceryHero() {
    return ( 
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-white py-20">
  {/* Background Glow */}
  <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-3xl"></div>

  <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2">
    {/* Left Content */}
    <div>
      <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 before:h-[2px] before:w-8 before:bg-cyan-600 before:content-['']">
        Grocery Digital Signage
      </span>

      <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-6xl">
        Turn every aisle into a smarter selling opportunity.
      </h1>

      <p className="mb-8 max-w-xl text-lg leading-8 text-slate-600">
        Promote weekly specials, improve product discovery, update prices
        instantly, and manage every grocery display from one easy platform.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="#contact"
          className="rounded-md bg-sky-700 px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-sky-800 hover:shadow-xl"
        >
          Start Your Free Trial
        </a>

        <a
          href="#solutions"
          className="rounded-md border border-slate-300 bg-white px-7 py-3 font-semibold text-sky-700 transition hover:bg-slate-50"
        >
          Explore Grocery Solutions
        </a>
      </div>

      <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-slate-600">
        <span className="flex items-center gap-2">
          <span className="text-cyan-600">✓</span>
          Free setup consultation
        </span>

        <span className="flex items-center gap-2">
          <span className="text-cyan-600">✓</span>
          Remote content updates
        </span>

        <span className="flex items-center gap-2">
          <span className="text-cyan-600">✓</span>
          Multi-location ready
        </span>
      </div>
    </div>

    {/* Right Visual */}
    <div className="relative min-h-[520px]">
      <div className="absolute inset-x-0 top-6 rounded-3xl bg-gradient-to-br from-sky-900 to-cyan-800 p-6 shadow-2xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between text-white">
          <b className="text-lg">Fresh Market Promotions</b>
          <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold">
            Live
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main Promotion */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-100 to-cyan-300 p-7">
            <h3 className="mb-3 text-3xl font-bold text-slate-900">
              Fresh Produce
              <br />
              Weekend Sale
            </h3>

            <p className="mb-5 text-slate-700">
              Update offers across every screen in seconds.
            </p>

            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-sky-700 shadow">
              From $1.99
            </span>

            {/* Fruits */}
            <div className="absolute bottom-5 left-0 flex w-full justify-center gap-3">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-yellow-200 to-orange-500 shadow-xl"></div>

              <div className="h-28 w-28 rounded-full bg-gradient-to-br from-lime-200 to-green-700 shadow-xl"></div>

              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-red-300 to-red-700 shadow-xl"></div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="hidden flex-col gap-4 lg:flex">
            <div className="flex flex-1 items-center justify-between rounded-2xl bg-orange-100 p-5">
              <div>
                <small className="text-slate-500">Bakery Special</small>
                <h4 className="text-2xl font-bold">2 for $5</h4>
              </div>

              <span className="text-4xl">🥐</span>
            </div>

            <div className="flex flex-1 items-center justify-between rounded-2xl bg-cyan-100 p-5">
              <div>
                <small className="text-slate-500">Loyalty Offer</small>
                <h4 className="text-2xl font-bold">Save 20%</h4>
              </div>

              <span className="text-4xl">🛒</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card */}
      <div className="absolute bottom-4 left-0 rounded-2xl bg-white p-5 shadow-2xl">
        <h4 className="text-3xl font-bold text-sky-700">+18%</h4>
        <p className="text-sm text-slate-500">promotion engagement</p>
      </div>

      {/* Floating Card */}
      <div className="absolute -right-2 top-0 rounded-2xl bg-white p-5 shadow-2xl">
        <h4 className="text-3xl font-bold text-sky-700">24/7</h4>
        <p className="text-sm text-slate-500">centralized control</p>
      </div>
    </div>
  </div>
</section>
     );
}

export default GroceryHero;