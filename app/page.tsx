import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UTokyo Bakers' Lab - 東京大学パン研究会",
  description: "パン屋の2024年問題を解決し、日本のパン文化を世界へ発信する学生団体",
};

export default function Home() {
  // Latest news items (would come from CMS/database in production)
  const newsItems = [
    {
      date: "2025.01.25",
      title: "国産小麦の可能性について考える - ブログ記事公開",
      slug: "domestic-wheat",
    },
    {
      date: "2025.01.20",
      title: "ZOPF様へのインタビュー実施報告",
      slug: "zopf-interview",
    },
    {
      date: "2025.01.15",
      title: "UTokyo Bakers' Lab 設立のお知らせ",
      slug: "welcome",
    },
  ];

  // Featured projects
  const projects = [
    {
      title: "パン屋の2024年問題定義委員会",
      description: "業界課題の調査・分析と、パン屋開業ノウハウ本の執筆",
    },
    {
      title: "22世紀のパンを考える会",
      description: "日本のパン文化を世界へ発信する国際交流プログラム",
    },
    {
      title: "麦フェス運営プロジェクト",
      description: "NPO法人新麦コレクションと共に開催する大規模イベント",
    },
  ];

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero / Intro Section */}
        <section className="border-b border-brown-300 bg-white py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Photo Cluster - Left on Desktop */}
              <div className="flex w-full items-center justify-center">
                <div className="relative w-full">
                  <div className="grid w-full max-w-md grid-cols-2 gap-3">
                    <div className="space-y-3 translate-y-4 md:translate-y-6">
                      <div className="relative h-40 w-full overflow-hidden rounded-xl bg-brown-200">
                        <Image
                          src="/images/burger.jpeg"
                          alt="Workshop scene"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 45vw, 20vw"
                          priority
                        />
                      </div>
                      <div className="relative h-40 w-full overflow-hidden rounded-xl bg-brown-200">
                        <Image
                          src="/images/momentum.jpeg"
                          alt="パン作りの現場"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 45vw, 20vw"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="relative h-40 w-full overflow-hidden rounded-xl bg-brown-200">
                        <Image
                          src="/images/prologue.jpeg"
                          alt="小麦の収穫"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 45vw, 20vw"
                        />
                      </div>
                      <div className="relative h-40 w-full overflow-hidden rounded-xl bg-brown-200">
                        <Image
                          src="/images/zopfikeda.jpeg"
                          alt="パン屋訪問"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 45vw, 20vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Area - Right on Desktop */}
              <div className="flex flex-col justify-center">
                <h1 className="mb-6 font-display text-3xl font-bold leading-tight text-brown-900 md:text-4xl lg:text-[2.75rem]">
                  Redefine food culture,
                  <br />
                  centered on bakeries.
                </h1>

                <div className="mb-6 space-y-3 text-brown-800">
                  <p>
                    UTokyo Bakers'
                    Labは、東京大学の学生を中心とした研究団体です。
                  </p>
                  <p>
                    「パン屋の2024年問題」を解決し、日本のパン文化を世界へ発信することを目的として、2025年冬に設立されました。
                  </p>
                  <p>
                    現場主義を貫き、パン屋さんへの訪問や業界関係者へのインタビューを通じて、業界の課題に向き合っています。
                  </p>
                </div>

                <div className="mb-8">
                  <Link
                    href="/about"
                    className="text-brown-600 underline"
                  >
                    UTokyo Bakers' Labとは？
                  </Link>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 gap-4 border-t border-brown-300 pt-6 sm:grid-cols-3">
                  <div>
                    <div className="mb-1 font-display text-2xl font-bold text-brown-900">
                      2025
                    </div>
                    <div className="text-sm text-brown-700">
                      We have started.
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 font-display text-2xl font-bold text-brown-900">
                      10+
                    </div>
                    <div className="text-sm text-brown-700">
                      Bakeries visited.
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 font-display text-2xl font-bold text-brown-900">
                      3
                    </div>
                    <div className="text-sm text-brown-700">
                      Major projects.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="border-b border-brown-300 bg-beige-50 py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-6 md:px-8">
            <h2 className="mb-8 font-display text-2xl font-bold text-brown-900 md:text-3xl">
              NEWS
            </h2>

            <div className="space-y-0">
              {newsItems.map((item, index) => (
                <article
                  key={item.slug}
                  className={`py-4 ${index !== newsItems.length - 1
                    ? "border-b border-brown-300"
                    : ""
                    }`}
                >
                  <Link
                    href={`/blog/${item.slug}`}
                    className="block text-brown-800"
                  >
                    <time className="mb-2 block text-sm text-brown-600">
                      {item.date}
                    </time>
                    <h3 className="text-brown-900">{item.title}</h3>
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/blog"
                className="text-brown-600 underline"
              >
                NEWS一覧へ →
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="border-b border-brown-300 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-6 md:px-8">
            <h2 className="mb-8 font-display text-2xl font-bold text-brown-900 md:text-3xl">
              PROJECTS
            </h2>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <article
                  key={index}
                  className={`${index !== projects.length - 1
                    ? "border-b border-brown-300 pb-8"
                    : ""
                    }`}
                >
                  <h3 className="mb-2 font-display text-xl font-semibold text-brown-900">
                    {project.title}
                  </h3>
                  <p className="text-brown-800">{project.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/about#activities"
                className="text-brown-600 underline"
              >
                プロジェクト一覧へ →
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-beige-50 py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
            <h2 className="mb-4 font-display text-2xl font-bold text-brown-900 md:text-3xl">
              参加をご希望の方へ
            </h2>
            <p className="mb-8 text-brown-800">
              通常活動は週一回程度、パン屋さんへの訪問やミーティングを行っています。
              <br />
              ご興味のある方は、お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-block border-2 border-brown-600 px-8 py-3 font-medium text-brown-900"
            >
              お問い合わせ
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
