import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UTokyo Bakers' Lab — English",
  description:
    "UTokyo student collective redefining Japanese food culture through bakeries and domestic wheat.",
};

export default function HomeEN() {
  const newsItems = [
    {
      date: "2025.01.25",
      title: "Exploring the Potential of Domestic Wheat",
      slug: "domestic-wheat",
    },
    {
      date: "2025.01.20",
      title: "Interview with ZOPF: Field Notes",
      slug: "zopf-interview",
    },
    {
      date: "2025.01.15",
      title: "UTokyo Bakers' Lab Launch",
      slug: "welcome",
    },
  ];

  const projects = [
    {
      title: "Defining the Bakery 2024 Problem",
      description:
        "Researching industry challenges and authoring a practical guidebook for aspiring bakery founders.",
    },
    {
      title: "22nd-Century Bread Culture",
      description:
        "International exchange programs to share Japanese bread culture with the world.",
    },
    {
      title: "Mugi Fes with Shinmugi Collection",
      description:
        "Co-hosting a large-scale festival celebrating domestic wheat and the people behind it.",
    },
  ];

  const values = [
    {
      title: "Field-First Research",
      description:
        "Weekly bakery visits and interviews keep us close to the realities of the industry.",
    },
    {
      title: "Dialogue with Wheat",
      description:
        "We listen to the character of each harvest and region, embracing diversity over uniformity.",
    },
    {
      title: "Global & Local",
      description:
        "We bridge Tokyo with the world—sharing techniques, stories, and culture across borders.",
    },
  ];

  return (
    <div className="min-h-screen bg-beige-50">
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-beige-50 via-white to-brown-50 py-14 md:py-20 lg:py-24">
          <div className="pointer-events-none absolute -left-10 -top-20 h-64 w-64 rounded-full bg-brown-200/30 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brown-300/20 blur-3xl" />

          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr,1fr]">
              <div className="space-y-6">
                <p className="inline-flex items-center rounded-full border border-brown-200 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.15em] text-brown-700">
                  ENGLISH
                </p>
                <h1 className="font-display text-4xl font-bold leading-tight text-brown-900 md:text-5xl lg:text-6xl">
                  Redefining food culture,
                  <br />
                  centered on bakeries.
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-brown-800">
                  UTokyo Bakers&apos; Lab is a student collective founded in winter
                  2025 to solve Japan&apos;s &quot;Bakery 2024 Problem&quot; and share
                  the richness of bread culture with the world.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/about/en"
                    className="rounded-full bg-brown-900 px-6 py-3 text-sm font-semibold text-beige-50 transition hover:-translate-y-0.5 hover:bg-brown-800"
                  >
                    Learn more about us
                  </Link>
                  <Link
                    href="/contact/en"
                    className="rounded-full border-2 border-brown-700 px-6 py-3 text-sm font-semibold text-brown-900 transition hover:-translate-y-0.5 hover:bg-brown-50"
                  >
                    Partner with us
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4 rounded-2xl border border-brown-200 bg-white/70 p-4 backdrop-blur">
                  <div>
                    <div className="font-display text-3xl font-bold text-brown-900">
                      2025
                    </div>
                    <div className="text-sm text-brown-700">Founded</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-brown-900">
                      10+
                    </div>
                    <div className="text-sm text-brown-700">Bakeries visited</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-brown-900">
                      3
                    </div>
                    <div className="text-sm text-brown-700">Flagship projects</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 -top-8 h-16 w-16 rounded-full bg-brown-200/60 blur-xl" />
                <div className="absolute -right-6 -bottom-10 h-24 w-24 rounded-full bg-brown-300/50 blur-2xl" />
                <div className="relative grid max-w-xl grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative h-40 w-full overflow-hidden rounded-xl border border-brown-200 bg-brown-100 shadow-md">
                      <Image
                        src="/images/burger.jpeg"
                        alt="Workshop scene"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 45vw, 20vw"
                        priority
                      />
                    </div>
                    <div className="relative h-40 w-full overflow-hidden rounded-xl border border-brown-200 bg-brown-100 shadow-md">
                      <Image
                        src="/images/momentum.jpeg"
                        alt="Baker at work"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 45vw, 20vw"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="relative h-40 w-full overflow-hidden rounded-xl border border-brown-200 bg-brown-100 shadow-md">
                      <Image
                        src="/images/prologue.jpeg"
                        alt="Domestic wheat harvest"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 45vw, 20vw"
                      />
                    </div>
                    <div className="relative h-40 w-full overflow-hidden rounded-xl border border-brown-200 bg-brown-100 shadow-md">
                      <Image
                        src="/images/zopfikeda.jpeg"
                        alt="Field research visit"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 45vw, 20vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-brown-300 bg-white py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-brown-600">
                  LATEST
                </p>
                <h2 className="font-display text-3xl font-bold text-brown-900 md:text-4xl">
                  News & Field Notes
                </h2>
              </div>
              <Link href="/blog" className="text-brown-600 underline">
                View all news →
              </Link>
            </div>

            <div className="mt-8 space-y-0">
              {newsItems.map((item, index) => (
                <article
                  key={item.slug}
                  className={`py-4 ${
                    index !== newsItems.length - 1
                      ? "border-b border-brown-300"
                      : ""
                  }`}
                >
                  <Link
                    href={`/blog/${item.slug}`}
                    className="block text-brown-800"
                  >
                    <time className="mb-1 block text-sm uppercase tracking-[0.15em] text-brown-600">
                      {item.date}
                    </time>
                    <h3 className="text-lg font-semibold text-brown-900">
                      {item.title}
                    </h3>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-brown-300 bg-beige-50 py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-brown-600">
              WHAT WE DO
            </p>
            <h2 className="mb-8 font-display text-3xl font-bold text-brown-900 md:text-4xl">
              Projects in motion
            </h2>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={`rounded-2xl border border-brown-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                    index !== projects.length - 1 ? "md:mb-2" : ""
                  }`}
                >
                  <h3 className="mb-2 font-display text-2xl font-semibold text-brown-900">
                    {project.title}
                  </h3>
                  <p className="text-brown-800">{project.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/about/en#activities"
                className="text-brown-600 underline"
              >
                Explore our activities →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-brown-600">
              HOW WE WORK
            </p>
            <h2 className="mb-8 font-display text-3xl font-bold text-brown-900 md:text-4xl">
              Our approach
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-brown-200 bg-beige-50 p-6 transition hover:-translate-y-1 hover:shadow-sm"
                >
                  <h3 className="mb-2 text-xl font-semibold text-brown-900">
                    {value.title}
                  </h3>
                  <p className="text-brown-800">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brown-900 py-14 text-beige-50 md:py-20">
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-brown-200">
                  JOIN US
                </p>
                <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
                  Build the next era of bread with us.
                </h2>
                <p className="text-lg text-brown-100">
                  We meet every week at Komaba Campus. Reach out if
                  you want to collaborate, research with us, or simply love bread.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact/en"
                    className="rounded-full bg-beige-50 px-6 py-3 text-sm font-semibold text-brown-900 transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Contact us
                  </Link>
                  <Link
                    href="/blog"
                    className="rounded-full border-2 border-beige-200 px-6 py-3 text-sm font-semibold text-beige-50 transition hover:-translate-y-0.5 hover:bg-brown-800"
                  >
                    See our latest updates
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-brown-700 bg-brown-800/60 p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-beige-50">
                  Quick facts
                </h3>
                <ul className="space-y-3 text-brown-100">
                  <li>
                    Weekly field visits to bakeries, millers, and distributors.
                  </li>
                  <li>Collaborations with NPO Shinmugi Collection.</li>
                  <li>Workstreams: research, publishing, events, and exchange.</li>
                  <li>Open to partners, mentors, and curious learners.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
