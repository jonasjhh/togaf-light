# TOGAF ADM Navigator

A web-based tool for navigating and exploring the TOGAF Architecture Development Method (ADM) phases, principles, and guidelines. Built with TypeScript.

## What it does

The TOGAF ADM Navigator helps architecture teams:
- **Navigate** through all 10 ADM phases (Preliminary, A-H, Requirements Management)
- **Explore** detailed information about each phase including purpose, roles, principles, and guidelines
- **Filter** principles by tags to see architecture guidance across all phases
- **Access** official TOGAF documentation links for each phase

## Features

- 📋 Complete coverage of all TOGAF ADM phases
- 🏷️ Tag-based filtering for principles (security, governance, business, etc.)
- 👥 Role descriptions for each phase
- 📖 Easily editable phase data in TypeScript files
- 🎨 Clean, modern UI with smooth animations
- 📱 Responsive design for mobile and desktop

## Prerequisites

**Important: This project uses pnpm, not npm.**

Install pnpm if you haven't already:
```bash
npm install -g pnpm
```

Or use mise (recommended):
```bash
mise install
```

## Getting Started

### Install dependencies
```bash
pnpm install
```

### Development
Run the development server:
```bash
pnpm dev
# or with mise
mise exec -- pnpm dev
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

### Build
```bash
pnpm build
# or with mise
mise exec -- pnpm build
```

## Project Structure

```
src/
├── components/       # UI components
│   ├── ADMCycle.ts       # Main phase overview
│   ├── PhaseDetail.ts    # Individual phase details
│   └── TagView.ts        # Tag-filtered principle view
├── data/            # Phase data files
│   ├── preliminary.ts
│   ├── architecture-vision.ts
│   ├── business-architecture.ts
│   ├── information-systems-architecture.ts
│   ├── technology-architecture.ts
│   ├── opportunities-solutions.ts
│   ├── migration-planning.ts
│   ├── implementation-governance.ts
│   ├── architecture-change-management.ts
│   ├── requirements-management.ts
│   └── index.ts
├── models/          # TypeScript interfaces
│   └── ADMPhase.ts
└── main.ts          # Application entry point
```

## Customizing Phase Content

All phase content is easily editable in the `src/data/` directory. Each phase file exports an `ADMPhaseData` object with:

- **id**: Unique phase identifier
- **name**: Full phase name
- **shortName**: Abbreviated name for display
- **description**: Brief overview of the phase
- **purpose**: Detailed purpose statement
- **roles**: Array of key roles and their descriptions
- **principles**: Array of principles with titles, descriptions, and tags
- **guidelines**: List of actionable guidelines
- **links**: External documentation links
- **color**: Phase color for UI theming

### Example: Editing a Phase

Edit `src/data/preliminary.ts`:

```typescript
export const preliminaryPhase: ADMPhaseData = {
  id: 'preliminary',
  name: 'Preliminary Phase',
  shortName: 'Preliminary',
  description: 'Your custom description...',
  purpose: 'Your custom purpose...',
  roles: [
    {
      name: 'Your Role',
      description: 'Role description'
    }
  ],
  principles: [
    {
      title: 'Your Principle',
      description: 'Principle description',
      tags: ['governance', 'security']  // Used for tag filtering
    }
  ],
  guidelines: [
    'Your guideline 1',
    'Your guideline 2'
  ],
  links: [
    {
      title: 'Documentation',
      url: 'https://your-link.com',
      description: 'Optional description'
    }
  ],
  color: '#667eea'  // Hex color for this phase
};
```

After editing, rebuild:
```bash
pnpm build
```

The changes will be automatically deployed via GitHub Actions when pushed.

## Tag System

Principles can be tagged with any keywords. Common tags include:
- `governance`
- `security`
- `business`
- `data`
- `stakeholder`
- `risk`
- `process`
- `cloud`
- `compliance`

Use the tag view to see all principles across all phases related to a specific tag.

## Technology Stack

- TypeScript
- Vanilla JavaScript (no frameworks)
- ESBuild for bundling
- GitHub Pages for hosting

## License

ISC
