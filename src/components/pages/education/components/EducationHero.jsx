import { ArrowRight, GraduationCap, Play } from "lucide-react";

export default function EducationHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-white py-20 lg:py-24">
      {/* Background Shapes */}
      <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-cyan-100/70"></div>
      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-slate-200/60"></div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-600">
            <GraduationCap className="h-4 w-4" />
            Education Digital Signage
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Keep every student, visitor, and staff member informed.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Share announcements, schedules, emergency alerts, campus events,
            achievements, wayfinding, and educational content across every
            screen.
          </p>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-7 py-4 font-semibold text-white transition hover:bg-sky-600"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href="#cms"
              className="inline-flex items-center gap-3 font-semibold text-slate-900"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
                <Play className="h-4 w-4 fill-current" />
              </span>
              See how it works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-slate-600">
            <span>✓ Free setup consultation</span>
            <span>✓ Multi-campus management</span>
            <span>✓ Emergency messaging ready</span>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative mx-auto h-[420px] w-full max-w-[560px] overflow-hidden rounded-2xl bg-gradient-to-b from-slate-200 to-slate-300 shadow-2xl">
          {/* Classroom */}
          <div className="flex h-2/3 items-center justify-center gap-6 bg-gradient-to-br from-slate-100 to-slate-200">
            {/* Main Screen */}
            <div className="flex h-44 w-64 flex-col justify-center border-[10px] border-slate-900 bg-gradient-to-br from-sky-700 to-cyan-500 p-5 text-white shadow-xl">
              <small className="text-[10px] font-bold tracking-[0.2em]">
                CAMPUS ANNOUNCEMENT
              </small>

              <strong className="mt-2 text-3xl font-bold leading-none">
                WELCOME
                <br />
                STUDENTS
              </strong>

              <span className="mt-4 w-fit bg-orange-500 px-3 py-1 text-xs font-bold">
                ORIENTATION 9:00 AM
              </span>
            </div>

            {/* Side Screen */}
            <div className="flex h-44 w-28 flex-col items-center justify-center border-[10px] border-slate-900 bg-gradient-to-b from-violet-600 to-indigo-700 text-center text-white shadow-xl">
              <small className="text-xs font-bold">IMPORTANT</small>

              <strong className="mt-2 text-lg font-bold leading-tight">
                EVENT
                <br />
                UPDATE
              </strong>

              <div className="mt-3 text-3xl">🔔</div>
            </div>
          </div>

          {/* Desk */}
          <div className="absolute bottom-10 left-16 right-16 h-20 rounded-lg bg-[#8c6a54] shadow-xl">
            <div className="absolute -top-6 left-20 h-6 w-16 rounded bg-yellow-400"></div>
            <div className="absolute -top-6 right-20 h-6 w-16 rounded bg-emerald-500"></div>
          </div>

          {/* Alert Card */}
          <div className="absolute left-0 top-10 -translate-x-4 rounded-lg bg-white p-4 shadow-xl">
            <span className="block text-xs text-slate-500">
              Emergency channel
            </span>

            <strong className="mt-1 flex items-center gap-2 text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Ready on 42 screens
            </strong>
          </div>

          {/* Campus Card */}
          <div className="absolute bottom-10 right-0 translate-x-4 rounded-lg bg-white p-4 shadow-xl">
            <span className="block text-xs text-slate-500">
              Connected campuses
            </span>

            <strong className="text-2xl font-bold text-green-600">6</strong>
          </div>
        </div>
      </div>
    </section>
  );
}