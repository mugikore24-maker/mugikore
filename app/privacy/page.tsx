import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "個人情報保護方針 - UTokyo Bakers' Lab",
  description: "UTokyo Bakers' Labの個人情報保護方針について",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-beige-50">
      {/* Header */}
      <div className="border-b border-brown-300 bg-beige-50 py-4">
        <div className="max-w-4xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="text-brown-600 hover:text-brown-900 transition-colors"
          >
            ← ホームに戻る
          </Link>
          <Link
            href="/privacy/en"
            className="text-brown-600 hover:text-brown-900 transition-colors text-sm"
          >
            English
          </Link>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <header className="mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            個人情報保護方針
          </h1>
          <p className="text-brown-600">施行日: 2026年1月21日</p>
        </header>

        <div className="prose-policy space-y-8 text-brown-800">
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              1. 基本理念
            </h2>
            <p className="leading-relaxed">
              UTokyo Bakers'
              Lab（以下「当団体」）は、個人の人格尊重の理念のもと、個人情報の保護を社会的責務と位置づけ、その適切な取り扱いと管理を通じて、個人の権利利益の保護に最大限努めます。当団体の事業活動において収集・保有する個人情報は、社会的信頼の基盤であり、その取り扱いに関しては最高水準の注意を払います。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              2. 適用範囲
            </h2>
            <p className="leading-relaxed">
              本方針は、当団体が取得・保有・管理するすべての個人情報に適用されます。関係者は、この方針を遵守し、個人情報保護に最大限の注意を払います。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              3. 個人情報の定義
            </h2>
            <p className="leading-relaxed">
              個人情報とは、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレス、その他の記述等により特定の個人を識別できる情報を指します。また、他の情報と容易に照合することで特定の個人を識別できるものも含みます。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              4. 個人情報の収集について
            </h2>
            <p className="leading-relaxed">
              当団体は、個人情報の取得にあたり、その利用目的を明確にし、適法かつ公正な手段により行います。利用目的は、当団体の活動支援、情報提供、各種連絡、アンケート、イベント案内、寄付管理などであり、必要最低限の情報のみを収集します。また、本人の同意なく目的外利用は行いません。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              5. 個人情報の利用目的
            </h2>
            <p className="leading-relaxed mb-4">
              当団体は、取得した個人情報を以下の目的で利用いたします。
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>UTokyo Bakers' Labの活動に関する情報提供および連絡</li>
              <li>イベントやセミナー、ボランティア募集に関する案内</li>
              <li>支援者や会員の管理および寄付金管理</li>
              <li>アンケート調査やマーケティング調査の実施</li>
              <li>法令や規則に基づく対応</li>
            </ul>
            <p className="leading-relaxed mt-4">
              利用目的の範囲を超える利用を行う場合には、事前に本人の同意を得るものとします。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              6. 個人情報の第三者提供について
            </h2>
            <p className="leading-relaxed">
              当団体は、法令に定める場合を除き、あらかじめ本人の同意を得ることなく第三者に個人情報を提供いたしません。第三者提供を行う場合には、適切な契約や監督を行い、情報の安全管理に努めます。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              7. 個人情報の管理と安全対策
            </h2>
            <p className="leading-relaxed">
              当団体は、個人情報の漏洩、滅失、毀損を防止するために合理的な安全管理措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              8. 個人情報の委託について
            </h2>
            <p className="leading-relaxed">
              当団体は、個人情報の取り扱いを外部に委託する場合、委託先が当団体の個人情報保護基準を遵守することを契約により義務付け、適切に監督します。委託先の選定にあたっては、その安全管理体制を十分に確認します。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              9. 個人情報の開示・訂正・利用停止等の請求対応
            </h2>
            <p className="leading-relaxed">
              本人から自己の個人情報について開示、訂正、利用停止、削除等の請求があった場合、本人確認を適切に行った上で、法令に基づき速やかに対応いたします。請求手続きや対応窓口については当団体のホームページおよび広報物に明記し、透明性を確保します。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              10. クッキー等の利用について
            </h2>
            <p className="leading-relaxed">
              当団体のウェブサイトでは、利用者の利便性向上やアクセス解析のためにクッキーを利用する場合があります。これにより収集される情報は個人を特定できない統計データに限られ、プライバシーを侵害することはありません。クッキーの使用に関しては利用者が設定で拒否することも可能です。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              11. 個人情報保護に関する教育・啓発
            </h2>
            <p className="leading-relaxed">
              当団体は、関係者に対し、個人情報保護に関する継続的な教育・啓発活動を実施し、全員の意識向上を図ります。個人情報の適正な取り扱いを徹底し、事故や違反を未然に防止します。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              12. 法令・規範の遵守と継続的改善
            </h2>
            <p className="leading-relaxed">
              個人情報保護に関する法令、国が定める指針および社会的規範を遵守し、個人情報保護マネジメントシステムを構築して継続的に見直しと改善を図ります。社会の変化や技術の進歩に応じて柔軟かつ迅速に対応します。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              13. 個人情報の保有期間
            </h2>
            <p className="leading-relaxed">
              当団体は、個人情報を利用目的の達成に必要な期間保持し、その後は安全かつ確実に廃棄または匿名化等の適切な措置を講じます。保有期間の明確化と適切な管理を徹底し、不要な個人情報を長期間保有しない方針を堅持します。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              14. 国際的な個人情報の取扱い
            </h2>
            <p className="leading-relaxed">
              当団体は、国際的な活動において、国外に個人情報を移転する場合、適用される法令および国際基準に準拠し、十分な安全措置を講じます。本人の権利が損なわれることがないように管理します。
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold text-brown-900 mb-4">
              15. 最終規定
            </h2>
            <p className="leading-relaxed">
              本個人情報保護方針は2026年1月21日より施行し、必要に応じて改訂します。改訂後の内容は速やかに公開し、関係者に周知します。
            </p>
          </section>

          <section className="pt-8 border-t border-brown-300">
            <p className="text-brown-700">
              <strong>UTokyo Bakers' Lab</strong>
              <br />
              東京大学パン研究会
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
