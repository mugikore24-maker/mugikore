import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - UTokyo Bakers' Lab",
  description: "私たちの理念、歴史、活動について",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <header className="bg-beige-50 border-b border-brown-300 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brown-900 text-center mb-4">
            About
          </h1>
          <p className="text-center text-xl text-brown-700">
            私たちの理念と活動について
          </p>
        </div>
      </header>

      {/* Table of Contents */}
      <nav className="bg-white border-b border-brown-300 py-6">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-base">
            <a
              href="#philosophy"
              className="text-brown-700 hover:text-brown-900 transition-colors"
            >
              Philosophy
            </a>
            <span className="text-brown-400">|</span>
            <a
              href="#history"
              className="text-brown-700 hover:text-brown-900 transition-colors"
            >
              History
            </a>
            <span className="text-brown-400">|</span>
            <a
              href="#activities"
              className="text-brown-700 hover:text-brown-900 transition-colors"
            >
              Activities
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Philosophy Section */}
        <section id="philosophy" className="mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-900 mb-8">
            Our Philosophy
          </h2>

          <div className="border-l-4 border-brown-500 pl-6 my-8 bg-beige-50 p-6">
            <p className="text-lg font-medium text-brown-800 mb-2">
              「パン屋を中心にして、日本の食文化を定義し直す」
            </p>
            <p className="text-base text-brown-600 mb-0">
              Redefining Japanese food culture, centered on bakeries
            </p>
          </div>

          <h3 className="font-display text-2xl font-semibold text-brown-900 mb-4 mt-10">
            Founders' Words
          </h3>

          <div className="space-y-4 text-lg leading-relaxed text-brown-800">
            <p>
              みなさん、ご参加くださりありがとうございます！
              UTokyo Bakers' Lab (東大パン研究会) へようこそ！
            </p>

            <p>
              私たちは「パン屋の2024年問題」を解決するため、2025年冬に結成されたばかりの学生団体です。
              まだ生まれたての組織なので、これから皆さんと一緒にこの団体の文化を作っていけたらとても嬉しいです！
            </p>

            <p>
              日本のパン屋さんは今、多くの問題を抱えていますが、その本質はまだ十分に知られていません。
              私たちが活動する上で大切にしたい問い、それはゴーギャンの言葉にもあるように...
            </p>

            <blockquote className="border-l-4 border-brown-500 pl-6 italic text-brown-700 my-6">
              「我々はどこから来たのか、我々は何者か、我々はどこへいくのか」
            </blockquote>

            <p>
              この問いを胸に、過去・現在・未来を見据えた2つのプロジェクトを動かしていきます！
            </p>
          </div>

          <h3 className="font-display text-2xl font-semibold text-brown-900 mb-6 mt-10">
            Core Principles
          </h3>

          <ol className="space-y-6 ml-0 list-none">
            <li>
              <h4 className="font-display text-xl font-semibold text-brown-900 mb-2">
                現場主義
              </h4>
              <p className="text-lg text-brown-800 leading-relaxed">
                机上の空論で終わらせないために、私たちは「現場」を大切にします。
                すでに12月・1月だけで10件以上のパン屋さんや機関へ訪問済み！週1回のペースで訪問を行っています。
              </p>
            </li>

            <li>
              <h4 className="font-display text-xl font-semibold text-brown-900 mb-2">
                小麦との対話
              </h4>
              <p className="text-lg text-brown-800 leading-relaxed">
                小麦は工業製品ではありません。土地の気候、土壌、品種、収穫年によって性格が変わる、生きた素材です。
                それを、均一性だけを基準に評価すれば、国産小麦はいつまでも&quot;劣った原料&quot;のままになってしまいます。
              </p>
            </li>

            <li>
              <h4 className="font-display text-xl font-semibold text-brown-900 mb-2">
                関係性の再構築
              </h4>
              <p className="text-lg text-brown-800 leading-relaxed">
                私たちが国産小麦でパンを焼くという行為は、単なる原料選択ではありません。
                それは、見えなくなっていた生産の現場を取り戻し、作り手と食べ手の距離を縮め、
                食を「消費」ではなく「関係」として捉え直す試みです。
              </p>
            </li>

            <li>
              <h4 className="font-display text-xl font-semibold text-brown-900 mb-2">
                100年後の文化
              </h4>
              <p className="text-lg text-brown-800 leading-relaxed">
                海外研修や戦略的な広報を通じて、日本のパン文化を世界へ発信し、
                100年後も残る文化へと昇華させます。
              </p>
            </li>
          </ol>
        </section>

        <hr className="border-brown-300 my-16" />

        {/* History Section */}
        <section id="history" className="mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-900 mb-8">
            Our History
          </h2>

          <p className="text-lg text-brown-800 leading-relaxed mb-10">
            UTokyo Bakers' Labは2025年12月に発起し、2026年1月に正式に始動した、東京大学の学生による研究団体です。
          </p>

          <h3 className="font-display text-2xl font-semibold text-brown-900 mb-8">
            Timeline
          </h3>

          <div className="space-y-8">
            <article className="border-l-2 border-brown-400 pl-6">
              <div className="text-sm font-bold text-brown-600 mb-1">
                2025年12月
              </div>
              <h4 className="text-xl font-semibold text-brown-900 mb-2">
                発起
              </h4>
              <p className="text-brown-800 leading-relaxed">
                池田浩明さんと初代代表が発起。
              </p>
            </article>

            <article className="border-l-2 border-brown-400 pl-6">
              <div className="text-sm font-bold text-brown-600 mb-1">
                2026年1月11日
              </div>
              <h4 className="text-xl font-semibold text-brown-900 mb-2">
                サークル始動
              </h4>
              <p className="text-brown-800 leading-relaxed">
                UTokyo Bakers' Lab として正式に活動開始。
              </p>
            </article>

            <article className="border-l-2 border-brown-400 pl-6">
              <div className="text-sm font-bold text-brown-600 mb-1">
                2026年9月（予定）
              </div>
              <h4 className="text-xl font-semibold text-brown-900 mb-2">
                麦フェス共同参加
              </h4>
              <p className="text-brown-800 leading-relaxed">
                NPO法人新麦コレクションと共に麦フェスに参加予定。
              </p>
            </article>

            <article className="border-l-2 border-brown-400 pl-6">
              <div className="text-sm font-bold text-brown-600 mb-1">
                2027年3月（予定）
              </div>
              <h4 className="text-xl font-semibold text-brown-900 mb-2">
                ヨーロッパパン研修（フランス）
              </h4>
              <p className="text-brown-800 leading-relaxed">
                フランスでの現地研修を通じて、日本のパン文化を世界へ発信。
              </p>
            </article>
          </div>
        </section>

        <hr className="border-brown-300 my-16" />

        {/* Activities Section */}
        <section id="activities" className="mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-900 mb-8">
            Our Activities
          </h2>

          <p className="text-lg text-brown-800 leading-relaxed mb-10">
            私たちの活動は3つのプロジェクトに分かれています。
            それぞれが過去・現在・未来を見据え、日本のパン文化の発展に貢献します。
          </p>

          <article className="mb-12">
            <h3 className="font-display text-2xl font-semibold text-brown-900 mb-3">
              1. パン屋の2024年問題定義委員会
              <span className="text-base font-normal text-brown-600 ml-2">
                （過去ー現在）
              </span>
            </h3>

            <p className="text-lg italic text-brown-700 mb-4">
              「パンの歴史から、業界の今を見つめ直す」
            </p>

            <p className="text-lg text-brown-800 leading-relaxed mb-4">
              日本一のパン屋さんと名高いZOPFさんや、大成功されているPrologueさんなどのノウハウを広げたり、
              業界の課題を定義する本の出版、広報活動を行います。
            </p>

            <h4 className="font-semibold text-brown-900 mb-2">主な活動：</h4>
            <ul className="list-disc ml-8 space-y-2 text-brown-800">
              <li>トップベーカリーへのインタビュー</li>
              <li>パン屋開業ノウハウ本の執筆・出版</li>
              <li>パン屋さん向け勉強会の開催</li>
              <li>業界課題の調査・分析</li>
            </ul>
          </article>

          <article className="mb-12">
            <h3 className="font-display text-2xl font-semibold text-brown-900 mb-3">
              2. 22世紀のパンを考える会
              <span className="text-base font-normal text-brown-600 ml-2">
                （未来）
              </span>
            </h3>

            <p className="text-lg italic text-brown-700 mb-4">
              「日本のパン文化を、世界の『BUNKA』へ」
            </p>

            <p className="text-lg text-brown-800 leading-relaxed mb-4">
              意外かもしれませんが、日本のパンはまだ世界（そして日本人自身にも！）で確固たる地位を築けていません。
              海外研修や戦略的な広報を通じて、日本のパン文化を世界へ発信し、100年後も残る文化へと昇華させます。
            </p>

            <h4 className="font-semibold text-brown-900 mb-2">主な活動：</h4>
            <ul className="list-disc ml-8 space-y-2 text-brown-800">
              <li>海外研修プログラム（フランスなど）</li>
              <li>国際的な広報・PR活動</li>
              <li>日本のパン文化の研究・発信</li>
              <li>グローバルネットワークの構築</li>
            </ul>
          </article>

          <article className="mb-12">
            <h3 className="font-display text-2xl font-semibold text-brown-900 mb-3">
              3. 麦フェス運営プロジェクト
            </h3>

            <p className="text-lg text-brown-800 leading-relaxed mb-4">
              NPO法人新麦コレクションにご協力いただき、麦フェスの運営に参加します。
              様々な地域のパン屋さんやラーメン屋さんなどに参加していただくため、責任を持って運営します。
            </p>

            <h4 className="font-semibold text-brown-900 mb-2">主な活動：</h4>
            <ul className="list-disc ml-8 space-y-2 text-brown-800">
              <li>麦フェスの企画・運営</li>
              <li>参加店舗の募集・調整</li>
              <li>イベント当日の運営サポート</li>
              <li>国産小麦の普及活動</li>
            </ul>
          </article>

          <h3 className="font-display text-2xl font-semibold text-brown-900 mb-6 mt-12">
            Meeting Information
          </h3>

          <div className="bg-beige-50 border border-brown-300 p-6 rounded">
            <dl className="space-y-4">
              <div>
                <dt className="font-bold text-brown-900 mb-1">定例会</dt>
                <dd className="text-brown-800">プロジェクトのコアメンバーとして活躍される場合には週一回程度のミーティングが実施される場合があります！</dd>
              </div>
              <div>
                <dt className="font-bold text-brown-900 mb-1">場所</dt>
                <dd className="text-brown-800">
                  東京大学　駒場キャンパス（オンライン参加も可能）
                </dd>
              </div>
              <div>
                <dt className="font-bold text-brown-900 mb-1">パン屋訪問</dt>
                <dd className="text-brown-800">場所は東京周辺の様々なパン屋さんです！週1回のペースで開催されます。</dd>
              </div>
            </dl>
          </div>
        </section>

        <hr className="border-brown-300 my-16" />

        {/* Join Section */}
        <section className="text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-900 mb-6">
            Join Us
          </h2>

          <p className="text-xl text-brown-800 mb-6 leading-relaxed">
            入会は原則、どこかの活動に一度参加していただき、
            <br />
            プロジェクトに参加できそうだと思っていただいてからになります。
          </p>

          <p className="text-lg text-brown-700 mb-10">
            InstagramのDMからお気軽にご連絡ください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="inline-block border-2 border-brown-600 text-brown-900 px-8 py-3 text-lg font-medium hover:bg-brown-50 transition-colors"
            >
              ブログを読む
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 bg-brown-600 text-primary-900 px-8 py-3 text-lg font-medium hover:bg-brown-700 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
