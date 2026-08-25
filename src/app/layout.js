import ScrollToTopButton from "@/components/ScrollToTopButton";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Display Lab",
    template: "%s | Display Lab",
  },
  description: "Display Lab - Your awesome Next.js website",
  keywords: ["Display Lab", "Display", "Indoor Display"],

  metadataBase: new URL("https://example.com"),

  openGraph: {
    title: "Display Lab",
    description: "Display Lab - Your awesome Next.js website",
    url: "https://example.com",
    siteName: "Display Lab",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Display Lab",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Display Lab",
    description: "Display Lab - Your awesome Next.js website",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={montserrat.className}
        suppressHydrationWarning
      >
        <ReactQueryProvider>
          {children}
          <ScrollToTopButton />
          <Toaster
            position="bottom-right"
            reverseOrder={false}
          />
        </ReactQueryProvider>
      </body>
    </html>
  );
}