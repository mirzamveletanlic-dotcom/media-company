export const siteConfig = {
  brand: "[BRAND]",
  legalName: "[BRAND] Media LLC",
  city: "[CITY]",
  region: "[REGION]",
  address: {
    streetAddress: "123 Main Street",
    addressLocality: "[CITY]",
    addressRegion: "ST",
    postalCode: "00000",
  },
  phone: "(555) 000-0000",
  phoneHref: "tel:+15550000000",
  email: "hello@example.com",
  emailHref: "mailto:hello@example.com",
  townsServed: [
    { name: "[Town 1]", href: "/areas/town-1" },
    { name: "[Town 2]", href: "/areas/town-2" },
    { name: "[Town 3]", href: "/areas/town-3" },
    { name: "[Town 4]", href: "/areas/town-4" },
  ],
} as const;

export function formatAddress(): string {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    siteConfig.address;
  return `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`;
}
