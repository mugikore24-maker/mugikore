# About & Team Pages Documentation

## Overview

Comprehensive About and Team pages have been created in both Japanese and English, showcasing the club's mission, projects, timeline, and team members with a consistent, bold aesthetic.

## Pages Created

### About Pages

#### Japanese: `/about`
**Route:** [app/about/page.tsx](app/about/page.tsx)

**Sections:**
1. **Hero Section** - Introduction with language switcher
2. **Our Story** - Founding spirit and mission (split layout)
3. **Three Projects** - Cards for each major project
4. **Core Values** - 4 pillars: On-Site Focus, Passion, Community, Long-term Vision
5. **Timeline** - Visual timeline of major milestones
6. **Activity Information** - Meeting schedule, location, bakery visits
7. **Membership Benefits** - List of 6 key benefits with CTA
8. **CTA Section** - Links to team and contact pages

#### English: `/about/en`
**Route:** [app/about/en/page.tsx](app/about/en/page.tsx)

Same structure as Japanese version with English content.

### Team/Members Pages

#### Japanese: `/members`
**Route:** [app/members/page.tsx](app/members/page.tsx)

**Sections:**
1. **Hero Section** - Team introduction with language switcher
2. **Stats Dashboard** - Member count, projects, departments, founding year
3. **Filter Section** - Interactive department filters:
   - 全員 (All)
   - 運営チーム (Leadership)
   - 2024年問題定義委員会 (Problem Definition)
   - 22世紀のパンを考える会 (Future Bread)
   - 麦フェス運営 (Wheat Festival)
4. **Team Grid** - Filterable member cards
5. **Recruitment CTA** - Join us section
6. **Social Media CTA** - Instagram follow prompt

#### English: `/members/en`
**Route:** [app/members/en/page.tsx](app/members/en/page.tsx)

Same structure with English content.

## Components Created

### 1. Timeline Component
**File:** [components/ui/Timeline.tsx](components/ui/Timeline.tsx)

**Features:**
- Vertical timeline with alternating sides on desktop
- Color-coded events by type (milestone/achievement/event)
- Icons for each event type
- Scroll-triggered animations
- Responsive: mobile shows all on left, desktop alternates

**Props:**
```typescript
interface TimelineProps {
  events: TimelineEvent[];
  language?: "ja" | "en";
}
```

**Usage:**
```tsx
import Timeline from "@/components/ui/Timeline";
import { timeline } from "@/lib/data/team";

<Timeline events={timeline} language="ja" />
```

### 2. TeamMemberCard Component
**File:** [components/ui/TeamMemberCard.tsx](components/ui/TeamMemberCard.tsx)

**Features:**
- Member photo with fallback (gradient + initial)
- Hover effects: image scale, social links reveal
- Social media icons (Instagram, Twitter, LinkedIn)
- Name, role badge, bio
- Joined year display
- Animated entrance
- Gradient bottom bar on hover

**Props:**
```typescript
interface TeamMemberCardProps {
  member: TeamMember;
  language?: "ja" | "en";
  index?: number;
}
```

**Usage:**
```tsx
import TeamMemberCard from "@/components/ui/TeamMemberCard";

<TeamMemberCard
  member={member}
  language="ja"
  index={0}
/>
```

## Data Structures

### Types
**File:** [lib/types/team.ts](lib/types/team.ts)

```typescript
interface TeamMember {
  id: string;
  name: { ja: string; en: string };
  role: { ja: string; en: string };
  department?: string;
  bio: { ja: string; en: string };
  image?: string;
  social?: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  joinedYear?: number;
}

interface TimelineEvent {
  id: string;
  year: number;
  month?: number;
  title: { ja: string; en: string };
  description: { ja: string; en: string };
  type?: "milestone" | "achievement" | "event";
}

interface Project {
  id: string;
  title: { ja: string; en: string };
  description: { ja: string; en: string };
  icon: string;
  color: "primary" | "secondary" | "accent";
}
```

### Data File
**File:** [lib/data/team.ts](lib/data/team.ts)

Contains:
- **teamMembers[]** - Array of 6 sample team members
- **timeline[]** - 8 timeline events from 2025-2027
- **projects[]** - 3 main projects

## Content Included

### Based on Your Documents

#### Projects
1. **パン屋の2024年問題定義委員会 (Bakery 2024 Problem Definition Committee)**
   - Focus: Past-Present
   - Activities: ZOPF interviews, book publishing, PR activities

2. **22世紀のパンを考える会 (22nd Century Bread Committee)**
   - Focus: Future
   - Activities: International training, global BUNKA promotion

3. **麦フェス運営プロジェクト (Wheat Festival Management Project)**
   - Partner: NPO法人新麦コレクション
   - Activities: Event management, connecting bakeries and ramen shops

