/** Locale-aware footer links */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const segments = pathname?.split("/").filter(Boolean) ?? [];
  const isEnglish = segments.includes("en");
  const pathFor = (href: string, enHref?: string) =>
    isEnglish && enHref ? enHref : href;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary-600">
              UTokyo Bakers' Lab
            </h3>
            <p className="text-sm text-gray-600">
              東京大学パン研究会は、パンを通じて社会問題に挑戦する学生サークルです。
            </p>
          </div>

          <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-800">
                リンク
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href={pathFor("/about", "/about/en")}
                    className="text-gray-600 hover:text-primary-600"
                  >
                    私たちについて
                  </Link>
                </li>
                <li>
                  <Link
                    href={pathFor("/about#activities", "/about/en#activities")}
                    className="text-gray-600 hover:text-primary-600"
                  >
                    活動内容
                  </Link>
                </li>
                <li>
                  <Link
                    href={pathFor("/contact", "/contact/en")}
                    className="text-gray-600 hover:text-primary-600"
                  >
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link
                    href={pathFor("/privacy", "/privacy/en")}
                    className="text-gray-600 hover:text-primary-600"
                  >
                    個人情報保護方針
                  </Link>
                </li>
              </ul>
            </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              お問い合わせ
            </h3>
            <p className="text-sm text-gray-600">
              ご質問やご相談は
              <Link
                href={pathFor("/contact", "/contact/en")}
                className="text-primary-600 hover:underline"
              >
                お問い合わせ
              </Link>
              ページからどうぞ
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>
            &copy; {currentYear} UTokyo Bakers' Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
