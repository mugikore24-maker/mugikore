export const SITE_CONFIG = {
  name: "UTokyo Bakers' Lab",
  description: "東京大学のパン作り・お菓子作りサークル",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "",
    github: "https://github.com/mugikore24-maker/mugikore",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "私たちについて" },
  { href: "/activities", label: "活動内容" },
  { href: "/members", label: "メンバー" },
  { href: "/contact", label: "お問い合わせ" },
] as const;
