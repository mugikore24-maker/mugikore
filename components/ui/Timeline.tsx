"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TimelineEvent } from "@/lib/types/team";
import { Calendar, Award, Sparkles } from "lucide-react";

interface TimelineProps {
  events: TimelineEvent[];
  language?: "ja" | "en";
}

export default function Timeline({ events, language = "ja" }: TimelineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const getIcon = (type?: string) => {
    switch (type) {
      case "milestone":
        return Sparkles;
      case "achievement":
        return Award;
      case "event":
        return Calendar;
      default:
        return Calendar;
    }
  };

  const getColorClasses = (type?: string) => {
    switch (type) {
      case "milestone":
        return {
          text: "text-primary-600",
          bg: "bg-primary-100",
          icon: "text-primary-600",
          bar: "from-primary-600 to-primary-400",
        };
      case "achievement":
        return {
          text: "text-accent-600",
          bg: "bg-accent-100",
          icon: "text-accent-600",
          bar: "from-accent-600 to-accent-400",
        };
      case "event":
        return {
          text: "text-secondary-600",
          bg: "bg-secondary-100",
          icon: "text-secondary-600",
          bar: "from-secondary-600 to-secondary-400",
        };
      default:
        return {
          text: "text-primary-600",
          bg: "bg-primary-100",
          icon: "text-primary-600",
          bar: "from-primary-600 to-primary-400",
        };
    }
  };

  return (
    <div ref={ref} className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary-200 via-accent-200 to-secondary-200 md:left-1/2" />

      <div className="space-y-12">
        {events.map((event, index) => {
          const Icon = getIcon(event.type);
          const colors = getColorClasses(event.type);
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: isEven ? -50 : 50 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center gap-8 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div
                className={`flex-1 ${
                  isEven ? "md:text-right" : "md:text-left"
                } ml-20 md:ml-0`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`rounded-2xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl ${
                    isEven ? "md:ml-auto md:mr-0" : "md:ml-0 md:mr-auto"
                  } md:max-w-md`}
                >
                  {/* Date */}
                  <div
                    className={`mb-2 text-sm font-bold uppercase tracking-wide ${colors.text}`}
                  >
                    {event.year}年
                    {event.month && `${event.month}月`}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {event.title[language]}
                  </h3>

                  {/* Description */}
                  <p className="leading-relaxed text-gray-600">
                    {event.description[language]}
                  </p>
                </motion.div>
              </div>

              {/* Center icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                }}
                className={`absolute left-8 z-10 flex h-16 w-16 items-center justify-center rounded-full ${colors.bg} shadow-lg md:left-1/2 md:-translate-x-1/2`}
              >
                <Icon className={`h-8 w-8 ${colors.icon}`} strokeWidth={2} />
              </motion.div>

              {/* Spacer for layout */}
              <div className="hidden flex-1 md:block" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
