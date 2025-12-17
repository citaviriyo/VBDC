import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yayasan Vihara Buddha Dharma Citaviriyo (VBDC)",
  description: "Yayasan Vihara Buddha Dharma Citaviriyo adalah lembaga keagamaan Buddhis yang menyelenggarakan kegiatan puja bakti, pendidikan Dhamma, dan pelayanan sosial bagi umat.",
  keywords: ["Vihara Buddha Dharma Citaviriyo", "Yayasan Vihara", "VBDC", "vihara buddhis", "kegiatan keagamaan Buddhis","pendidikan Dhamma", "donasi yayasan"],
  authors: [{ name: "Yayasan Vihara Buddha Dharma Citaviriyo"  }],
  icons: {
  icon: "/vbdc-logo.PNG",
},

    
  
  openGraph: {
    title: "Yayasan Vihara Buddha Dharma Citaviriyo (VBDC)",
    description: "Informasi vihara, kegiatan keagamaan Buddhis, pendidikan Dhamma, dan program pelayanan sosial Yayasan Vihara Buddha Dharma Citaviriyo.",
    url: "https://vbdc.or.id",
    siteName: "VBDC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yayasan Vihara Buddha Dharma Citaviriyo (VBDC)",
    description: "Website resmi Yayasan Vihara Buddha Dharma Citaviriyo berisi jadwal puja bakti, kegiatan vihara, dan informasi layanan umat.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