#### Timeline Highlights
- 2025/01: Organization founded
- 2025/01: First ZOPF interview
- 2025/01: Bakery visit project launched (10+ visits)
- 2025/02: NPO Shin-Mugi Collection partnership
- 2025/03: First bakery study session (planned)
- 2025/06: Book publication project (planned)
- 2026/03: Wheat Festival 2026 (planned)
- 2027/03: France training program (planned)

#### Core Mission
"パン屋を中心にして、日本の食文化を定義し直す"
(Redefining Japanese food culture, centered on bakeries)

Inspired by Gauguin's question: "Where do we come from? What are we? Where are we going?"

## Features

### Bilingual Support
- Full content in Japanese and English
- Easy language switching via links in hero sections
- Consistent URLs: `/about`, `/about/en`, `/members`, `/members/en`

### Interactive Elements
- **Department Filtering**: Click to filter team members by department
- **Animated Transitions**: Framer Motion for smooth page loads
- **Hover Effects**: Cards lift, images scale, social icons appear
- **Scroll Animations**: Progressive reveals as you scroll

### Responsive Design
- Mobile-first approach
- Hamburger menu on mobile
- Grid layouts adapt: 1 col → 2 cols → 3 cols
- Timeline switches from left-aligned to alternating

### Accessibility
- ARIA labels on all interactive elements
- Keyboard navigation support
- Semantic HTML structure
- High contrast text

## Adding Content

### Adding New Team Members

Edit [lib/data/team.ts](lib/data/team.ts):

```typescript
export const teamMembers: TeamMember[] = [
  // ... existing members
  {
    id: "7",
    name: {
      ja: "新メンバー名",
      en: "New Member Name",
    },
    role: {
      ja: "役職",
      en: "Role",
    },
    department: "leadership", // or other department
    bio: {
      ja: "日本語の自己紹介",
      en: "English bio",
    },
    image: "/images/team/member-7.jpg",
    social: {
      instagram: "https://instagram.com/...",
      twitter: "https://twitter.com/...",
    },
    joinedYear: 2025,
  },
];
```

### Adding Timeline Events

```typescript
export const timeline: TimelineEvent[] = [
  // ... existing events
  {
    id: "9",
    year: 2025,
    month: 4,
    title: {
      ja: "新しいイベント",
      en: "New Event",
    },
    description: {
      ja: "イベントの説明",
      en: "Event description",
    },
    type: "event", // or "milestone" or "achievement"
  },
];
```

### Adding Projects

```typescript
export const projects: Project[] = [
  // ... existing projects
  {
    id: "new-project",
    title: {
      ja: "新プロジェクト",
      en: "New Project",
    },
    description: {
      ja: "プロジェクトの説明",
      en: "Project description",
    },
    icon: "calendar", // or "book", "globe"
    color: "primary", // or "secondary", "accent"
  },
];
```

## Adding Member Photos

1. Place photo in `/public/images/team/`
2. Name it descriptively: `member-name.jpg`
3. Update member data:
   ```typescript
   image: "/images/team/member-name.jpg"
   ```

**Recommended specs:**
- Size: 800x800px minimum
- Format: JPG or PNG
- Aspect ratio: 1:1 (square)
- File size: <500KB

## Styling Notes

### Colors
- Primary: Orange/amber tones
- Secondary: Warm browns
- Accent: Golden yellows

### Typography
- Headings: Space Grotesk (bold, display font)
- Body: Noto Sans JP (clean Japanese font)
- Gradient text on major headings

### Animations
- Scroll-triggered: useInView from Framer Motion
- Hover: scale, lift, shadow
- Page load: staggered children
- Filter: smooth transitions

## Next Steps

1. **Add Real Photos**: Replace placeholder images with actual member photos
2. **Update Social Links**: Add real Instagram/Twitter URLs
3. **Expand Team**: Add more members as they join
4. **Add Testimonials**: Consider adding member quotes/testimonials
5. **Blog Integration**: Link to activity blog posts
6. **Photo Gallery**: Add gallery of bakery visits and events

## Navigation Links

Update [components/layout/Header.tsx](components/layout/Header.tsx) if needed:

```typescript
const navLinks = [
  { href: "/#about", label: "私たちについて" },
  { href: "/about", label: "About" }, // Add if needed
  { href: "/members", label: "メンバー" },
  { href: "/activities", label: "活動内容" },
  { href: "/contact", label: "お問い合わせ" },
];
```

## SEO Optimization

Both pages include proper metadata. To enhance:

1. Add Open Graph images for social sharing
2. Add structured data (JSON-LD) for team members
3. Update meta descriptions per page
4. Add canonical URLs for language versions

## Testing Checklist

- [ ] Test language switching on all pages
- [ ] Test department filtering on team pages
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Check hover effects
- [ ] Verify scroll animations
- [ ] Test with real member photos
- [ ] Check accessibility (keyboard nav, screen readers)
- [ ] Test social media links

---

**Pages Created**: 4 (About JA/EN, Members JA/EN)
**Components**: 2 (Timeline, TeamMemberCard)
**Data Files**: 2 (types, team data)
**Total Lines**: ~2000+
