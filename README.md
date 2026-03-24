# Obadiah Louis Adamu — Portfolio

Personal portfolio website for **Obadiah Louis Adamu**, Data Scientist & AI Engineer.

Built with **React (Vite)**, **Tailwind CSS**, and deployed via **GitHub Pages**.

---

## 🚀 Local Development

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/lobadiah/obadiah-portfolio.git
cd obadiah-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to `./dist`.

---

## 🌐 Deploying to GitHub Pages

### Step 1 — Verify `vite.config.js`

Make sure the `base` is set to your repository name:

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/obadiah-portfolio/',   // ← must match your repo name exactly
})
```

### Step 2 — Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 3 — Add deploy scripts to `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 4 — Deploy

```bash
npm run deploy
```

This builds the site and pushes the `dist/` folder to the `gh-pages` branch.

### Step 5 — Configure GitHub Repository Settings

1. Go to your repository on GitHub
2. Navigate to **Settings → Pages**
3. Under **Source**, select branch: `gh-pages`, folder: `/ (root)`
4. Click **Save**
5. Your site will be live at: `https://lobadiah.github.io/obadiah-portfolio/`

---

## 🔄 Automated Deployment (GitHub Actions)

Create `.github/workflows/deploy.yml` for CI/CD:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'

      - name: Install
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 📁 Project Structure

```
obadiah-portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── .gitignore
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── SectionWrapper.jsx
```

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|------|---------|--------|
| React | 18 | UI framework |
| Vite | 4 | Build tool |
| Tailwind CSS | 3 | Styling |
| CSS Variables | — | Theming |
| Intersection Observer | — | Scroll animations |

---

## 📬 Contact

- **Email**: louisobadiah@gmail.com
- **GitHub**: [github.com/lobadiah](https://github.com/lobadiah)
- **LinkedIn**: [linkedin.com/in/louisobadiah](https://linkedin.com/in/louisobadiah)

---

*Never Give Up.* 🔥
