"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, TrendingUp, Users, Heart } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const pillars = [
    {
      icon: Globe,
      title: "グローバル視点",
      description:
        "世界の食糧問題、国際経済、文化交流を通じて、グローバルな視野を育みます。",
      color: "primary",
    },
    {
      icon: TrendingUp,
      title: "ビジネス思考",
      description:
        "マーケティング、経営戦略、イノベーションを実践的に学び、未来を創造します。",
      color: "accent",
    },
    {
      icon: Users,
      title: "コミュニティ",
      description:
        "多様なバックグラウンドを持つ仲間と共に学び、成長し、深い絆を築きます。",
      color: "secondary",
    },
    {
      icon: Heart,
      title: "社会貢献",
      description:
        "食糧安全保障や持続可能性など、世界の課題に真摯に向き合い行動します。",
      color: "primary",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary-100/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block rounded-full bg-primary-100 px-4 py-1 text-sm font-bold uppercase tracking-wider text-primary-600">
              私たちについて
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="mb-6 font-display text-4xl font-bold text-gray-900 md:text-6xl"
          >
            パンから始まる
            <span className="gradient-text block">世界への挑戦</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-16 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            東大パン研究会は、単なる料理サークルではありません。
            私たちは「パン」という普遍的な食べ物を通じて、国際関係、経済学、食糧安全保障、ビジネス、マーケティングを学び、
            社会問題の解決に挑戦する、革新的なコミュニティです。
          </motion.p>

          {/* Pillars Grid */}
          <motion.div
            variants={containerVariants}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                >
                  {/* Icon */}
                  <div
                    className={`mb-6 inline-flex rounded-full bg-${pillar.color}-100 p-4 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon
                      className={`h-8 w-8 text-${pillar.color}-600`}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-600">
                    {pillar.description}
                  </p>

                  {/* Decorative element */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-full rounded-b-2xl bg-gradient-to-r from-${pillar.color}-600 to-${pillar.color}-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mission statement */}
          <motion.div
            variants={itemVariants}
            className="mt-20 rounded-3xl bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 p-12 md:p-16"
          >
            <h3 className="mb-6 font-display text-3xl font-bold text-gray-900 md:text-4xl">
              私たちのミッション
            </h3>
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-700 md:text-xl">
              パンという身近な食べ物を起点に、グローバルな視点で社会課題を探求し、
              ビジネスとマーケティングの力で実践的な解決策を見出す。
              そして、志を同じくする仲間と共に、自己成長と社会貢献を両立させる。
              それが、東大パン研究会の使命です。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
