# Ankit Singhania - Portfolio Website

A modern, responsive portfolio website built with React.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo
[View Portfolio](https://your-portfolio-url.vercel.app)

## 📋 Features
- ✨ Modern and clean design
- 🌑 Dark/Light mode toggle
- 📱 Fully responsive (desktop, tablet, mobile)
- 🎨 Smooth animations with Framer Motion
- ⚡ Fast loading with Vite
- 🔍 SEO optimized
- 🎯 TypeScript for better development experience

## 🛠️ Tech Stack
- **Frontend**: React.js 18+ with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **UI Components**: Radix UI (shadcn/ui)

## 📁 Project Structure
```
src/
├── components/
│   ├── ui/              # Reusable UI components (buttons, cards, etc.)
│   ├── Navbar.tsx       # Navigation component
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Projects.tsx     # Projects showcase
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer component
│   ├── ThemeProvider.tsx # Theme context provider
│   └── ThemeToggle.tsx  # Dark/light mode toggle
├── pages/
│   └── Index.tsx        # Main page component
├── lib/
│   └── utils.ts         # Utility functions
├── hooks/               # Custom React hooks
├── App.tsx              # Main App component
├── main.tsx             # Entry point
└── index.css            # Global styles and design tokens
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager



### 🔧 Local Development Setup

1. **Install dependencies**:
```bash
npm install
```

2. **Start the development server**:
```bash
npm run dev
```

3. **Open your browser** and navigate to `http://localhost:5173`

The development server supports hot-reload, so changes will appear instantly.

### 🏗️ Building for Production

1. **Create a production build**:
```bash
npm run build
```

2. **Preview the production build locally** (optional):
```bash
npm run preview
```

The built files will be in the `dist/` directory.

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to connect your GitHub repository

### Option 2: Netlify
1. **Via Netlify CLI**:
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

2. **Via Netlify Web Interface**:
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### Option 3: GitHub Pages
1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json scripts**:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**:
```bash
npm run deploy
```

4. **Enable GitHub Pages** in your repository settings and set source to `gh-pages` branch

### Option 4: Other Hosting Platforms
The `dist/` folder after running `npm run build` contains static files that can be hosted on:
- Firebase Hosting
- AWS S3 + CloudFront
- DigitalOcean App Platform
- Heroku (with static buildpack)


## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔧 Dependencies

### Main Dependencies
- `react` & `react-dom` - React framework
- `typescript` - Type safety
- `vite` - Build tool
- `tailwindcss` - CSS framework
- `framer-motion` - Animations
- `lucide-react` - Icons
- `next-themes` - Theme management

### UI Components
- `@radix-ui/*` - Accessible UI primitives
- `class-variance-authority` - Component variants
- `clsx` & `tailwind-merge` - Class utilities

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**:
```bash
# Kill process on port 5173
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

2. **Build errors**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

3. **Styling issues**:
   - Ensure Tailwind CSS is properly configured
   - Check `tailwind.config.ts` for correct paths

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing
Feel free to fork this repository and submit pull requests for improvements.

## 📞 Contact
- **Email**: ankitsinghaniaaks@gmail.com
- **GitHub**: [AnkitsinghaniaAKS](https://github.com/AnkitsinghaniaAKS)
- **LinkedIn**: [ankit-singhania-aks](https://linkedin.com/in/ankit-singhania-aks)
- **LeetCode**: [AnkitSinghania](https://leetcode.com/u/AnkitSinghania/)

---
