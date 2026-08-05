import Link from "next/link";

function MobileApp() {
  const mobileScreen = [{ screen: 1 }, { screen: 2 }, { screen: 3 }];
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative mx-auto max-w-[260px] sm:max-w-[280px] lg:max-w-[300px] scale-85">
              <div className="relative z-10">
                <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="aspect-[9/19]">
                      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 px-6 py-3 flex justify-between items-center text-white text-xs">
                        <span className="font-semibold">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-4 bg-white/30 rounded-full"></div>
                          <div className="w-4 h-4 bg-white/30 rounded-full"></div>
                          <div className="w-4 h-4 bg-white/30 rounded-full"></div>
                        </div>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="font-bold text-sm">DispalyLab</div>
                          <div className="text-xs text-gray-500">Dashboard</div>
                        </div>
                        <div className="space-y-2">
                          {mobileScreen.map((singleScreen, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg p-3 flex items-center justify-between"
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg"></div>
                                <div>
                                  <div className="text-xs font-semibold">
                                    Screen {singleScreen?.screen}
                                  </div>
                                  <div className="text-[10px] text-gray-600">
                                    Online
                                  </div>
                                </div>
                              </div>
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl shadow-xl opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl shadow-xl opacity-80"></div>
            </div>
          </div>
          <div className="">
            <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wide mb-3">
              Manage Screens Remotely Anytime, Anywhere
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              DisplayLab
              <span className="text-cyan-600"> Mobile Admin App</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Take control of your digital signage from anywhere. Monitor screen
              status, update content, and receive instant notifications — all
              from your mobile device.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bell text-cyan-600 group-hover:text-white transition-colors"
                    aria-hidden="true"
                  >
                    <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-lg">
                  Real-time notifications
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chart-no-axes-column-increasing text-cyan-600 group-hover:text-white transition-colors"
                    aria-hidden="true"
                  >
                    <line x1="12" x2="12" y1="20" y2="10"></line>
                    <line x1="18" x2="18" y1="20" y2="4"></line>
                    <line x1="6" x2="6" y1="20" y2="16"></line>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-lg">
                  Monitor screen status
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-settings text-cyan-600 group-hover:text-white transition-colors"
                    aria-hidden="true"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-lg">
                  Remote content updates
                </span>
              </div>
            </div>
            <Link
              className="text-cyan-600 hover:text-cyan-700 font-semibold text-lg inline-flex items-center gap-2 group"
              href="#"
            >
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileApp;
