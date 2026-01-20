"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  BookOpen,
  Globe,
  Calendar,
  MapPin,
  Clock,
  Users,
  Target,
  Heart,
  TrendingUp,
} from "lucide-react";
import Timeline from "@/components/ui/Timeline";
import { timeline, projects } from "@/lib/data/team";

export default function AboutPageEN() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const coreValues = [
    {
      icon: Target,
      title: "On-Site Focus",
      description:
        "We don't stop at theory. We visit actual bakeries and value hearing from the field.",
    },
    {
      icon: Heart,
      title: "Passion & Integrity",
      description:
        "We hold deep love for bread and Japanese food culture, and face it with sincerity.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "As a newly-born organization, we create our culture together with all members.",
    },
    {
      icon: TrendingUp,
      title: "Long-term Vision",
      description:
        "To create culture that will last 100 years, we pursue long-term value over short-term gain.",
    },
  ];

  const benefits = [
    "Learn from actual bakeries in the field",
    "Participate in practical projects like book publishing and event management",
    "Deep learning environment about domestic wheat and food culture",
    "International opportunities like France training programs",
    "Meet companions with diverse backgrounds",
    "Real experience tackling social issues",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="grain-texture relative overflow-hidden bg-gradient-to-br from-brown-50 via-white to-beige-100 py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-brown-100 px-4 py-1 text-sm font-bold uppercase tracking-wider text-brown-600">
              About Us
            </span>
            <h1 className="mb-6 font-display text-5xl font-bold text-gray-900 md:text-7xl">
              About Us
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
              Solving the bakery 2024 problem,
              <br />
              Elevating Japanese bread culture to global BUNKA
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/about"
                className="rounded-full border-2 border-brown-600 bg-white px-6 py-2 text-sm font-bold text-brown-600 transition-colors hover:bg-brown-50"
              >
                日本語
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-24" ref={ref}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 font-display text-4xl font-bold text-gray-900 md:text-5xl">
              Our Story
            </h2>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Our Founding Spirit
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  UTokyo Bakers' Lab was founded in winter 2025 to solve the "Bakery 2024 Problem."
                </p>
                <p>
                  Japanese bakeries today face many challenges, but their essence is not yet well understood.
                </p>
                <p>
                  Guided by Gauguin's question "Where do we come from? What are we? Where are we going?",
                  we work with a view toward bread's past, present, and future.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Our Mission
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  "Redefining Japanese food culture, centered on bakeries"
                </p>
                <p>
                  This is our philosophy. Domestic wheat has long been said to be scarce, unstable in quality, and difficult to handle.
                </p>
                <p>
                  But is this really true? Through listening to wheat, dialoguing with it, and embracing its regional character,
                  we reframe food not as "consumption" but as "relationship."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 font-display text-4xl font-bold text-gray-900 md:text-5xl">
              Three Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Activities spanning past, present, and future
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => {
              const icons = {
                book: BookOpen,
                globe: Globe,
                calendar: Calendar,
              };
              const Icon = icons[project.icon as keyof typeof icons];

              const colorClasses = {
                primary: {
                  bg: "bg-brown-100",
                  text: "text-brown-600",
                  gradient: "from-brown-600 to-brown-400",
                },
                secondary: {
                  bg: "bg-brown-200",
                  text: "text-brown-700",
                  gradient: "from-brown-700 to-brown-500",
                },
                accent: {
                  bg: "bg-beige-200",
                  text: "text-brown-600",
                  gradient: "from-brown-500 to-brown-300",
                },
              };
              const colors = colorClasses[project.color];

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group rounded-2xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                >
                  <div
                    className={`mb-6 inline-flex rounded-full ${colors.bg} p-4`}
                  >
                    <Icon
                      className={`h-8 w-8 ${colors.text}`}
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    {project.title.en}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {project.description.en}
                  </p>
                  <div
                    className={`mt-6 h-1 w-full rounded-full bg-gradient-to-r ${colors.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 font-display text-4xl font-bold text-gray-900 md:text-5xl">
              Our Values
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-brown-100 p-4">
                      <Icon
                        className="h-8 w-8 text-brown-600"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gradient-to-br from-brown-50 to-beige-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 font-display text-4xl font-bold text-gray-900 md:text-5xl">
              Our Journey
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              From our founding in 2025 to now, and beyond
            </p>
          </motion.div>

          <Timeline events={timeline} language="en" />
        </div>
      </section>

      {/* Meeting Info */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 font-display text-3xl font-bold text-gray-900 md:text-4xl">
                Activity Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-brown-100 p-3">
                    <Clock className="h-6 w-6 text-brown-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-gray-900">Regular Meetings</h3>
                    <p className="text-gray-600">Once a week if you are to join as a core member.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-beige-200 p-3">
                    <MapPin className="h-6 w-6 text-brown-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-gray-900">Location</h3>
                    <p className="text-gray-600">
                      Komaba Campus (Online participation available)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-brown-200 p-3">
                    <Calendar className="h-6 w-6 text-brown-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-gray-900">
                      Bakery Visits
                    </h3>
                    <p className="text-gray-600">
                      Weekly pace (Over 10 visits in Dec-Jan alone)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl bg-gradient-to-br from-brown-600 to-brown-800 p-8 md:p-10"
            >
              <h2 className="mb-6 font-display text-3xl font-bold text-beige-50">
                Membership Benefits
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-beige-200"
                  >
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                      <div className="h-2 w-2 rounded-full bg-beige-200" />
                    </div>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Link
                  href="/contact/en"
                  className="block rounded-full bg-white border-2 px-8 py-4 text-center font-bold text-brown-600 shadow-lg transition-colors hover:bg-brown-50"
                >
                  Join Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-beige-50 to-brown-50 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 font-display text-4xl font-bold text-gray-900 md:text-5xl">
              Create Culture Together?
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              As a newly-born organization,
              <br />
              we can create this organization's culture together
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/members/en"
                  className="block rounded-full bg-gradient-to-r from-brown-600 to-brown-700 px-8 py-4 font-bold text-beige-50 shadow-lg transition-shadow hover:shadow-xl"
                >
                  Meet Our Team
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact/en"
                  className="block rounded-full border-2 border-brown-600 bg-white px-8 py-4 font-bold text-brown-600 transition-colors hover:bg-brown-50"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
