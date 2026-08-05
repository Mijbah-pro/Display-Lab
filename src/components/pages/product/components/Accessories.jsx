import Reveal from "@/components/utils/Reveal";

const ACCESSORIES_LIST = [
  {
    id: "wall-mounts",
    title: "Wall Mounts",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-16 h-16 text-slate-600 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-600"
      >
        {/* Wall plate */}
        <rect x="15" y="25" width="10" height="50" rx="3" fill="currentColor" opacity="0.15" />
        <rect x="18" y="20" width="4" height="60" rx="1" fill="currentColor" opacity="0.3" />
        {/* Articulating arms */}
        <path
          d="M22 35 L45 30 L65 40"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M22 65 L45 70 L65 60"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Center joints */}
        <circle cx="45" cy="30" r="3.5" fill="currentColor" />
        <circle cx="45" cy="70" r="3.5" fill="currentColor" />
        {/* VESA plate */}
        <rect x="65" y="30" width="18" height="40" rx="2" fill="currentColor" />
        {/* Bracket hooks */}
        <line x1="68" y1="25" x2="68" y2="75" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="80" y1="25" x2="80" y2="75" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "floor-stands",
    title: "Floor Stands",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-16 h-16 text-slate-600 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-600"
      >
        {/* Screen silhouette */}
        <rect x="23" y="18" width="54" height="34" rx="3.5" fill="currentColor" opacity="0.15" />
        <rect x="26" y="21" width="48" height="28" rx="2" fill="currentColor" />
        <rect x="29" y="24" width="42" height="22" fill="#06b6d4" opacity="0.25" />
        {/* Stand Column */}
        <rect x="47" y="49" width="6" height="36" fill="currentColor" />
        {/* Base */}
        <ellipse cx="50" cy="86" rx="22" ry="6" fill="currentColor" />
        <ellipse cx="50" cy="86" rx="17" ry="3.5" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "touch-overlay",
    title: "Touch Overlay",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-16 h-16 text-slate-600 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-600"
      >
        {/* Screen base */}
        <rect x="20" y="24" width="60" height="42" rx="4" fill="currentColor" opacity="0.1" />
        <rect x="23" y="27" width="54" height="36" rx="2" fill="currentColor" opacity="0.2" />
        {/* UI graphics */}
        <path d="M26 50 Q 38 38, 50 48 T 74 38" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M26 57 Q 42 46, 55 55 T 74 45" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        {/* Floating Touch Frame */}
        <rect x="15" y="19" width="70" height="52" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
        {/* Touch point radial ripples */}
        <circle cx="50" cy="46" r="8" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="50" cy="46" r="4" fill="#06b6d4" />
      </svg>
    ),
  },
  {
    id: "media-players",
    title: "Media Players",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-16 h-16 text-slate-600 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-600"
      >
        {/* Sleek slim media player box */}
        <rect x="15" y="42" width="70" height="18" rx="3" fill="currentColor" />
        {/* Front face screen/grill panel */}
        <rect x="18" y="45" width="64" height="12" rx="1.5" fill="currentColor" opacity="0.15" />
        {/* Power indicator and status lights */}
        <circle cx="26" cy="51" r="2" fill="#06b6d4" className="animate-pulse" />
        <circle cx="72" cy="51" r="1" fill="#10b981" />
        <circle cx="76" cy="51" r="1" fill="#10b981" opacity="0.5" />
        {/* Subtle metallic reflection */}
        <path d="M15 42 L85 42 L77 44 L23 44 Z" fill="white" opacity="0.1" />
        {/* Feet */}
        <rect x="25" y="60" width="8" height="2.5" fill="currentColor" opacity="0.8" />
        <rect x="67" y="60" width="8" height="2.5" fill="currentColor" opacity="0.8" />
      </svg>
    ),
  },
  {
    id: "protective-enclosures",
    title: "Protective Enclosures",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-16 h-16 text-slate-600 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-600"
      >
        {/* Enclosure cabinet */}
        <rect x="33" y="15" width="34" height="70" rx="4.5" fill="currentColor" />
        {/* Front glass pane */}
        <rect x="38" y="24" width="24" height="38" rx="1.5" fill="currentColor" opacity="0.18" />
        <rect x="40" y="26" width="20" height="34" rx="0.5" fill="#1e293b" />
        {/* Display image screen inside */}
        <rect x="42" y="28" width="16" height="26" fill="#06b6d4" opacity="0.25" />
        {/* Security key lock detail */}
        <line x1="33" y1="44" x2="36" y2="44" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        {/* Bottom vent slots */}
        <line x1="43" y1="70" x2="57" y2="70" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <line x1="43" y1="74" x2="57" y2="74" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <line x1="43" y1="78" x2="57" y2="78" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: "mounting-kits",
    title: "Mounting Kits",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-16 h-16 text-slate-600 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-600"
      >
        {/* Plate backing */}
        <rect x="25" y="25" width="50" height="50" rx="6" fill="currentColor" opacity="0.08" />
        {/* Horizontal brackets */}
        <rect x="20" y="34" width="60" height="7.5" rx="1.5" fill="currentColor" />
        <rect x="20" y="56" width="60" height="7.5" rx="1.5" fill="currentColor" />
        {/* Vertical adapter sliders */}
        <rect x="36" y="20" width="7" height="60" rx="1" fill="currentColor" opacity="0.85" />
        <rect x="57" y="20" width="7" height="60" rx="1" fill="currentColor" opacity="0.85" />
        {/* Center joint bolts */}
        <circle cx="49" cy="48" r="2.5" fill="currentColor" />
        <line x1="49" y1="48" x2="49" y2="53" stroke="currentColor" strokeWidth="2" />
        {/* VESA corner mounting hole threads */}
        <circle cx="28" cy="27" r="1.8" fill="currentColor" />
        <circle cx="72" cy="27" r="1.8" fill="currentColor" />
        <circle cx="28" cy="71" r="1.8" fill="currentColor" />
        <circle cx="72" cy="71" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
];

function Accessories() {
  return (
    <section className="py-16 bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal props={"mx-auto"} >
          <div className="text-center mb-10">
            <h2 className="title text-center text-gray-900">
              Accessories & Add-Ons
            </h2>
          </div>
        </Reveal>

        {/* Outer White Container holding the Grid */}
        <Reveal props={"w-full"} >
          <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] overflow-hidden">
            {/* Border-grid pattern using gap-px and bg-slate-100 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1px] bg-slate-100/80">
              {ACCESSORIES_LIST.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col items-center justify-between bg-white p-8 min-h-[190px] text-center transition-all duration-300 hover:bg-slate-50/50"
                >
                  {/* SVG Icon Illustration */}
                  <div className="h-24 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>

                  {/* Accessory Title */}
                  <span className="text-xs font-semibold tracking-wide text-slate-800 group-hover:text-cyan-600 transition-colors duration-200">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Accessories;