"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="grain-texture relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary-400/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
        <motion.div
          className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 h-96 w-96 rounded-full bg-secondary-400/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="text-center"
        >
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 inline-block"
          >
            <span className="rounded-full border-2 border-primary-600 bg-white/80 px-6 py-2 text-sm font-bold uppercase tracking-wider text-primary-600 backdrop-blur-sm">
              UTokyo Bakers' Lab
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8 font-display text-6xl font-bold leading-tight md:text-8xl lg:text-9xl"
          >
            <span className="gradient-text block">世界を変える</span>
            <span className="gradient-text block">パンの力</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mx-auto mb-12 max-w-3xl text-lg font-medium leading-relaxed text-gray-700 md:text-xl"
          >
            国際関係、経済、食糧安全保障、ビジネス、マーケティング。
            <br />
            社会問題に挑戦する、新しい学びのコミュニティ。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(240, 117, 23, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="glow-effect rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:from-primary-700 hover:to-primary-800"
            >
              今すぐ参加する
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#e15a0c" }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border-2 border-primary-600 bg-white/80 px-10 py-5 text-lg font-bold text-primary-600 backdrop-blur-sm transition-all duration-300 hover:bg-primary-50"
            >
              活動を見る
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-20 grid grid-cols-3 gap-8"
          >
            {[
              { number: "150+", label: "メンバー" },
              { number: "50+", label: "イベント/年" },
              { number: "12+", label: "国からの参加" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="mb-2 font-display text-4xl font-bold text-primary-600 md:text-5xl">
                  {stat.number}
                </div>
                <div className="text-sm font-medium uppercase tracking-wide text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2, duration: 0.8 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" as const },
          }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
          aria-label="スクロールダウン"
        >
          <ArrowDown className="h-8 w-8 text-primary-600" />
        </motion.button>
      </div>
    </section>
  );
}
