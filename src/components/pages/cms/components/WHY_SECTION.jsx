import Button from "@/components/ui/button";
function WHY_SECTION() {
  const featureSections = [
    {
      columns: 2,
      items: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file-video text-cyan-600 text-2xl md:text-4xl"
              aria-hidden="true"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="m10 11 5 3-5 3v-6Z"></path>
            </svg>
          ),
          title: "Use Your Files",
          description:
            "Upload and display any file format - images, videos, PDFs, and more.",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-puzzle text-cyan-600"
              aria-hidden="true"
            >
              <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
            </svg>
          ),
          title: "Apps & Integrations",
          description: "Connect with your favorite tools and apps seamlessly.",
        },
      ],
    },
    {
      columns: 1,
      items: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-list text-cyan-600"
              aria-hidden="true"
            >
              <path d="M3 12h.01"></path>
              <path d="M3 18h.01"></path>
              <path d="M3 6h.01"></path>
              <path d="M8 12h13"></path>
              <path d="M8 18h13"></path>
              <path d="M8 6h13"></path>
            </svg>
          ),
          title: "Playlists",
          description:
            "Create and schedule dynamic playlists for automated content rotation.",
        },
      ],
    },
    {
      columns: 2,
      items: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-clock text-cyan-600"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          ),
          title: "Schedule Your Content",
          description:
            "Set exact times and dates for your content to display automatically.",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-smartphone text-cyan-600"
              aria-hidden="true"
            >
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
              <path d="M12 18h.01"></path>
            </svg>
          ),
          title: "Orientation",
          description:
            "Support for portrait, landscape, and custom screen orientations.",
        },
      ],
    },
    {
      columns: 1,
      items: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-grid3x3 lucide-grid-3x3 text-cyan-600"
              aria-hidden="true"
            >
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M3 9h18"></path>
              <path d="M3 15h18"></path>
              <path d="M9 3v18"></path>
              <path d="M15 3v18"></path>
            </svg>
          ),
          title: "Screen Zones",
          description:
            "Divide your screen into multiple zones for different content.",
        },
      ],
    },
    {
      columns: 2,
      items: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-wifi text-cyan-600"
              aria-hidden="true"
            >
              <path d="M12 20h.01"></path>
              <path d="M2 8.82a15 15 0 0 1 20 0"></path>
              <path d="M5 12.859a10 10 0 0 1 14 0"></path>
              <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
            </svg>
          ),
          title: "Work Offline",
          description:
            "Your content keeps playing even when the internet goes down.",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-rotate-ccw text-cyan-600"
              aria-hidden="true"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path>
            </svg>
          ),
          title: "Online Editor",
          description:
            "Design stunning content directly in your browser with our intuitive editor.",
        },
      ],
    },
    {
      columns: 1,
      items: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-users text-cyan-600"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
          ),
          title: "Multi-User Permission",
          description: "Control team access with granular permission settings.",
        },
      ],
    },
    {
      columns: 2,
      items: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chart-column text-cyan-600"
              aria-hidden="true"
            >
              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
          ),
          title: "Analytics & Reporting",
          description:
            "Track performance and engagement with detailed analytics.",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lock text-cyan-600"
              aria-hidden="true"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          ),
          title: "Kiosk Mode",
          description: "Lock down screens for secure, public-facing displays.",
        },
      ],
    },
    {
      columns: 1,
      items: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-cpu text-cyan-600"
              aria-hidden="true"
            >
              <path d="M12 20v2"></path>
              <path d="M12 2v2"></path>
              <path d="M17 20v2"></path>
              <path d="M17 2v2"></path>
              <path d="M2 12h2"></path>
              <path d="M2 17h2"></path>
              <path d="M2 7h2"></path>
              <path d="M20 12h2"></path>
              <path d="M20 17h2"></path>
              <path d="M20 7h2"></path>
              <path d="M7 20v2"></path>
              <path d="M7 2v2"></path>
              <rect x="4" y="4" width="16" height="16" rx="2"></rect>
              <rect x="8" y="8" width="8" height="8" rx="1"></rect>
            </svg>
          ),
          title: "Sensors & AI",
          description:
            "Smart content triggered by sensors and AI-powered insights.",
        },
      ],
    },
    {
      columns: 2,
      items: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file-text text-cyan-600"
              aria-hidden="true"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
          ),
          title: "Templates",
          description:
            "Professional templates to get started quickly and easily.",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-hard-drive text-cyan-600"
              aria-hidden="true"
            >
              <line x1="22" x2="2" y1="12" y2="12"></line>
              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
              <line x1="6" x2="6.01" y1="16" y2="16"></line>
              <line x1="10" x2="10.01" y1="16" y2="16"></line>
            </svg>
          ),
          title: "Hardware Agnostic",
          description: "Works with any display hardware - no vendor lock-in.",
        },
      ],
    },
  ];
  const contents1 = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-file-video text-cyan-600 text-2xl md:text-4xl"
          aria-hidden="true"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="m10 11 5 3-5 3v-6Z"></path>
        </svg>
      ),
      title: "Use Your Files",
      description:
        "Upload and display any file format - images, videos, PDFs, and more.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-puzzle text-cyan-600"
          aria-hidden="true"
        >
          <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
        </svg>
      ),
      title: "Apps & Integrations",
      description: "Connect with your favorite tools and apps seamlessly.",
    },
  ];
  const contents2 = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-list text-cyan-600"
          aria-hidden="true"
        >
          <path d="M3 12h.01"></path>
          <path d="M3 18h.01"></path>
          <path d="M3 6h.01"></path>
          <path d="M8 12h13"></path>
          <path d="M8 18h13"></path>
          <path d="M8 6h13"></path>
        </svg>
      ),
      title: "Playlists",
      description:
        "Create and schedule dynamic playlists for automated content rotation.",
    },
  ];
  const contents3 = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-clock text-cyan-600"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Schedule Your Content",
      description:
        "Set exact times and dates for your content to display automatically.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-smartphone text-cyan-600"
          aria-hidden="true"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
          <path d="M12 18h.01"></path>
        </svg>
      ),
      title: "Orientation",
      description:
        "Support for portrait, landscape, and custom screen orientations.",
    },
  ];
  const contents4 = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-grid3x3 lucide-grid-3x3 text-cyan-600"
          aria-hidden="true"
        >
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M3 9h18"></path>
          <path d="M3 15h18"></path>
          <path d="M9 3v18"></path>
          <path d="M15 3v18"></path>
        </svg>
      ),
      title: "Screen Zones",
      description:
        "Divide your screen into multiple zones for different content.",
    },
  ];
  const contents5 = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-wifi text-cyan-600"
          aria-hidden="true"
        >
          <path d="M12 20h.01"></path>
          <path d="M2 8.82a15 15 0 0 1 20 0"></path>
          <path d="M5 12.859a10 10 0 0 1 14 0"></path>
          <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
        </svg>
      ),
      title: "Work Offline",
      description:
        "Your content keeps playing even when the internet goes down.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-rotate-ccw text-cyan-600"
          aria-hidden="true"
        >
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
          <path d="M3 3v5h5"></path>
        </svg>
      ),
      title: "Online Editor",
      description:
        "Design stunning content directly in your browser with our intuitive editor.",
    },
  ];
  const contents6 = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-users text-cyan-600"
          aria-hidden="true"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <circle cx="9" cy="7" r="4"></circle>
        </svg>
      ),
      title: "Multi-User Permission",
      description: "Control team access with granular permission settings.",
    },
  ];
  const content7 = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chart-column text-cyan-600"
          aria-hidden="true"
        >
          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
          <path d="M18 17V9"></path>
          <path d="M13 17V5"></path>
          <path d="M8 17v-3"></path>
        </svg>
      ),
      title: "Analytics & Reporting",
      description: "Track performance and engagement with detailed analytics.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-lock text-cyan-600"
          aria-hidden="true"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      title: "Kiosk Mode",
      description: "Lock down screens for secure, public-facing displays.",
    },
  ];

  const contents8 = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-cpu text-cyan-600"
          aria-hidden="true"
        >
          <path d="M12 20v2"></path>
          <path d="M12 2v2"></path>
          <path d="M17 20v2"></path>
          <path d="M17 2v2"></path>
          <path d="M2 12h2"></path>
          <path d="M2 17h2"></path>
          <path d="M2 7h2"></path>
          <path d="M20 12h2"></path>
          <path d="M20 17h2"></path>
          <path d="M20 7h2"></path>
          <path d="M7 20v2"></path>
          <path d="M7 2v2"></path>
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <rect x="8" y="8" width="8" height="8" rx="1"></rect>
        </svg>
      ),
      title: "Sensors & AI",
      description:
        "Smart content triggered by sensors and AI-powered insights.",
    },
  ];
  const contents9 = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-file-text text-cyan-600"
          aria-hidden="true"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
        </svg>
      ),
      title: "Templates",
      description: "Professional templates to get started quickly and easily.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-hard-drive text-cyan-600"
          aria-hidden="true"
        >
          <line x1="22" x2="2" y1="12" y2="12"></line>
          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
          <line x1="6" x2="6.01" y1="16" y2="16"></line>
          <line x1="10" x2="10.01" y1="16" y2="16"></line>
        </svg>
      ),
      title: "Hardware Agnostic",
      description: "Works with any display hardware - no vendor lock-in.",
    },
  ];
  return (
    <>
      <div className="space-large"></div>
      <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {featureSections.map((singleFeature, index) => (
          <div
            className={`${singleFeature?.columns === 2 ? "grid_two_col" : "grid_one_col"}`}
            key={index}
          >
            {singleFeature?.items?.map((singleContent, contentIndex) => (
              <div className="w-[280px] flex flex-col items-center text-center" key={contentIndex}>
                <div className="section_sub_sub_icon">{singleContent?.icon}</div>
                <h3 className="section_sub_sub_title">{singleContent?.title}</h3>
                <p className="section_sub_sub_desc">{singleContent?.description}</p>
              </div>
            ))}
          </div>
        ))}
        <div className="flex justify-center items-center">
          <Button className={"my-10"} btnName={"Get Started"} route={"/cms"} />
        </div>
      </div>
      </section>
    </>
  );
}

export default WHY_SECTION;
