# UTokyo Bakers' Lab Website

東京大学パン研究会の公式ウェブサイト

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Code Quality:** ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mugikore24-maker/mugikore.git
cd mugikore
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
/app                # Next.js App Router pages and API routes
/components         # Reusable React components
  /ui              # Basic UI components
  /layout          # Layout components (header, footer)
  /features        # Feature-specific components
/lib               # Utilities and configurations
  /db              # Database setup
  /utils           # Helper functions
  /constants       # App constants
/public            # Static assets
```

## Color Palette

The site uses a warm, bakery-themed color palette:

- **Primary:** Orange/amber tones (#f07517)
- **Secondary:** Warm browns (#bfa094)
- **Accent:** Golden yellows (#f28d1a)

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run lint` and `npm run format`
4. Submit a pull request

## License

ISC
