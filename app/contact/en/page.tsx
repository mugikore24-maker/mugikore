import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - UTokyo Bakers' Lab",
  description: "Get in touch with UTokyo Bakers' Lab",
};

export default function ContactPageEN() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <header className="bg-beige-50 border-b border-brown-300 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-brown-900 text-center">
            Contact
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Introduction */}
        <div className="mb-16 space-y-4 text-brown-800 leading-relaxed">
          <p>
            UTokyo Bakers&apos; Lab is a student collective working to solve
            Japan&apos;s &quot;Bakery 2024 Problem&quot; and share domestic wheat
            culture with the world.
          </p>

          <p>
            We welcome questions, ideas, collaboration offers, donations, and
            general feedback. No matter how small your inquiry, feel free to
            reach out.
          </p>
        </div>

        <hr className="border-brown-300 my-12" />

        {/* Contact Method */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brown-900 mb-6">
            How to reach us
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-brown-900 mb-3">
                Email
              </h3>

              <p className="text-brown-800 leading-relaxed mb-4">
                Send your questions or requests to the email below. Depending on
                the topic, replies may take some time, but we do our best to
                respond promptly.
              </p>

              <p className="text-lg">
                <a
                  href="mailto:mugikore24@gmail.com"
                  className="text-brown-600 font-medium hover:text-brown-900 transition-colors underline"
                >
                  mugikore24[---]gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-brown-900 mb-3">
                Instagram DM
              </h3>

              <p className="text-brown-800 leading-relaxed mb-4">
                You can also reach us via Instagram DM—this is often the fastest
                way to get a response.
              </p>

              <p className="text-lg">
                <a
                  href="https://www.instagram.com/mugip_roject/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown-600 font-medium hover:text-brown-900 transition-colors underline"
                >
                  @mugip_roject
                </a>
              </p>
            </div>
          </div>
        </section>

        <hr className="border-brown-300 my-12" />

        {/* Usage Notes */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brown-900 mb-6">
            Before you send
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-brown-900 mb-3">
                Privacy
              </h3>

              <p className="text-brown-800 leading-relaxed mb-3">
                We use your information only to reply and to improve our
                activities. We will not share your personal data with third
                parties.
              </p>

              <p className="text-brown-800 leading-relaxed">
                For details, see our{" "}
                <a
                  href="/privacy/en"
                  className="text-brown-600 hover:text-brown-900 transition-colors underline"
                >
                  privacy policy
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-brown-900 mb-3">
                If your inquiry is urgent
              </h3>

              <p className="text-brown-800 leading-relaxed">
                Please include your phone number in the email body or add
                &quot;URGENT&quot; to the subject line so we can prioritize your
                request.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-brown-300 my-12" />

        {/* Other Information */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brown-900 mb-6">
            More info
          </h2>

          <div className="space-y-4 text-brown-800 leading-relaxed">
            <p>
              We share activity reports and updates on our{" "}
              <a
                href="/blog/en"
                className="text-brown-600 hover:text-brown-900 transition-colors underline"
              >
                blog
              </a>{" "}
              and social channels—take a look.
            </p>

            <p>
              Inquiries about donations are welcome via email or DM as well.
            </p>

            <p>
              If you&apos;d like to observe a regular meeting (Fridays 18:00–19:30,
              Hongo campus), please get in touch in advance.
            </p>
          </div>
        </section>

        <hr className="border-brown-300 my-12" />

        {/* Closing */}
        <div className="text-center text-brown-800 leading-relaxed">
          <p>We look forward to hearing from you.</p>
        </div>
      </main>
    </div>
  );
}
