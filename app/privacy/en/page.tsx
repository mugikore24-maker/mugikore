import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - UTokyo Bakers' Lab",
  description: "Privacy Policy of UTokyo Bakers' Lab",
};

export default function PrivacyPolicyPageEN() {
  return (
    <div className="min-h-screen bg-beige-50">
      {/* Header */}
      <div className="border-b border-brown-300 bg-beige-50 py-4">
        <div className="max-w-4xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link
            href="/en"
            className="text-brown-600 hover:text-brown-900 transition-colors"
          >
            ← Back to Home
          </Link>
          <Link
            href="/privacy"
            className="text-brown-600 hover:text-brown-900 transition-colors text-sm"
          >
            日本語
          </Link>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <header className="mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-brown-600">Effective Date: January 21, 2026</p>
        </header>

        <div className="prose-policy space-y-8 text-brown-800">
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              1. Basic Philosophy
            </h2>
            <p className="leading-relaxed">
              UTokyo Bakers' Lab (hereinafter referred to as "the Organization")
              positions the protection of personal information as a social
              responsibility based on the philosophy of respecting individual
              dignity. We strive to protect the rights and interests of
              individuals through appropriate handling and management. Personal
              information collected and held in the course of our business
              activities forms the foundation of social trust, and we exercise
              the highest level of care in its handling.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              2. Scope of Application
            </h2>
            <p className="leading-relaxed">
              This policy applies to all personal information acquired, held,
              and managed by the Organization. All related parties shall comply
              with this policy and exercise maximum care in protecting personal
              information.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              3. Definition of Personal Information
            </h2>
            <p className="leading-relaxed">
              Personal information refers to information about a living
              individual that can identify a specific individual through name,
              date of birth, address, telephone number, email address, or other
              descriptions. It also includes information that can identify a
              specific individual by being easily cross-referenced with other
              information.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              4. Collection of Personal Information
            </h2>
            <p className="leading-relaxed">
              When acquiring personal information, the Organization clearly
              specifies the purpose of use and collects it through lawful and
              fair means. The purposes of use include activity support,
              information provision, various communications, surveys, event
              announcements, and donation management, and we collect only the
              minimum necessary information. We do not use information for
              purposes other than those stated without the consent of the
              individual.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              5. Purpose of Use of Personal Information
            </h2>
            <p className="leading-relaxed mb-4">
              The Organization uses acquired personal information for the
              following purposes:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Providing information and communications regarding UTokyo
                Bakers' Lab activities
              </li>
              <li>
                Announcements about events, seminars, and volunteer recruitment
              </li>
              <li>Management of supporters, members, and donations</li>
              <li>Conducting surveys and marketing research</li>
              <li>Responses based on laws and regulations</li>
            </ul>
            <p className="leading-relaxed mt-4">
              When using information beyond the scope of the stated purposes, we
              will obtain prior consent from the individual.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              6. Provision of Personal Information to Third Parties
            </h2>
            <p className="leading-relaxed">
              The Organization will not provide personal information to third
              parties without prior consent from the individual, except as
              required by law. When providing information to third parties, we
              ensure information security through appropriate contracts and
              supervision.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              7. Management and Security Measures
            </h2>
            <p className="leading-relaxed">
              The Organization implements reasonable security management
              measures to prevent leakage, loss, and damage of personal
              information.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              8. Outsourcing of Personal Information Handling
            </h2>
            <p className="leading-relaxed">
              When outsourcing the handling of personal information to external
              parties, the Organization contractually obligates the outsourcee
              to comply with our personal information protection standards and
              appropriately supervises them. When selecting outsourcees, we
              thoroughly verify their security management systems.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              9. Requests for Disclosure, Correction, and Suspension of Use
            </h2>
            <p className="leading-relaxed">
              When an individual requests disclosure, correction, suspension of
              use, or deletion of their personal information, we will respond
              promptly in accordance with applicable laws after appropriately
              verifying their identity. Request procedures and contact points
              are clearly stated on our website and promotional materials to
              ensure transparency.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              10. Use of Cookies
            </h2>
            <p className="leading-relaxed">
              The Organization's website may use cookies to improve user
              convenience and for access analysis. Information collected through
              cookies is limited to statistical data that cannot identify
              individuals and does not infringe on privacy. Users can refuse the
              use of cookies through their browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              11. Education and Awareness on Personal Information Protection
            </h2>
            <p className="leading-relaxed">
              The Organization conducts ongoing education and awareness
              activities regarding personal information protection for all
              related parties, aiming to raise awareness among everyone. We
              ensure proper handling of personal information and prevent
              accidents and violations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              12. Compliance with Laws and Continuous Improvement
            </h2>
            <p className="leading-relaxed">
              We comply with laws related to personal information protection,
              guidelines established by the government, and social norms. We
              build a personal information protection management system and
              continuously review and improve it. We respond flexibly and
              promptly to changes in society and technological advances.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              13. Retention Period of Personal Information
            </h2>
            <p className="leading-relaxed">
              The Organization retains personal information for the period
              necessary to achieve the purpose of use, after which we take
              appropriate measures such as safe and secure disposal or
              anonymization. We maintain a clear retention period and proper
              management, upholding a policy of not retaining unnecessary
              personal information for extended periods.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              14. International Handling of Personal Information
            </h2>
            <p className="leading-relaxed">
              In our international activities, when transferring personal
              information outside the country, the Organization complies with
              applicable laws and international standards and implements
              sufficient security measures. We manage information to ensure that
              individual rights are not compromised.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              15. Final Provisions
            </h2>
            <p className="leading-relaxed">
              This Privacy Policy is effective from January 21, 2026, and will be
              revised as necessary. Revised content will be promptly published
              and communicated to related parties.
            </p>
          </section>

          <section className="pt-8 border-t border-brown-300">
            <p className="text-brown-700">
              <strong>UTokyo Bakers' Lab</strong>
              <br />
              The University of Tokyo Bread Research Club
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
