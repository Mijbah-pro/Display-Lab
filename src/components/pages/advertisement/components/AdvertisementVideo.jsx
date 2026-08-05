import Reveal from "@/components/utils/Reveal";

const AdvertisementVideo = () => {
  const features = [
    "Image and video advertising",
    "Portrait and landscape formats",
    "QR codes and promotional calls to action",
    "Scheduled playback across selected locations",
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal props={"w-full"} >
          {/* Left Content */}
          <div>
            <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-600">
              ADVERTISING VIDEO EXPERIENCE
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Use motion content to capture attention and drive action.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Run branded video, product demonstrations, promotions, sponsor
              messages, and QR campaigns across the Display Lab network.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-600">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          </Reveal>
          <Reveal props={"w-full"} >
          {/* Video */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">
              <span className="text-sm font-bold uppercase tracking-wider text-cyan-600">
                DISPLAY LAB ADVERTISING
              </span>

              <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                LIVE
              </span>
            </div>

            {/* Video */}
            <div className="relative">
              <video
                controls
                playsInline
                className="aspect-video w-full bg-black"
                poster="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85"
              >
                <source
                  src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
                  type="video/mp4"
                />
                Your browser does not support video playback.
              </video>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AdvertisementVideo;