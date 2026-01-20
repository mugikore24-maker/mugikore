import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ - UTokyo Bakers' Lab",
  description: "UTokyo Bakers' Labへのお問い合わせ",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <header className="bg-beige-50 border-b border-brown-300 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-brown-900 text-center">
            お問い合わせ
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Introduction */}
        <div className="mb-16 space-y-4 text-brown-800 leading-relaxed">
          <p>
            UTokyo Bakers' Labは、「パン屋の2024年問題」を解決し、日本のパン文化を世界へ発信することを目的として活動している学生団体です。
          </p>

          <p>
            私たちの活動に対するご意見、ご質問、ご提案は大変貴重なものです。
            活動への参加、寄付、協力のご相談など、どのような内容でも構いません。
            小さなご質問でもお気軽にお寄せください。
          </p>
        </div>

        <hr className="border-brown-300 my-12" />

        {/* Contact Method */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brown-900 mb-6">
            お問い合わせ方法
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-brown-900 mb-3">
                メールでのお問い合わせ
              </h3>

              <p className="text-brown-800 leading-relaxed mb-4">
                ご質問やご依頼は、以下のメールアドレスまでお送りください。
                内容によってはお時間をいただく場合がございますが、できる限り迅速にご返信いたします。
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
                SNSでのお問い合わせ
              </h3>

              <p className="text-brown-800 leading-relaxed mb-4">
                InstagramのDMでもお問い合わせを受け付けております。
                こちらが最も早くご対応できる場合があります。
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
            ご利用にあたっての注意
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-brown-900 mb-3">
                個人情報の取り扱いについて
              </h3>

              <p className="text-brown-800 leading-relaxed mb-3">
                お送りいただいた情報は、ご返信およびサービス向上の目的にのみ使用いたします。
                個人情報は適切に管理し、第三者に開示することはございません。
              </p>

              <p className="text-brown-800 leading-relaxed">
                詳しくは
                <a
                  href="/privacy"
                  className="text-brown-600 hover:text-brown-900 transition-colors underline ml-1"
                >
                  個人情報保護方針
                </a>
                をご覧ください。
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-brown-900 mb-3">
                お急ぎの場合
              </h3>

              <p className="text-brown-800 leading-relaxed">
                お急ぎの場合は、メール本文に電話番号をご記入いただくか、
                件名に「お急ぎ」とご記入ください。
                優先的に対応させていただきます。
              </p>
            </div>
          </div>
        </section>

        <hr className="border-brown-300 my-12" />

        {/* Other Information */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brown-900 mb-6">
            その他のご案内
          </h2>

          <div className="space-y-4 text-brown-800 leading-relaxed">
            <p>
              活動報告や最新情報は、本ウェブサイトの
              <a
                href="/blog"
                className="text-brown-600 hover:text-brown-900 transition-colors underline mx-1"
              >
                ブログ
              </a>
              や、SNSで発信しております。
              ぜひご覧ください。
            </p>

            <p>
              寄付に関するお問い合わせも、メールまたはお問い合わせフォームにて承っております。
            </p>

            <p>
              定例会（毎週1回、駒場キャンパス）への参加をご希望の方も、
              お気軽にご連絡ください。
            </p>
          </div>
        </section>

        <hr className="border-brown-300 my-12" />

        {/* Closing */}
        <div className="text-center text-brown-800 leading-relaxed">
          <p>
            UTokyo Bakers' Labは、皆様からのご連絡を心よりお待ちしております。
          </p>
        </div>
      </main>
    </div>
  );
}
