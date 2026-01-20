"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { teamMembers } from "@/lib/data/team";

export default function MembersPageEN() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="grain-texture relative overflow-hidden bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1 text-sm font-bold uppercase tracking-wider text-primary-700">
              Our Team
            </span>
            <h1 className="mb-6 font-display text-5xl font-bold text-primary-900 md:text-7xl">
              Meet Our Team
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-primary-800">
              Passionate about bread and Japanese food culture,
              <br />
              companions with diverse backgrounds
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/members"
                className="rounded-full border-2 border-primary-700 bg-white px-6 py-2 text-sm font-bold text-primary-700 transition-colors hover:bg-primary-50"
              >
                日本語
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { number: `${teamMembers.length}+`, label: "Members" },
              { number: "3", label: "Projects" },
              { number: "10+", label: "Departments" },
              { number: "2025", label: "Founded" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 font-display text-4xl font-bold text-primary-900 md:text-5xl">
              We're Recruiting Members
            </h2>
            <p className="mb-8 text-xl text-primary-800">
              No experience required. If you're interested in bread and food culture
              <br />
              and passionate about tackling social issues, you're welcome
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact/en"
                  className="block rounded-full bg-primary-700 px-8 py-4 font-bold text-primary-900 shadow-lg transition-colors hover:bg-primary-800"
                >
                  Join Us
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about/en"
                  className="block rounded-full border-2 border-primary-700 bg-white px-8 py-4 font-bold text-primary-700 backdrop-blur-sm transition-all duration-300 hover:border-primary-800 hover:bg-primary-50"
                >
                  Learn More About Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-primary-900">
              Follow Our Latest Activities
            </h3>
            <p className="mb-6 text-primary-700">
              Regular updates on bakery visits and event information
            </p>
            <motion.a
              href="https://www.instagram.com/mugip_roject/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 font-bold text-white shadow-lg transition-shadow hover:shadow-xl"
            >
              Follow on Instagram
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
