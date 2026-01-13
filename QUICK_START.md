# Career Cruise - Quick Start Guide

## 🚀 Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to `http://localhost:5173` (or the port shown in terminal)

---

## 📖 What This Project Does

Career Cruise is a modern job search platform that:
- Searches real job listings from the JSearch API
- Filters jobs by category (All, Design, Engineering, Marketing)
- Shows 10 jobs per page with smooth pagination
- Provides a beautiful, responsive UI

---

## 🏗️ Project Structure (Simplified)

```
career_cruise/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # Base components (buttons, cards, etc.)
│   │   ├── Header.tsx   # Navigation bar
│   │   ├── jobCard.tsx  # Individual job display
│   │   ├── Pagination.tsx  # Page navigation
│   │   └── search-form.tsx # Search interface
│   ├── pages/           # Page components
│   │   └── Home.tsx     # Main page with jobs
│   ├── types/           # TypeScript definitions
│   └── App.tsx          # Root component
└── package.json         # Dependencies
```

---

## 🔑 Key Files to Understand

### 1. `src/pages/Home.tsx` (Main Logic)
- Fetches jobs from API
- Manages pagination state
- Handles search and filtering

### 2. `src/components/jobCard.tsx`
- Displays individual job information
- Shows company logo, title, location, salary

### 3. `src/components/Pagination.tsx`
- Page navigation controls
- Previous/Next buttons

### 4. `src/types/index.ts`
- TypeScript interfaces for Job data

---

## 🛠️ Key Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite 7** - Build tool (super fast!)
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - API calls
- **JSearch API** - Job data source

---

## 📝 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

---

## 🎨 How Pagination Works

1. **User clicks page button** → Updates `currentPage` state
2. **`useEffect` detects change** → Triggers API call
3. **API fetches 10 jobs** → For that specific page
4. **Page scrolls smoothly** → To jobs section
5. **UI updates** → Shows new jobs

---

## 🔍 How Search Works

1. **User enters keyword + location** → Types in search form
2. **Clicks "Find Jobs"** → Triggers `handleSearch`
3. **API call with parameters** → Sends query to JSearch
4. **Results displayed** → Shows matching jobs
5. **Page resets to 1** → Shows first page of results

---

## 🎯 Common Tasks

### Add a New Category Tab
Edit `src/pages/Home.tsx`:
```tsx
<TabsTrigger value="sales">
  Sales
</TabsTrigger>
```

### Change Jobs Per Page
Edit `src/pages/Home.tsx`:
```typescript
const jobsPerPage = 20 // Change from 10 to 20
```

### Modify Card Styling
Edit `src/components/jobCard.tsx`:
```tsx
<Card className="your-custom-classes">
```

### Change Primary Color
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#your-color-here'
}
```

---

## 🐛 Troubleshooting

### Port Already in Use?
The server will automatically try another port. Check the terminal output for the actual URL.

### API Not Working?
Check that your RapidAPI key is valid in `src/pages/Home.tsx`.

### TypeScript Errors?
Make sure all dependencies are installed:
```bash
npm install
```

---

## 📚 Learn More

See `PROJECT_DOCUMENTATION.md` for complete, in-depth documentation covering:
- Detailed architecture
- Component breakdown
- State management patterns
- API integration details
- Performance optimization
- Best practices
- Future roadmap

---

## 🎓 Learning Path

### Beginner Level
1. Understand component structure
2. Learn how state updates UI
3. Follow data flow in Home.tsx

### Intermediate Level
1. Understand useEffect dependencies
2. Learn TypeScript types
3. Study API integration patterns

### Advanced Level
1. Optimize performance
2. Add new features
3. Implement testing

---

## 💡 Next Steps

1. ✅ Run the project
2. ✅ Browse the code
3. ✅ Read `PROJECT_DOCUMENTATION.md`
4. ✅ Make small changes
5. ✅ Add a new feature

---

**Ready to dive deeper?** Open `PROJECT_DOCUMENTATION.md` for the complete guide!
