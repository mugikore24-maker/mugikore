# 東大パン研究会 Landing Page Design

## Design Overview

A bold, visually unforgettable landing page that captures the club's unique identity as a global, warm, and growth-focused community focused on international relations, economics, food security, business, and marketing through bread.

## Design Philosophy

- **Bold & Memorable**: Distinctive typography, gradients, and animations
- **Warm & Inviting**: Bakery-themed color palette with oranges, ambers, and golden yellows
- **Professional**: Clean, modern aesthetic suitable for a serious academic club
- **Global**: International perspective reflected in design choices

## Typography

### Primary Fonts
- **Noto Sans JP**: Clean, readable Japanese font for body text
- **Space Grotesk**: Bold, distinctive display font for headings

### Typography Features
- Gradient text effects on major headings
- Bold font weights (700-900) for impact
- Responsive sizing (mobile-first approach)

## Color Palette

### Primary Colors (Orange/Amber)
- `#fef7ee` (50) - Lightest background
- `#f07517` (500) - Main brand color
- `#ba420c` (700) - Dark accent
- Used for: Main CTAs, hero elements, brand identity

### Secondary Colors (Warm Brown)
- `#fdf8f6` (50) - Subtle background
- `#bfa094` (500) - Neutral mid-tone
- `#43302b` (900) - Deep brown
- Used for: Supporting elements, text

### Accent Colors (Golden Yellow)
- `#fff9ed` (50) - Light background
- `#f28d1a` (500) - Vibrant accent
- `#461b07` (950) - Dark brown
- Used for: Highlights, special sections

## Sections

### 1. Hero Section
**Purpose**: Immediate impact and brand message

**Features**:
- Full-screen immersive experience
- Animated background gradients with floating shapes
- Giant gradient text: "世界を変えるパンの力"
- Compelling subtitle about global issues
- Dual CTAs: "今すぐ参加する" + "活動を見る"
- Live stats counter (150+ members, 50+ events, 12+ countries)
- Scroll indicator animation

**Animations**:
- Staggered fade-in for all elements
- Floating background orbs
- Pulsing scroll indicator
- Hover effects on buttons with glow

### 2. About Section
**Purpose**: Explain the club's mission and values

**Features**:
- Section with "パンから始まる世界への挑戦"
- 4 pillar cards with icons:
  - グローバル視点 (Global perspective)
  - ビジネス思考 (Business mindset)
  - コミュニティ (Community)
  - 社会貢献 (Social contribution)
- Mission statement in highlighted box
- Grain texture overlay for warmth

**Animations**:
- Scroll-triggered staggered animations
- Card hover effects (lift + shadow)
- Icon scale on hover

### 3. Highlights Section
**Purpose**: Showcase achievements and credibility

**Features**:
- 6 achievement cards:
  - International food contest win
  - Corporate collaborations
  - Research paper publications
  - TEDxUTokyo talk
  - International events
  - Startup creation
- Stats dashboard with 4 key metrics
- Member testimonial quote

**Animations**:
- Sequential card reveals
- Number counter animations
- Gradient background pattern

### 4. CTA Section
**Purpose**: Drive conversions and sign-ups

**Features**:
- Two-column layout (content + visual card)
- 4 key benefits with checkmarks
- Dual CTAs: "入会フォームへ" + "資料をダウンロード"
- Social media links
- New student orientation info card
- Animated card stack effect

**Animations**:
- Parallax floating cards
- Staggered list reveals
- Social icon hover rotations

## Animations & Micro-interactions

### Framer Motion Implementations
1. **Scroll-triggered animations**: `useInView` hook for progressive reveals
2. **Staggered children**: Sequential reveals for lists and grids
3. **Hover states**: Scale, rotate, and shadow transitions
4. **Page load**: Smooth entry animations for hero
5. **Mobile menu**: Slide and fade animations

### CSS Animations
1. **Gradient text**: Animated background clip
2. **Glow effects**: Box shadow animations
3. **Grain texture**: SVG filter overlay
4. **Custom scrollbar**: Themed with primary colors
5. **Smooth scroll**: Native CSS scroll behavior

## Responsive Design

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile Optimizations
- Hamburger menu with slide-out animation
- Stacked sections instead of columns
- Reduced font sizes
- Touch-friendly button sizes (minimum 44x44px)
- Optimized images and animations

## Accessibility

### ARIA Labels
- Navigation landmarks
- Button labels in Japanese
- Screen reader-friendly animations

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Section elements for major areas
- Nav elements for navigation

### Keyboard Navigation
- Tab-accessible all interactive elements
- Focus states on links and buttons
- Escape key closes mobile menu

## SEO Optimization

### Meta Tags
```tsx
title: "東大パン研究会 | UTokyo Bakers' Lab - 世界を変えるパンの力"
description: "国際関係、経済、食糧安全保障、ビジネス、マーケティングを学ぶ..."
keywords: [国際関係, 経済, 食糧安全保障, ビジネス, マーケティング, サークル]
openGraph: Configured for social sharing
```

### Performance
- Next.js 15 App Router for optimal loading
- Turbopack for fast development builds
- Font optimization with `next/font`
- Lazy-loaded animations with Framer Motion

## Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Noto Sans JP, Space Grotesk

## Files Created

### Components
- `/components/features/HeroSection.tsx` - Hero with animated background
- `/components/features/AboutSection.tsx` - Mission and pillars
- `/components/features/HighlightsSection.tsx` - Achievements and stats
- `/components/features/CTASection.tsx` - Conversion-focused section
- `/components/layout/Header.tsx` - Animated navigation with scroll effect

### Styles
- `/app/globals.css` - Custom CSS variables, gradients, utilities

### Configuration
- Updated fonts in `layout.tsx`
- Custom Tailwind config for font families
- Enhanced metadata for SEO

## Next Steps

1. **Add Images**: Place real club photos in sections
2. **Create Other Pages**: About, Activities, Members, Contact
3. **Form Integration**: Connect CTA buttons to actual forms
4. **Analytics**: Add Google Analytics or similar
5. **Performance Optimization**: Image optimization, lazy loading
6. **Content Management**: Consider CMS for easy updates
7. **Testing**: Cross-browser and device testing

## Launch Checklist

- [ ] Add real images and content
- [ ] Test on multiple devices
- [ ] Verify all links work
- [ ] Test form submissions
- [ ] Check load times
- [ ] Verify SEO tags
- [ ] Set up analytics
- [ ] Configure social media links
- [ ] Test accessibility
- [ ] Deploy to production

---

**Design Completed**: January 2026
**Version**: 1.0
