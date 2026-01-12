# EduCourse - Online Learning Platform (Frontend)

A modern, responsive React-based course learning platform with role-based access control, built with Vite, Tailwind CSS, and modern best practices. This is a production-ready frontend application designed to integrate with a Golang backend API.

## 🚀 Features

### Core Features
- **Three-Role System**: Admin, Instructor, and Student roles with different dashboards
- **Course Management**: Browse, enroll, and learn from courses
- **Video Learning**: Integrated video player for course content
- **Interactive Quizzes**: Assessment system with scoring
- **Progress Tracking**: Monitor learning progress with visual indicators
- **Modern UI/UX**: Clean, responsive design without gradients

### User Features
- User registration and authentication
- Course discovery with advanced filtering
- Course enrollment and progress tracking
- Dashboard with learning statistics
- Course review and rating system
- Certificate generation (ready for integration)

### Instructor Features
- Course creation and management
- Student progress analytics
- Revenue tracking
- Course content organization

### Admin Features
- User and course management
- Platform analytics
- System settings and moderation
- Revenue reports

## 📋 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.2.0 | UI Framework |
| React Router | 6.20.1 | Client-side routing with protected routes |
| Tailwind CSS | 3.4.1 | Utility-first styling with custom design system |
| Zustand | 4.4.7 | State management with persistence |
| Axios | 1.6.5 | HTTP client with request/response interceptors |
| React Hook Form | 7.50.0 | Efficient form management |
| Zod | 3.22.4 | Runtime schema validation |
| Lucide React | 0.338.0 | Icon library (30+ icons) |
| Vite | 7.2.4 | Build tool with HMR |

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── common/           # FormElements, Navigation
│   │   ├── course/           # CourseCard, CourseGrid, CourseSidebar
│   │   └── forms/            # Form components (ready for expansion)
│   ├── pages/                # Page components (routable)
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── UserDashboardPage.jsx
│   │   ├── CourseListPage.jsx
│   │   ├── CourseDetailPage.jsx
│   │   └── CourseLearnPage.jsx
│   ├── layouts/              # Layout components for different page types
│   │   └── MainLayout.jsx    # AdminLayout, InstructorLayout, UserLayout
│   ├── routes/               # Route protection and access control
│   │   └── ProtectedRoute.jsx
│   ├── services/             # API service layer (30+ methods)
│   │   ├── apiClient.js      # Axios instance with interceptors
│   │   ├── authService.js    # Authentication API
│   │   ├── courseService.js  # Course operations API
│   │   ├── userService.js    # User management API
│   │   └── analyticsService.js
│   ├── store/                # Zustand global state with persist
│   │   ├── authStore.js      # Authentication state
│   │   └── courseStore.js    # Course data state
│   ├── hooks/                # Custom React hooks (8 hooks)
│   │   ├── useAuth.js        # Authentication operations
│   │   ├── useCourse.js      # Course data fetching (7 hooks)
│   │   └── useCustom.js      # Utility hooks (useForm, useAsync, etc)
│   ├── utils/                # Utility functions and helpers
│   │   ├── helpers.js        # 20+ utility functions
│   │   ├── validation.js     # Zod validation schemas (8 schemas)
│   │   └── classNames.js     # Tailwind styling utilities
│   ├── constants/            # App constants
│   │   └── index.js
│   ├── styles/               # Global CSS
│   │   └── globals.css       # Tailwind directives + custom animations
│   ├── App.jsx               # Main app with routing
│   └── main.jsx              # Entry point
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS plugins
├── vite.config.js            # Vite build configuration
├── .env.local                # Environment variables
├── .env.example              # Environment template
└── package.json              # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary**: `#0ea5e9` (sky-500)
- **Secondary**: `#0f172a` (slate-900)
- **Accent**: `#06b6d4` (cyan-500)
- **Success**: `#10b981` (emerald-500)
- **Warning**: `#f59e0b` (amber-500)
- **Error**: `#ef4444` (red-500)

### Responsive Breakpoints
- `xs`: 320px (mobile)
- `sm`: 640px (tablet)
- `md`: 768px (small desktop)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)
- `2xl`: 1536px (extra large)

### Component Variants
- **Button**: 6 variants (primary, secondary, danger, success, outline, ghost) × 3 sizes (sm, md, lg)
- **Input/Textarea**: Error states, touched states, form integration
- **Card**: Base and flat variants
- **Badge**: 5 color variants
- **Modal**: Size variants (sm-2xl)

## 🔑 Key Components

### FormElements.jsx (11 components)
```jsx
<Button variant="primary" size="md" isLoading={false} />
<Input label="Email" error="" touched={false} />
<Select options={[]} label="Role" />
<Modal isOpen={true} onClose={() => {}} size="md" />
<Card className="..." />
<Badge variant="primary">Badge</Badge>
<Loader size="md" />
<Alert variant="success" message="Success!" />
<Pagination currentPage={1} totalPages={10} />
<Tabs tabs={[{value, label}]} activeTab="" />
```

### Custom Hooks (8 hooks)
```jsx
// Authentication
const { handleLogin, handleRegister, handleLogout } = useAuth();

// Course data
const { courses, loading } = useCourses();
const { course } = useCourse(courseId);
const { lessons } = useLessons(courseId);

// Utilities
const { values, errors, handleChange } = useForm(initialValues, onSubmit);
const { data, loading } = useAsync(asyncFn);
const { value, setValue } = useLocalStorage(key, initialValue);
```

### API Services (30+ methods)

**authService.js**
- `login()`, `register()`, `logout()`, `getCurrentUser()`
- `updateProfile()`, `changePassword()`, `refreshToken()`
- `verifyEmail()`, `requestPasswordReset()`, `resetPassword()`

**courseService.js**
- `getCourses()`, `getCourseById()`, `createCourse()`, `updateCourse()`
- `getLessons()`, `getLesson()`, `createLesson()`
- `getQuizzes()`, `getQuiz()`, `submitQuiz()`
- `enrollCourse()`, `getUserProgress()`, `markLessonComplete()`
- `getCourseReviews()`, `createReview()`

**userService.js**
- `getProfile()`, `updateProfile()`, `uploadProfilePicture()`
- `getEnrolledCourses()`, `getLearningStats()`, `getCertificates()`
- `getUsers()`, `updateUserRole()`, `deleteUser()`

**analyticsService.js**
- `getInstructorStats()`, `getCourseAnalytics()`, `getStudentEngagement()`
- `getAdminStats()`, `getPlatformStats()`, `getUserActivityReport()`

## 🔒 Authentication & Authorization

### Protected Routes
```jsx
<PublicRoute>      {/* Redirects authenticated users to /dashboard */}
<ProtectedRoute requiredRoles={['user', 'instructor', 'admin']}>
<AdminRoute>       {/* Admin only */}
<InstructorRoute>  {/* Instructor only */}
<UserRoute>        {/* Any authenticated user */}
```

### State Persistence
- Authentication token stored in localStorage
- User role and profile cached
- Auto-attach token to all API requests via axios interceptors
- Auto-logout on 401 Unauthorized response

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Backend API running on `http://localhost:8000` (configurable)

### Installation

1. **Clone and navigate to project:**
```bash
cd frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure environment:**
```bash
cp .env.example .env.local
# Edit .env.local with your values
```

**Environment Variables:**
```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_APP_NAME=EduCourse
VITE_APP_VERSION=1.0.0
```

### Development

**Start development server:**
```bash
npm run dev
```
Server runs on `http://localhost:5173` with hot module replacement (HMR).

**Features:**
- Fast refresh on file changes
- Proxy API requests to backend (configured in vite.config.js)
- Source maps for debugging

### Production Build

**Create optimized production build:**
```bash
npm run build
```

**Output:** `dist/` folder with optimized assets
- `dist/index.html` (0.46 kB gzipped)
- `dist/assets/index.js` (310KB minified, 93KB gzipped)
- `dist/assets/index.css` (25KB minified, 5.4KB gzipped)

**Preview build locally:**
```bash
npm run preview
```

**Deploy to hosting:** Copy `dist/` folder to any static hosting (Vercel, Netlify, GitHub Pages) or traditional web server.

### Code Quality

**Run ESLint:**
```bash
npm run lint
```

## 📝 Form Validation

All forms use **Zod** schemas with real-time validation:

### Available Schemas
1. **loginSchema** - Email, password validation
2. **registerSchema** - Name, email, role, password, terms agreement
3. **courseSchema** - Course creation/update fields
4. **lessonSchema** - Lesson content and type
5. **quizSchema** - Quiz questions and settings
6. **profileSchema** - User profile information
7. **reviewSchema** - Course reviews and ratings
8. **changePasswordSchema** - Password change with verification

### Example Usage
```jsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../utils/validation';

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(loginSchema)
});
```

## 🎓 Pages Overview

| Page | Route | Access | Purpose |
|------|-------|--------|---------|
| Landing | `/` | Public | Platform overview, features, CTA |
| Login | `/login` | Public | User authentication |
| Register | `/register` | Public | New user registration |
| Courses | `/courses` | Public | Browse all courses with filters |
| Course Detail | `/courses/:courseId` | Public | Course information and enrollment |
| Course Learn | `/courses/:courseId/learn` | Protected | Video player and lesson content |
| User Dashboard | `/dashboard` | Protected | Student stats and progress |
| Admin Dashboard | `/admin/dashboard` | Admin | Platform management |
| Instructor Dashboard | `/instructor/dashboard` | Instructor | Course management |

## 📊 State Management

### Zustand Stores
Both stores use `persist` middleware for localStorage sync:

**authStore.js**
```javascript
const useAuthStore = create(
  persist((set) => ({
    user: null,
    token: null,
    isAuthenticated: false,
    role: null,
    setUser: (user) => set({ user }),
    login: (user, token) => set({ user, token, isAuthenticated: true }),
    logout: () => set({ user: null, token: null, isAuthenticated: false })
  }))
);
```

**courseStore.js**
- Manages course list, selected course, user progress
- In-memory store (refreshes on app reload)

## 🔌 API Integration

### Request Interceptor
```javascript
// Automatically add Bearer token to all requests
axiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### Response Interceptor
```javascript
// Auto-logout on 401 Unauthorized
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

## 📦 Build Optimization

- **Code Splitting**: Route-based lazy loading ready
- **Minification**: Terser minification enabled
- **CSS**: Tailwind PurgeCSS removes unused styles
- **Source Maps**: Disabled in production for smaller bundle
- **Gzip Compression**: All assets optimized for gzip

## 🧪 Testing (Ready for Implementation)

Testing libraries ready to install:
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

## 📱 Responsive Design

All components are mobile-first and responsive:
- **Mobile (xs-sm)**: Single column, bottom navigation
- **Tablet (md-lg)**: Two columns, side navigation
- **Desktop (xl-2xl)**: Three columns, full sidebar

## ⚙️ Configuration Files

### tailwind.config.js
- Custom color palette with 50-900 shades
- Extended spacing, border radius, shadows
- Animation utilities

### vite.config.js
- Dev server on port 5173
- API proxy to `/api` routes
- Terser minification with optimizations

### postcss.config.js
- Tailwind CSS plugin
- Autoprefixer for browser compatibility

## 🤝 Contributing

1. Follow component structure in `src/components/`
2. Use custom hooks from `src/hooks/`
3. Validate forms with Zod schemas
4. Use Tailwind utility classes (no inline styles)
5. Add PropTypes or JSDoc comments for components

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Hook Form Documentation](https://react-hook-form.com)
- [Zod Documentation](https://zod.dev)

## 🔄 Backend Integration

This frontend is ready to integrate with a **Golang backend API**. Update the API endpoints in service files to match your backend routes:

```javascript
// src/services/courseService.js
const getCourses = async () => {
  const response = await apiClient.get('/courses');
  return response.data;
};
```

Ensure backend API supports:
- JWT authentication (Bearer token)
- CORS headers
- RESTful endpoints matching service methods
- Proper error responses (400, 401, 404, 500)

## 📄 License

This project is part of the EduCourse platform. All rights reserved.

## 👥 Support

For issues, questions, or feature requests, please contact the development team.
