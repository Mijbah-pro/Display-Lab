import Reveal from "@/components/utils/Reveal";

const AdvertisementVenue = () => {
  const audiences = [
    {
      icon: "A",
      title: "For Advertisers",
      subtitle: "Reach the right audience. Drive results.",
      color: "blue",
      accentColor: "text-blue-600",
      bgColor: "bg-blue-600",
      lightBg: "bg-blue-50",
      borderColor: "border-blue-100",
      sectionLabel: "Benefits that drive your success",
      headerIcon: (
        <svg viewBox="0 0 64 64" className="w-16 h-16">
          <circle cx="32" cy="32" r="28" fill="none" stroke="#3b82f6" strokeWidth="3"/>
          <circle cx="32" cy="32" r="18" fill="none" stroke="#3b82f6" strokeWidth="3"/>
          <circle cx="32" cy="32" r="8" fill="#3b82f6"/>
          <line x1="32" y1="4" x2="32" y2="12" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
          <line x1="32" y1="52" x2="32" y2="60" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
          <line x1="4" y1="32" x2="12" y2="32" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
          <line x1="52" y1="32" x2="60" y2="32" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
          <path d="M44 20 L54 10 L50 24 Z" fill="#1e40af"/>
          <line x1="54" y1="10" x2="38" y2="26" stroke="#1e40af" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      benefits: [
        {
          icon: (
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          ),
          title: "Highly Targeted Audience",
          desc: "Reach customers at the right place, time, and moment.",
        },
        {
          icon: (
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          ),
          title: "Maximum Visibility",
          desc: "Your ads appear on premium screens with high foot traffic.",
        },
        {
          icon: (
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
          ),
          title: "Measurable Performance",
          desc: "Track impressions, engagement, and conversions in real time.",
        },
        {
          icon: (
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          ),
          title: "Better ROI",
          desc: "Optimize campaigns to get more value for every dollar spent.",
        },
        {
          icon: (
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          ),
          title: "Easy & Fast Campaigns",
          desc: "Launch, manage, and scale campaigns in just a few clicks.",
        },
      ],
      cta: "Start Advertising Now",
    },
    {
      icon: "V",
      title: "For Venue Partners",
      subtitle: "Monetize your screens. Grow your business.",
      color: "green",
      accentColor: "text-green-600",
      bgColor: "bg-green-600",
      lightBg: "bg-green-50",
      borderColor: "border-green-100",
      sectionLabel: "Benefits that grow your revenue",
      headerIcon: (
        <svg viewBox="0 0 64 64" className="w-16 h-16">
          <rect x="6" y="8" width="44" height="32" rx="3" fill="none" stroke="#22c55e" strokeWidth="2.5"/>
          <rect x="6" y="8" width="44" height="26" rx="2" fill="#dcfce7"/>
          <line x1="28" y1="40" x2="28" y2="50" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="18" y1="50" x2="38" y2="50" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
          <rect x="12" y="24" width="6" height="10" rx="1" fill="#22c55e"/>
          <rect x="22" y="18" width="6" height="16" rx="1" fill="#22c55e"/>
          <rect x="32" y="14" width="6" height="20" rx="1" fill="#22c55e"/>
          <rect x="42" y="20" width="6" height="14" rx="1" fill="#22c55e"/>
          <circle cx="52" cy="44" r="10" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
          <text x="52" y="48" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">$</text>
        </svg>
      ),
      benefits: [
        {
          icon: (
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          ),
          title: "New Revenue Stream",
          desc: "Earn more by displaying approved ads on your screens.",
        },
        {
          icon: (
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
          ),
          title: "Zero Extra Effort",
          desc: "We handle advertisers, content, and approvals for you.",
        },
        {
          icon: (
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          ),
          title: "Managed Content & Support",
          desc: "Get professional content management and dedicated support.",
        },
        {
          icon: (
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          ),
          title: "Brand-Safe & Controlled",
          desc: "You stay in control of what shows on your screens.",
        },
        {
          icon: (
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
          ),
          title: "Performance Insights",
          desc: "See how your screens perform and how much you earn.",
        },
      ],
      cta: "Become a Venue Partner",
    },
  ];

  return (
    <section className="bg-slate-50 min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full mx-auto">
        <Reveal props={"w-full"} >
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-2 shadow-sm">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">
              Built for Advertisers & Venue Partners
            </span>
          </div>
        </div>
        </Reveal>

        <Reveal props={"w-full"} >
        {/* Main Heading */}
        <div className="text-center mb-3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
            One network.
          </h1>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            <span className="text-slate-900">Two </span>
            <span className="text-green-500">powerful opportunities.</span>
          </h1>
        </div>
        </Reveal>

        <Reveal props={"w-full"} >
        {/* Subtitle */}
        <p className="text-center text-slate-500 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Brands gain targeted visibility. Venue partners gain new revenue and better on-site content.
        </p>
        </Reveal>

        <Reveal props={"w-full"} >
        {/* Two Cards Container */}
        <div className="grid md:grid-cols-2 gap-6 relative">
          {audiences.map((audience, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 md:p-8 relative"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${audience.bgColor} rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                    {audience.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{audience.title}</h2>
                    <p className={`${audience.accentColor} text-sm font-medium`}>{audience.subtitle}</p>
                  </div>
                </div>
                {/* Header Icon */}
                <div className="w-16 h-16">
                  {audience.headerIcon}
                </div>
              </div>

              {/* Section Label */}
              <div className="mb-5">
                <span className={`${audience.accentColor} text-xs font-bold tracking-widest uppercase`}>
                  {audience.sectionLabel}
                </span>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {audience.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-9 h-9 ${audience.lightBg} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-semibold text-sm">{benefit.title}</h3>
                      <p className="text-slate-500 text-sm mt-0.5">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full mt-8 ${audience.bgColor} hover:opacity-90 text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md`}>
                {audience.cta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </article>
          ))}

          {/* Center Handshake Icon (Desktop Only) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path d="M8 14 C8 14 6 16 6 18 C6 20 8 22 10 22 L14 22" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <path d="M10 18 L8 20" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 16 L10 18" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
                <path d="M24 14 C24 14 26 16 26 18 C26 20 24 22 22 22 L18 22" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <path d="M22 18 L24 20" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
                <path d="M20 16 L22 18" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
                <rect x="14" y="17" width="4" height="3" rx="1" fill="#3b82f6"/>
              </svg>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AdvertisementVenue;