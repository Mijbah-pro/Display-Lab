import Reveal from "@/components/utils/Reveal";

const tiers = [
  {
    id: 'starter',
    tagName: 'STARTER',
    name: 'Essential Display',
    features: [
      '1-2 commercial displays',
      'Standard mounting hardware',
      'Delivery & installation',
      'Remote technical support'
    ],
    buttonText: 'Choose Essential',
    isPopular: false,
  },
  {
    id: 'mid-tier',
    tagName: 'MID-TIER',
    name: 'Professional Suite',
    features: [
      '3-6 displays or LED wall',
      'Custom rigging & cabling',
      'CMS access included',
      'On-site tech (up to 8 hrs)'
    ],
    buttonText: 'Choose Professional',
    isPopular: true,
    badgeText: 'MOST POPULAR',
  },
  {
    id: 'enterprise',
    tagName: 'ENTERPRISE',
    name: 'Full Production',
    features: [
      'Custom LED configurations',
      'Dedicated project manager',
      'Full AV integration',
      '24/7 on-site support'
    ],
    buttonText: 'Choose Production',
    isPopular: false,
  }
]

// Custom check icon component matching the image design
function CircularCheck() {
  return (
    <div className="flex-shrink-0 flex items-center justify-center h-[22px] w-[22px] rounded-full border-2 border-[#38bdf8]">
      <svg
        className="h-3 w-3 text-[#38bdf8]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

export default function Transparent() {
  return (
    <section className="relative isolate bg-slate-50/40 px-6 py-24 sm:py-32 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <Reveal props={"w-full"} >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mt-2 h2_text">
              Transparent Pricing. <br /> No Surprises
            </h2>
            <p className="mt-6 title_desc max-w-2xl mx-auto">
              Flexible rental packages designed for one-day activations to multi-week deployments. Every package includes delivery, setup, and support.
            </p>
          </div>
        </Reveal>
        <Reveal props={"w-full"} >

          <div className="mx-auto mt-16 grid gap-8 grid-cols-1 items-stretch lg:grid-cols-3 ">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`flex flex-col justify-between rounded-3xl p-8 sm:p-10 transition-all duration-300 relative ${tier.isPopular
                  ? 'bg-[#003452] text-white shadow-xl shadow-slate-900/10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,52,82,0.25)] border border-slate-700/20 lg:-mt-4 lg:mb-4'
                  : 'bg-white text-slate-800 border border-slate-200/80 shadow-md hover:-translate-y-2 hover:shadow-xl'
                  }`}
              >
                {tier.isPopular && tier.badgeText && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#38bdf8] text-[#003452] text-[11px] font-extrabold tracking-widest px-6 py-1.5 rounded-full shadow-sm whitespace-nowrap uppercase">
                    {tier.badgeText}
                  </span>
                )}

                <div>
                  <div className="flex flex-col">
                    <span className={`text-[11px] font-bold tracking-widest uppercase ${tier.isPopular ? 'text-sky-300/85' : 'text-[#003452]/70'
                      }`}>
                      {tier.tagName}
                    </span>
                    <h3 className={`mt-2 text-2xl font-bold tracking-tight ${tier.isPopular ? 'text-white' : 'text-[#003452]'
                      }`}>
                      {tier.name}
                    </h3>
                  </div>

                  <ul role="list" className="mt-8 space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3.5 text-left">
                        <CircularCheck />
                        <span className={`text-[15px] font-medium leading-relaxed ${tier.isPopular ? 'text-slate-100' : 'text-slate-600'
                          }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <div className="mt-8">
                <button
                  type="button"
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-center transition-all duration-300 cursor-pointer ${tier.isPopular
                      ? 'bg-[#38bdf8] hover:bg-[#30addf] text-[#003452] shadow-md shadow-sky-500/10'
                      : 'border-2 border-[#003452] text-[#003452] bg-transparent hover:bg-slate-50'
                    }`}
                >
                  {tier.buttonText}
                </button>
              </div> */}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

