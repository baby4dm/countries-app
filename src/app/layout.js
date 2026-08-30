import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-nunito",
});

export const metadata = {
  title: {
    default: "Where in the world?",
    template: "%s | Where in the world?",
  },
  description: "REST Countries API app with color theme switcher",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col gap-8">
        <ThemeProvider>
          <Header />
          <main> {children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
