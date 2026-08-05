export default function EducationContact() {
  return (
    <section id="contact" className="pb-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col justify-between gap-10 rounded-3xl bg-gradient-to-br from-slate-900 to-sky-800 px-8 py-12 text-white lg:flex-row lg:items-center lg:px-14 lg:py-16">
          {/* Left Content */}
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
              Ready to Modernize Campus Communication?
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              Build a connected education signage network.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Get a free setup consultation and a digital signage plan designed
              around your schools, campuses, and communication goals.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex w-full flex-col gap-4 lg:w-auto">
            <a
              href="mailto:sales@displaylab.net"
              className="rounded-lg bg-white px-8 py-4 text-center font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Book a Free Consultation
            </a>

            <a
              href="tel:+17035550199"
              className="rounded-lg border border-white/40 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}