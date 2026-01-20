"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function HighlightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const achievements = [
    {
      icon: Award,
      title: "国際フードコンテスト入賞",
      description: "アジア学生料理大会で優勝、革新的なパンのコンセプトが評価されました",
      year: "2024",
      color: "primary",
    },
    {
      icon: Briefcase,
      title: "企業コラボレーション",
      description:
        "大手ベーカリーチェーンと提携し、食糧問題をテーマにした新商品を開発",
      year: "2024",
      color: "accent",
    },
    {
      icon: BookOpen,
      title: "研究論文発表",
      description:
        "「持続可能なパン生産と食糧安全保障」に関する論文を国際学会で発表",
      year: "2023",
      color: "secondary",
    },
    {
      icon: MessageSquare,
      title: "TEDxUTokyo登壇",
      description:
        "「食から変える世界」をテーマに、メンバーがスピーチを実施",
      year: "2023",
      color: "primary",
    },
    {
      icon: Calendar,
      title: "国際交流イベント",
      description:
        "12カ国から学生を招き、文化とパンをテーマにした大規模イベントを開催",
      year: "2024",
      color: "accent",
    },
    {
      icon: Sparkles,
      title: "スタートアップ起業",
      description: "メンバーが社会課題解決型のフードテックスタートアップを設立",
      year: "2024",
      color: "secondary",
    },
  ];

  const stats = [
    {
      value: "95%",
      label: "メンバー満足度",
      description: "充実した活動と成長機会",
    },
    {
      value: "30+",
      label: "パートナー企業",
      description: "業界トップ企業との連携",
    },
    {
      value: "1000+",
      label: "累計参加者",
      description: "イベント・ワークショップ",
    },
    {
      value: "85%",
      label: "就職・進学成功率",
      description: "希望進路への実現",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-24 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(240,117,23)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-accent-100 px-4 py-1 text-sm font-bold uppercase tracking-wider text-accent-600">
            実績・ハイライト
          </span>
          <h2 className="mb-6 font-display text-4xl font-bold text-gray-900 md:text-6xl">
            <span className="gradient-text">確かな成果</span>と
            <br />
            限りない可能性
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            私たちの活動は、学内に留まらず、社会に実際のインパクトを与えています
          </p>
        </motion.div>

        {/* Achievements grid */}
        <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
              >
                {/* Year badge */}
                <div className="absolute right-4 top-4 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">
                  {achievement.year}
                </div>

                {/* Icon */}
                <div
                  className={`mb-4 inline-flex rounded-full bg-${achievement.color}-100 p-3`}
                >
                  <Icon
                    className={`h-6 w-6 text-${achievement.color}-600`}
                    strokeWidth={2}
                  />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {achievement.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {achievement.description}
                </p>

                {/* Hover effect bar */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-${achievement.color}-600 to-${achievement.color}-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-12 text-white shadow-2xl md:p-16"
        >
          <h3 className="mb-12 text-center font-display text-3xl font-bold md:text-4xl">
            数字で見る私たちの成長
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 font-display text-5xl font-bold md:text-6xl">
                  {stat.value}
                </div>
                <div className="mb-1 text-lg font-bold">{stat.label}</div>
                <div className="text-sm text-primary-100">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <blockquote className="mx-auto max-w-4xl">
            <p className="mb-6 text-2xl font-medium italic leading-relaxed text-gray-700 md:text-3xl">
              「ここでは、パン作りを通じて世界を学び、仲間と共に成長し、
              <span className="gradient-text font-bold">
                自分の限界を超えることができます
              </span>
              」
            </p>
            <footer className="text-lg font-semibold text-gray-600">
              — 2024年度 代表
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
