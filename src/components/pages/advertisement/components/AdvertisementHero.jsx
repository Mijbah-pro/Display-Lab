import Reveal from "@/components/utils/Reveal";

const AdvertisementHero = () => {
  return (
    <section
      id="advertise"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-white py-20 lg:py-24"
      style={{
        backgroundImage: `
          radial-gradient(circle at 90% 12%, rgba(67,193,220,.18), transparent 28%)
        `,
      }}
    >
      <div className="container mx-auto px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal props={"w-full"} >

          {/* Left Content */}
          <div>
            <div className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-sky-600">
              DISPLAY LAB ADVERTISING NETWORK
            </div>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Put your brand in front of customers where buying decisions
              happen.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Run targeted digital advertising across restaurants, grocery
              stores, retail locations, offices, events, and public venues
              through one managed network.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-sky-500 px-7 py-4 font-semibold text-white transition hover:bg-sky-600"
              >
                Launch a Campaign →
              </a>

              <a
                href="#network"
                className="rounded-lg bg-sky-800 px-7 py-4 font-semibold text-white transition hover:bg-sky-900"
              >
                Join as a Venue
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-slate-600">
              <span>✓ Local and multi-location campaigns</span>
              <span>✓ Flexible ad scheduling</span>
              <span>✓ Campaign reporting</span>
            </div>
          </div>
          </Reveal>
          <Reveal props={"w-full"} >

          {/* Right Illustration */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-200 to-slate-300 shadow-2xl min-h-[520px]">
            {/* Ceiling */}
            <div className="h-16 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300" />

            {/* Store Screens */}
            <div className="absolute inset-x-0 top-16 grid grid-cols-[1fr_0.35fr] gap-5 p-8">
              {/* Main Screen */}
              <div className="flex flex-col justify-center border-[10px] border-slate-900 bg-gradient-to-br from-sky-700 to-cyan-500 p-6 text-white shadow-xl">
                <small className="text-xs font-bold tracking-[0.18em]">
                  LOCAL BRAND CAMPAIGN
                </small>

                <h2 className="mt-3 text-4xl font-extrabold leading-none">
                  REACH MORE
                  <br />
                  CUSTOMERS
                </h2>

                <span className="mt-5 inline-block w-fit bg-orange-500 px-3 py-2 text-xs font-bold">
                  BOOK YOUR AD TODAY
                </span>
              </div>

              {/* Side Screen */}
              <div className="flex flex-col items-center justify-center border-[10px] border-slate-900 bg-gradient-to-b from-orange-500 to-red-700 text-center text-white shadow-xl">
                <small className="text-xs font-bold tracking-[0.18em]">
                  SCAN TO
                </small>

                <h3 className="mt-2 text-2xl font-extrabold leading-none">
                  CLAIM
                  <br />
                  OFFER
                </h3>

                <div className="mt-5 h-14 w-14 border-4 border-white bg-[repeating-linear-gradient(45deg,#fff_0_5px,#111_5px_10px)]" />
              </div>
            </div>

            {/* Floor Display */}
            <div className="absolute bottom-7 right-14 h-48 w-24 rounded-t bg-slate-900 shadow-xl">
              <div className="m-2 flex h-[calc(100%-16px)] items-center justify-center bg-gradient-to-b from-sky-700 to-cyan-500 text-center text-sm font-extrabold text-white">
                YOUR AD
              </div>

              <div className="absolute -bottom-3 left-1/2 h-3 w-32 -translate-x-1/2 rounded-full bg-slate-900" />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute left-0 top-20 -translate-x-6 rounded-xl bg-white p-4 shadow-2xl">
              <span className="block text-xs text-slate-500">
                Campaign status
              </span>

              <strong className="mt-1 flex items-center gap-2 text-sm font-bold text-slate-800">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Live in 24 locations
              </strong>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute right-0 top-32 translate-x-6 rounded-xl bg-white p-4 shadow-2xl">
              <span className="block text-xs text-slate-500">
                Estimated monthly views
              </span>

              <strong className="mt-1 text-sm font-bold text-slate-800">
                186,000+
              </strong>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AdvertisementHero;