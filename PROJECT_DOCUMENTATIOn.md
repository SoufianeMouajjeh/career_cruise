# Career Cruise - Complete Project Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Architecture](#project-architecture)
4. [Setup and Installation](#setup-and-installation)
5. [Core Concepts](#core-concepts)
6. [Component Structure](#component-structure)
7. [State Management](#state-management)
8. [API Integration](#api-integration)
9. [Styling and Design System](#styling-and-design-system)
10. [Routing](#routing)
11. [Performance Optimization](#performance-optimization)
12. [Best Practices](#best-practices)
13. [Future Enhancements](#future-enhancements)

---

## 🎯 Project Overview

**Career Cruise** is a modern job search platform built with React, TypeScript, and Vite. The application allows users to search, filter, and browse job listings from various companies using the JSearch API (RapidAPI).

### Key Features
- 🔍 **Job Search**: Search jobs by title, keyword, and location
- 📑 **Category Filtering**: Filter jobs by categories (All, Design, Engineering, Marketing)
- 📄 **Pagination**: Efficient pagination with 10 jobs per page
- 🎨 **Modern UI**: Clean, responsive design using Tailwind CSS and Shadcn UI
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🔄 **Smooth UX**: Smooth scrolling and loading states for better user experience
- 📱 **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices

---

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.2.0**: Modern JavaScript library for building user interfaces
  - Hooks-based architecture (useState, useEffect, useRef)
  - Functional components
  - Component composition pattern

- **TypeScript 5.0.2**: Strongly-typed superset of JavaScript
  - Type safety
  - Better IDE support
  - Improved code maintainability

### Build Tool
- **Vite 7.3.1**: Next-generation frontend tooling
  - Hot Module Replacement (HMR)
  - Lightning-fast builds
  - Optimized production bundles
  - ES modules native support

### Routing
- **React Router DOM 6.11.2**: Client-side routing
  - Declarative routing
  - Nested routes support
  - Navigation components

### HTTP Client
- **Axios 1.7.9**: Promise-based HTTP client
  - Request/response interceptors
  - Automatic JSON transformation
  - Better error handling than fetch

### UI Components & Styling
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
  - Responsive design utilities
  - Custom color palette
  - Animation utilities
  
- **Radix UI**: Headless UI components
  - `@radix-ui/react-slot`: Composition utilities
  - `@radix-ui/react-tabs`: Tab components
  - `@radix-ui/react-toast`: Toast notifications
  
- **Shadcn UI**: Re-usable component library built on Radix UI
  - Badge, Button, Card, Input components
  - Pagination components
  - Fully customizable

- **Lucide React 0.221.0**: Beautiful icon library
  - Tree-shakeable icons
  - Customizable size and color

- **React Icons 5.4.0**: Additional icon library

### Utilities
- **clsx 2.1.1**: Utility for constructing className strings
- **tailwind-merge 2.6.0**: Merge Tailwind CSS classes without conflicts
- **class-variance-authority 0.7.1**: Type-safe variant styling

### Analytics
- **Vercel Analytics 1.4.1**: Web analytics for performance monitoring

### Development Tools
- **ESLint 8.38.0**: Code linting
- **TypeScript ESLint**: TypeScript-specific linting rules
- **PostCSS & Autoprefixer**: CSS processing

---

## 🏗️ Project Architecture

### Directory Structure
```
career_cruise/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Shadcn UI base components
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── toast.tsx
│   │   │   └── toaster.tsx
│   │   ├── company.tsx     # Company logos carousel
│   │   ├── Header.tsx      # Navigation header
│   │   ├── jobCard.tsx     # Job listing card
│   │   ├── jobcardskeleton.tsx  # Loading skeleton
│   │   ├── Pagination.tsx  # Pagination controls
│   │   ├── search-form.tsx # Job search form
│   │   └── theme-provider.tsx   # Theme context
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Main landing page
│   │   ├── Jobs.tsx        # Jobs listing page
│   │   └── Map.tsx         # Jobs map view
│   ├── lib/                # Utility functions
│   │   ├── api.ts          # API configuration
│   │   └── utils.ts        # Helper functions
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts        # Job and API types
│   ├── styles/             # Static assets
│   │   └── company-placeholder.png
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Global styles
│   └── vite-env.d.ts       # Vite type definitions
├── components.json         # Shadcn UI configuration
├── eslint.config.js        # ESLint configuration
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Project dependencies
```

### Architecture Patterns

#### 1. **Component-Based Architecture**
The application follows a component-based architecture where the UI is divided into reusable, self-contained components.

#### 2. **Container/Presentational Pattern**
- **Container Components** (e.g., `Home.tsx`): Handle data fetching and state management
- **Presentational Components** (e.g., `JobCard.tsx`): Focus on how things look

#### 3. **Composition Pattern**
Components are composed together to build complex UIs from simpler building blocks.

---

## 📦 Setup and Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/SoufianeMouajjeh/career_cruise.git
cd career_cruise
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
VITE_RAPIDAPI_KEY=your_rapidapi_key_here
```

4. **Run development server**
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

5. **Build for production**
```bash
npm run build
```

6. **Preview production build**
```bash
npm run preview
```

### Available Scripts
- `npm run dev`: Start development server with HMR
- `npm run build`: Build for production (TypeScript compilation + Vite build)
- `npm run lint`: Run ESLint to check code quality
- `npm run preview`: Preview production build locally

---

## 💡 Core Concepts

### 1. React Hooks in Use

#### useState
Manages component state:
```typescript
const [jobs, setJobs] = useState<Job[]>([])
const [isLoading, setIsLoading] = useState(true)
const [currentPage, setCurrentPage] = useState(1)
const [activeTab, setActiveTab] = useState('all')
```

#### useEffect
Handles side effects (API calls, subscriptions):
```typescript
useEffect(() => {
  const fetchJobs = async () => {
    // Fetch jobs when activeTab or currentPage changes
  }
  fetchJobs()
}, [activeTab, currentPage])
```

#### useRef
Creates mutable references that persist across renders:
```typescript
const jobsSectionRef = useRef<HTMLDivElement>(null)
// Used for smooth scrolling to jobs section
```

### 2. TypeScript Type System

#### Interface Definitions
```typescript
export interface Job {
  job_id: string;
  employer_name: string;
  employer_logo: string;
  job_title: string;
  job_location: string;
  job_employment_type: string[];
  job_apply_link: string;
  job_description: string;
  job_posted_at_timestamp: number;
  job_posted_at: string;
  job_min_salary?: string;
  Qualifications: string[];
  Responsibilities: string[];
}
```

Benefits:
- Type safety at compile time
- Better IDE autocomplete
- Self-documenting code
- Reduced runtime errors

### 3. Async/Await Pattern
Modern JavaScript for handling asynchronous operations:
```typescript
const fetchJobs = async () => {
  try {
    const response = await axios.request(options)
    setJobs(response.data.data)
  } catch (error) {
    console.error('Error fetching jobs:', error)
  } finally {
    setIsLoading(false)
  }
}
```

---

## 🧩 Component Structure

### Page Components

#### Home.tsx (Main Landing Page)
**Purpose**: Main page that displays job listings with search and filtering capabilities.

**State Management**:
- `jobs`: Array of job listings
- `isLoading`: Loading state for API calls
- `error`: Error message if API fails
- `activeTab`: Current filter category
- `currentPage`: Current pagination page
- `totalPages`: Total number of pages
- `jobsSectionRef`: Reference for smooth scrolling

**Key Features**:
1. Job Search Form
2. Category Tabs (All, Design, Engineering, Marketing)
3. Job Cards Grid
4. Pagination Controls
5. Loading Skeletons
6. Error Handling

**Data Flow**:
```
User Action → State Update → useEffect Trigger → API Call → State Update → UI Re-render
```

### UI Components

#### JobCard.tsx
**Purpose**: Display individual job listing with company info, location, and apply button.

**Props**:
```typescript
{ job: Job }
```

**Features**:
- Company logo with fallback SVG
- Job title and company name
- Location and employment type badges
- Salary information
- Posted date
- Apply button with external link
- Hover effects for better UX

**Design Patterns**:
- Error handling for missing images
- Conditional rendering for optional data
- Lucide icons for visual enhancement

#### SearchForm.tsx
**Purpose**: Search interface for filtering jobs by keyword and location.

**Props**:
```typescript
{ onSearch: (query: string, country: string) => void }
```

**State**:
- `query`: Search keyword
- `country`: Location filter

**Features**:
- Controlled form inputs
- Form submission handling
- Search and location icons
- Responsive design

#### Pagination.tsx
**Purpose**: Navigate between pages of job listings.

**Props**:
```typescript
{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}
```

**Features**:
- Previous/Next buttons
- Page number buttons
- Ellipsis for skipped pages
- Active page highlighting
- Disabled state for edge cases

**Logic**:
```typescript
// Show pages: 1, ..., current-1, current, current+1, ..., last
const pageNumbers = []
for (let i = 1; i <= totalPages; i++) {
  if (
    i === 1 ||
    i === totalPages ||
    (i >= currentPage - 1 && i <= currentPage + 1)
  ) {
    pageNumbers.push(i)
  } else if (
    (i === currentPage - 2 && currentPage > 3) ||
    (i === currentPage + 2 && currentPage < totalPages - 2)
  ) {
    pageNumbers.push(null) // Ellipsis
  }
}
```

#### JobCardSkeleton.tsx
**Purpose**: Loading placeholder while fetching jobs.

**Features**:
- Shimmer animation effect
- Mimics JobCard layout
- Provides visual feedback during loading

#### Company.tsx
**Purpose**: Infinite scrolling carousel of company logos.

**Features**:
- Infinite scroll animation (CSS)
- Duplicated list for seamless loop
- Gradient mask for smooth edges

**CSS Animation**:
```css
@keyframes infinite-scroll {
  from { transform: translateX(0) }
  to { transform: translateX(-100%) }
}
```

#### Header.tsx
**Purpose**: Application navigation bar.

**Features**:
- Logo and brand name
- Navigation links (Jobs, Post a Job)
- Responsive layout
- React Router integration

### Shadcn UI Components

#### Button
Reusable button component with variants:
- Primary: Purple background (#7047EB)
- Secondary: Outline style
- Ghost: Transparent background

#### Card
Container component for content:
- CardContent: Main content area
- Hover effects
- Border styling

#### Badge
Small label for status/category:
- Different color variants
- Rounded corners
- Typography scaling

#### Input
Form input component:
- Custom placeholder color
- Border styling
- Focus states

#### Tabs
Tab navigation component:
- TabsList: Container for tabs
- TabsTrigger: Individual tab button
- Active state styling

---

## 🔄 State Management

### Local Component State
The application uses React's built-in state management (useState) for simplicity.

#### Home Page State Flow
```
┌─────────────────────────────────────┐
│  Initial State                      │
│  - jobs: []                         │
│  - isLoading: true                  │
│  - currentPage: 1                   │
│  - activeTab: 'all'                 │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  useEffect Triggered                │
│  Dependencies: [activeTab, page]    │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  API Call (Axios)                   │
│  - Fetch jobs from JSearch API      │
│  - Include query parameters         │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  State Update                       │
│  - setJobs(data)                    │
│  - setIsLoading(false)              │
│  - setTotalPages(10)                │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│  UI Re-render                       │
│  - Display job cards                │
│  - Show pagination                  │
└─────────────────────────────────────┘
```

### State Update Patterns

#### 1. Loading State Pattern
```typescript
const fetchJobs = async () => {
  setIsLoading(true) // Start loading
  try {
    const response = await axios.request(options)
    setJobs(response.data.data) // Success
  } catch (error) {
    setError('Failed to fetch jobs') // Error
  } finally {
    setIsLoading(false) // Always stop loading
  }
}
```

#### 2. Page Change Pattern
```typescript
const handlePageChange = (page: number) => {
  setCurrentPage(page) // Update state
  jobsSectionRef.current?.scrollIntoView({ // Side effect
    behavior: 'smooth',
    block: 'start'
  })
}
```

#### 3. Tab Change Pattern
```typescript
// Reset page when tab changes
useEffect(() => {
  setCurrentPage(1)
}, [activeTab])
```

---

## 🌐 API Integration

### JSearch API (RapidAPI)

#### Base Configuration
```typescript
const API_CONFIG = {
  url: 'https://jsearch.p.rapidapi.com/search',
  headers: {
    'x-rapidapi-key': 'YOUR_API_KEY',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  }
}
```

#### Request Parameters
```typescript
params: {
  query: string,        // Search term (e.g., 'developer', 'design')
  page: string,         // Current page number
  num_pages: string,    // Number of pages to fetch (set to '1')
  country: string,      // Country code (e.g., 'us')
  date_posted: string   // Filter by date ('all', 'today', 'week', 'month')
}
```

#### Response Structure
```typescript
{
  status: "OK",
  data: [
    {
      job_id: "abc123",
      employer_name: "Tech Company",
      employer_logo: "https://...",
      job_title: "Senior Developer",
      job_location: "New York, NY",
      job_employment_type: ["FULLTIME"],
      job_apply_link: "https://...",
      job_description: "...",
      job_posted_at: "2 days ago",
      job_min_salary: "$120,000",
      // ... more fields
    }
  ]
}
```

### API Call Implementation

#### Fetching Jobs by Category
```typescript
useEffect(() => {
  const fetchJobs = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      const response = await axios.request({
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: activeTab === 'all' ? 'developer' : activeTab,
          page: currentPage.toString(),
          num_pages: '1',
          country: 'us',
          date_posted: 'all'
        },
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      })

      const jobsData = response?.data?.data || []
      setJobs(Array.isArray(jobsData) ? jobsData.slice(0, 10) : [])
      setTotalPages(10)
      
    } catch (error) {
      console.error('Error fetching jobs:', error)
      setError('Failed to fetch jobs. Please try again later.')
      setJobs([])
    } finally {
      setIsLoading(false)
    }
  }

  fetchJobs()
}, [activeTab, currentPage])
```

#### Search Functionality
```typescript
const handleSearch = async (query: string, country: string) => {
  try {
    setIsLoading(true)
    setError(null)
    setCurrentPage(1)
    
    const response = await axios.request({
      method: 'GET',
      url: 'https://jsearch.p.rapidapi.com/search',
      params: {
        query,
        country,
        page: '1',
        num_pages: '1',
        date_posted: 'all'
      },
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'jsearch.p.rapidapi.com'
      }
    })

    const jobsData = response?.data?.data || []
    setJobs(Array.isArray(jobsData) ? jobsData.slice(0, 10) : [])
    setTotalPages(10)
    
  } catch (error) {
    console.error('Error fetching jobs:', error)
    setError('Failed to fetch jobs. Please try again later.')
    setJobs([])
  } finally {
    setIsLoading(false)
  }
}
```

### Error Handling

#### API Error Types
1. **Network Errors**: No internet connection
2. **API Errors**: Invalid API key, rate limiting
3. **Data Errors**: Malformed response data

#### Error Handling Strategy
```typescript
try {
  // API call
} catch (error) {
  console.error('Error fetching jobs:', error)
  setError('Failed to fetch jobs. Please try again later.')
  setJobs([]) // Reset to empty array
} finally {
  setIsLoading(false) // Always stop loading
}
```

---

## 🎨 Styling and Design System

### Tailwind CSS Configuration

#### Custom Theme Extensions
```javascript
theme: {
  extend: {
    colors: {
      customGray: '#b0b0b0',
      // Using CSS variables for theme support
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      }
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)'
    },
    animation: {
      'infinite-scroll': 'infinite-scroll 40s linear infinite'
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' }
      }
    }
  }
}
```

#### Brand Colors
- **Primary Purple**: `#7047EB`
  - Used for: Buttons, active states, brand elements
  - Hover state: `#402591`
- **Gray**: `#b0b0b0`
  - Used for: Placeholders, muted text

### Design Patterns

#### 1. Responsive Design
Mobile-first approach using Tailwind breakpoints:
```tsx
<h1 className="text-4xl sm:text-5xl md:text-6xl">
  Find Your Dream Job
</h1>
```

Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

#### 2. Hover Effects
```tsx
<Card className="group hover:shadow-lg transition-all duration-300 hover:border-[#7047EB]">
  <h3 className="group-hover:text-primary transition-colors">
    {job_title}
  </h3>
</Card>
```

#### 3. Loading States
```tsx
{isLoading ? (
  <JobCardSkeleton />
) : (
  <JobCard job={job} />
)}
```

#### 4. Gradient Backgrounds
```tsx
<section className="bg-gradient-to-b from-background to-secondary/20">
  {/* Content */}
</section>
```

### Component Styling Strategy

#### 1. Utility Classes (Tailwind)
Most styling is done with Tailwind utility classes:
```tsx
<button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
  Click Me
</button>
```

#### 2. Component Variants (CVA)
Using `class-variance-authority` for variant management:
```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border border-input bg-background"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8"
      }
    }
  }
)
```

#### 3. CSS Variables
Global CSS variables for theming:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 262 83% 58%;
  --radius: 0.5rem;
}
```

---

## 🧭 Routing

### React Router Setup

#### Router Configuration (main.tsx)
```typescript
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

#### Route Definitions (App.tsx)
```typescript
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Analytics />
    </div>
  )
}
```

### Navigation Components

#### Link Component
```typescript
<Link to="/" className="text-sm hover:text-[#7047EB]">
  Jobs
</Link>
```

#### Programmatic Navigation
```typescript
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()
navigate('/jobs')
```

---

## ⚡ Performance Optimization

### 1. Pagination Strategy
**Problem**: Loading all jobs at once is slow and wasteful.

**Solution**: Fetch only 10 jobs per page.
```typescript
const jobsPerPage = 10
params: {
  page: currentPage.toString(),
  num_pages: '1' // Fetch only 1 page at a time
}
```

**Benefits**:
- Faster initial load
- Reduced API bandwidth
- Better user experience

### 2. Lazy Loading Images
```typescript
<img
  src={employer_logo}
  alt={employer_name}
  loading="lazy"
  onError={handleImageError}
/>
```

### 3. Debouncing Search
Prevent excessive API calls during typing:
```typescript
const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}
```

### 4. React Key Props
Optimize list rendering:
```typescript
{jobs.map((job: Job) => (
  <JobCard key={job.job_id} job={job} />
))}
```

### 5. Vite Build Optimization
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-slot', '@radix-ui/react-tabs']
        }
      }
    }
  }
})
```

### 6. Code Splitting
```typescript
// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const Jobs = lazy(() => import('./pages/Jobs'))
const Map = lazy(() => import('./pages/Map'))
```

### 7. Memoization
```typescript
import { useMemo } from 'react'

const filteredJobs = useMemo(() => {
  return jobs.filter(job => job.job_location.includes(location))
}, [jobs, location])
```

---

## 🎯 Best Practices

### 1. TypeScript
- ✅ Define interfaces for all data structures
- ✅ Use type annotations for function parameters
- ✅ Avoid `any` type
- ✅ Use strict mode

### 2. Component Design
- ✅ Keep components small and focused
- ✅ Use functional components with hooks
- ✅ Extract reusable logic into custom hooks
- ✅ Separate concerns (UI vs. logic)

### 3. State Management
- ✅ Keep state as close to where it's used as possible
- ✅ Lift state up when needed by multiple components
- ✅ Use useEffect dependencies carefully
- ✅ Clean up side effects

### 4. Error Handling
- ✅ Always handle API errors gracefully
- ✅ Provide user-friendly error messages
- ✅ Use try-catch blocks
- ✅ Reset state on errors

### 5. Accessibility
- ✅ Use semantic HTML elements
- ✅ Provide alt text for images
- ✅ Ensure keyboard navigation works
- ✅ Use ARIA labels where needed

### 6. Performance
- ✅ Implement pagination
- ✅ Use lazy loading for images
- ✅ Avoid unnecessary re-renders
- ✅ Optimize bundle size

### 7. Code Organization
- ✅ Group related files together
- ✅ Use consistent naming conventions
- ✅ Keep files under 300 lines
- ✅ Comment complex logic

---

## 🚀 Future Enhancements

### Feature Roadmap

#### 1. Advanced Filtering
- Salary range filter
- Experience level filter
- Remote/Hybrid/On-site filter
- Company size filter
- Benefits filter

#### 2. User Authentication
- User registration and login
- Save favorite jobs
- Job application tracking
- Profile management

#### 3. Job Details Page
- Full job description
- Company profile
- Similar jobs section
- Apply directly through platform

#### 4. Interactive Map View
- Visualize jobs on a map
- Filter by geographic area
- Cluster jobs by location
- Nearby jobs feature

#### 5. Email Alerts
- Job alert subscriptions
- Daily/weekly digest
- Custom search alerts
- New job notifications

#### 6. Company Profiles
- Company information pages
- All jobs from company
- Company reviews
- Company culture info

#### 7. Resume Builder
- Create and edit resumes
- Upload existing resumes
- Resume templates
- ATS-friendly formatting

#### 8. Analytics Dashboard
- Job market trends
- Salary insights
- Popular skills
- Industry statistics

#### 9. Mobile App
- React Native version
- Push notifications
- Offline support
- Native features

#### 10. AI Features
- Job recommendations
- Resume matching
- Cover letter generator
- Interview prep

---

## 🔧 Troubleshooting

### Common Issues

#### 1. API Key Issues
**Problem**: "Unauthorized" or "403 Forbidden" errors

**Solution**:
- Verify API key is correct
- Check API key hasn't expired
- Ensure API key has proper permissions

#### 2. Port Already in Use
**Problem**: "Port 5173 is already in use"

**Solution**:
```bash
# Kill the process using the port
lsof -ti:5173 | xargs kill -9
# Or let Vite use another port automatically
```

#### 3. Module Not Found Errors
**Problem**: "Cannot find module '@/components/...'"

**Solution**:
- Verify `tsconfig.json` has correct path aliases
- Restart TypeScript server
- Check `vite.config.ts` resolve aliases

#### 4. Slow Performance
**Problem**: Page loads slowly

**Solution**:
- Implement pagination (already done)
- Enable caching
- Optimize images
- Reduce bundle size

---

## 📚 Resources

### Documentation
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Axios Documentation](https://axios-http.com/docs/intro)

### API
- [JSearch API Documentation](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch)

### Learning Resources
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/utility-first)
- [Modern React Patterns](https://www.patterns.dev/posts/react-patterns/)

---

## 📝 Changelog

### Version 1.0.0 (Current)
- ✅ Initial project setup with Vite + React + TypeScript
- ✅ JSearch API integration
- ✅ Job search and filtering
- ✅ Category tabs
- ✅ Pagination (10 jobs per page)
- ✅ Smooth scrolling UX
- ✅ Responsive design
- ✅ Loading states and skeletons
- ✅ Error handling
- ✅ Company carousel
- ✅ Vercel Analytics integration

---

## 👥 Contributing

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation
- Test thoroughly before submitting

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch) for providing job data
- [Shadcn UI](https://ui.shadcn.com/) for beautiful UI components
- [Lucide](https://lucide.dev/) for icon library
- [Vercel](https://vercel.com/) for hosting and analytics

---

## 📧 Contact

**Project Repository**: [https://github.com/SoufianeMouajjeh/career_cruise](https://github.com/SoufianeMouajjeh/career_cruise)

**Developer**: Soufiane Mouajjeh

---

*Last Updated: January 10, 2026*
