import { TeamMember, TimelineEvent, Project } from "@/lib/types/team";

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: {
      ja: "山田 太郎",
      en: "Taro Yamada",
    },
    role: {
      ja: "代表",
      en: "President",
    },
    department: "leadership",
    bio: {
      ja: "経済学部3年。パン屋の2024年問題に取り組み、日本のパン文化を世界に発信することを目指しています。",
      en: "3rd year Economics student. Working to solve the bread bakery 2024 problem and promote Japanese bread culture globally.",
    },
    image: "/images/team/placeholder-1.jpg",
    social: {
      instagram: "#",
      twitter: "#",
    },
    joinedYear: 2025,
  },
  {
    id: "2",
    name: {
      ja: "佐藤 花子",
      en: "Hanako Sato",
    },
    role: {
      ja: "副代表",
      en: "Vice President",
    },
    department: "leadership",
    bio: {
      ja: "農学部2年。国産小麦の可能性を広げ、生産者と消費者をつなぐ活動に情熱を注いでいます。",
      en: "2nd year Agriculture student. Passionate about expanding the potential of domestic wheat and connecting producers with consumers.",
    },
    image: "/images/team/placeholder-2.jpg",
    social: {
      instagram: "#",
      twitter: "#",
    },
    joinedYear: 2025,
  },
  {
    id: "3",
    name: {
      ja: "田中 健太",
      en: "Kenta Tanaka",
    },
    role: {
      ja: "パン屋の2024年問題定義委員会 リーダー",
      en: "Leader, Bakery 2024 Problem Definition Committee",
    },
    department: "problem-definition",
    bio: {
      ja: "法学部3年。業界の課題を明確にし、解決策を提案するための調査・分析を行っています。",
      en: "3rd year Law student. Conducting research and analysis to clarify industry challenges and propose solutions.",
    },
    image: "/images/team/placeholder-3.jpg",
    social: {
      instagram: "#",
    },
    joinedYear: 2025,
  },
  {
    id: "4",
    name: {
      ja: "鈴木 美咲",
      en: "Misaki Suzuki",
    },
    role: {
      ja: "22世紀のパンを考える会 リーダー",
      en: "Leader, 22nd Century Bread Committee",
    },
    department: "future-bread",
    bio: {
      ja: "文学部2年。日本のパン文化を世界的なBUNKAへと昇華させるための戦略立案を担当しています。",
      en: "2nd year Literature student. Developing strategies to elevate Japanese bread culture to global BUNKA status.",
    },
    image: "/images/team/placeholder-4.jpg",
    social: {
      instagram: "#",
      twitter: "#",
    },
    joinedYear: 2025,
  },
  {
    id: "5",
    name: {
      ja: "高橋 誠",
      en: "Makoto Takahashi",
    },
    role: {
      ja: "麦フェス運営プロジェクト リーダー",
      en: "Leader, Wheat Festival Management Project",
    },
    department: "wheat-festival",
    bio: {
      ja: "工学部3年。大規模イベントの企画・運営を通じて、パン屋さんとお客様をつなぐ場を創っています。",
      en: "3rd year Engineering student. Creating spaces that connect bakeries with customers through large-scale event planning.",
    },
    image: "/images/team/placeholder-5.jpg",
    social: {
      instagram: "#",
    },
    joinedYear: 2025,
  },
  {
    id: "6",
    name: {
      ja: "渡辺 愛",
      en: "Ai Watanabe",
    },
    role: {
      ja: "広報担当",
      en: "Public Relations",
    },
    department: "leadership",
    bio: {
      ja: "教養学部2年。SNSやイベントを通じて、私たちの活動を広く発信しています。",
      en: "2nd year Liberal Arts student. Broadcasting our activities through social media and events.",
    },
    image: "/images/team/placeholder-6.jpg",
    social: {
      instagram: "#",
      twitter: "#",
    },
    joinedYear: 2025,
  },
];

export const timeline: TimelineEvent[] = [
  {
    id: "1",
    year: 2025,
    month: 12,
    title: {
      ja: "発起",
      en: "Initiative",
    },
    description: {
      ja: "池田浩明さんと初代代表が発起",
      en: "Hiroaki Ikeda and the founding president initiated the project",
    },
    type: "milestone",
  },
  {
    id: "2",
    year: 2026,
    month: 1,
    day: 11,
    title: {
      ja: "サークル始動",
      en: "Club Launched",
    },
    description: {
      ja: "UTokyo Bakers' Lab として正式に活動開始",
      en: "Officially started activities as UTokyo Bakers' Lab",
    },
    type: "milestone",
  },
  {
    id: "3",
    year: 2026,
    month: 9,
    title: {
      ja: "麦フェス共同参加予定",
      en: "Wheat Festival Joint Participation (Scheduled)",
    },
    description: {
      ja: "NPO法人新麦コレクションと共に麦フェスに参加予定",
      en: "Scheduled to participate in Wheat Festival with NPO Shin-Mugi Collection",
    },
    type: "event",
  },
  {
    id: "4",
    year: 2027,
    month: 3,
    title: {
      ja: "ヨーロッパパン研修（フランス）実施予定",
      en: "European Bread Training (France) Scheduled",
    },
    description: {
      ja: "フランスでの現地研修を通じて、日本のパン文化を世界へ発信",
      en: "Promoting Japanese bread culture globally through on-site training in France",
    },
    type: "event",
  },
];

export const projects: Project[] = [
  {
    id: "problem-definition",
    title: {
      ja: "パン屋の2024年問題定義委員会",
      en: "Bakery 2024 Problem Definition Committee",
    },
    description: {
      ja: "パンの歴史から、業界の今を見つめ直す。ZOPFさんやPrologueさんなどのノウハウを広げ、業界の課題を定義する本の出版、広報活動を行います。",
      en: "Reexamining the industry today through bread history. Publishing books and conducting PR activities to spread know-how from ZOPF and Prologue and define industry challenges.",
    },
    icon: "book",
    color: "primary",
  },
  {
    id: "future-bread",
    title: {
      ja: "22世紀のパンを考える会",
      en: "22nd Century Bread Committee",
    },
    description: {
      ja: "日本のパン文化を、世界の『BUNKA』へ。海外研修や戦略的な広報を通じて、日本のパン文化を世界へ発信し、100年後も残る文化へと昇華させます。",
      en: "Elevating Japanese bread culture to global 'BUNKA'. Promoting Japanese bread culture worldwide through overseas training and strategic PR, transforming it into a culture that will last 100 years.",
    },
    icon: "globe",
    color: "accent",
  },
  {
    id: "wheat-festival",
    title: {
      ja: "麦フェス運営プロジェクト",
      en: "Wheat Festival Management Project",
    },
    description: {
      ja: "NPO法人新麦コレクションにご協力いただき、麦フェスの運営に参加。様々な地域のパン屋さんやラーメン屋さんなどに参加していただくため、責任を持って運営します。",
      en: "Participating in Wheat Festival management with cooperation from NPO Shin-Mugi Collection. Responsibly managing to include bakeries and ramen shops from various regions.",
    },
    icon: "calendar",
    color: "secondary",
  },
];
