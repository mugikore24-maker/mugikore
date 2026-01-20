"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Instagram, Twitter } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const benefits = [
    "グローバルな視点と実践的なビジネススキルの習得",
    "国際的なネットワークと生涯の仲間",
    "企業連携や研究発表など、キャリアに直結する経験",
    "社会課題解決への実践的なアプローチ",
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
  ];

  return (
    <section className="grain-texture relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-24 text-white md:py-32">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 inline-block rounded-full border-2 border-white/30 bg-white/10 px-4 py-1 text-sm font-bold uppercase tracking-wider backdrop-blur-sm"
            >
              今すぐ参加
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 font-display text-4xl font-bold leading-tight md:text-6xl"
            >
              あなたの未来を
              <br />
              ここから始めよう
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 text-lg leading-relaxed text-primary-50 md:text-xl"
            >
              東大パン研究会は、志を持つすべての学生を歓迎します。
              経験は問いません。必要なのは、学びたいという情熱と、
              世界を変えたいという想いだけです。
            </motion.p>

            {/* Benefits list */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-10 space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <span className="text-primary-50">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-primary-600 shadow-2xl transition-all duration-300 hover:bg-primary-50"
              >
                入会フォームへ
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-white/50 bg-white/10 px-8 py-4 text-lg font-bold backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/20"
              >
                資料をダウンロード
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 flex items-center gap-4"
            >
              <span className="text-sm font-medium text-primary-200">
                フォローする:
              </span>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors duration-300 hover:bg-white/30"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Card stack effect */}
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-6 -top-6 h-64 w-full rounded-2xl bg-white/10 backdrop-blur-sm"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [2, -2, 2],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 -bottom-6 h-64 w-full rounded-2xl bg-white/10 backdrop-blur-sm"
              />
              <div className="relative rounded-2xl border-2 border-white/30 bg-white/20 p-8 backdrop-blur-md">
                <h3 className="mb-6 text-2xl font-bold">
                  新入生説明会 開催中
                </h3>
                <div className="space-y-4 text-primary-50">
                  <div className="flex items-center justify-between border-b border-white/20 pb-4">
                    <span className="font-medium">日時</span>
                    <span className="text-right">毎週金曜 18:00-19:30</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/20 pb-4">
                    <span className="font-medium">場所</span>
                    <span className="text-right">本郷キャンパス</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">参加費</span>
                    <span className="text-right font-bold">無料</span>
                  </div>
                </div>
                <div className="mt-8 rounded-xl bg-white/20 p-4 text-center backdrop-blur-sm">
                  <p className="text-sm font-bold">
                    🎉 2025年度 新入生募集中
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
