import { Zen_Maru_Gothic, Open_Sans } from "next/font/google";

// Japanese font - Zen Maru Gothic
export const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-maru-gothic",
});

// English font - Open Sans
export const openSans = Open_Sans({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

// Export a combined className for use in layouts
export const fonts = `${zenMaruGothic.variable} ${openSans.variable}`;
