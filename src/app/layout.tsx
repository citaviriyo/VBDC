import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ScrollReveal from '@/components/ui/ScrollReveal'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "ReligiousOrganization",
  "@id": "https://vbdc.or.id/#organization",
  name: "Vihara Buddha Dharma Citaviriyo",
  url: "https://vbdc.or.id",
  logo: "https://vbdc.or.id/vbdc-logo.PNG",
  description: "Vihara Buddha Dharma Citaviriyo adalah tempat ibadah dan pembelajaran Dhamma.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Komplek Toho Blok N1 & N3",
    addressLocality: "Jakarta Utara",
    addressRegion: "Jakarta",
    postalCode: "14470",
    addressCountry: "ID",
  },
  areaServed: "Indonesia",
  telephone: "+6281287866663",
  email: "info@vbdc.or.id",
};

export const metadata: Metadata = {
  title: "Yayasan Buddha Dharma Citaviriyo (VBDC) - Jakarta",
  description:
    "Informasi vihara, kegiatan keagamaan Buddhis, pendidikan Dhamma, dan program pelayanan sosial di Jakarta.",

  openGraph: {
    title: "Yayasan Buddha Dharma Citaviriyo (VBDC)",
    description:
      "Tempat ibadah, pembelajaran Dhamma, dan kegiatan sosial di Jakarta.",
    url: "https://vbdc.or.id",
    siteName: "VBDC",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://vbdc.or.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vihara Buddha Dharma Citaviriyo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vihara Buddha Dharma Citaviriyo",
    description: "Tempat ibadah dan pembelajaran Dhamma di Jakarta.",
    images: ["https://vbdc.or.id/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <ScrollReveal />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
