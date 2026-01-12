# EduCourse - Modern Online Learning Platform

Platform pembelajaran online modern dengan fitur-fitur lengkap untuk admin, instruktur, dan siswa.

## 🎯 Fitur Utama

### Untuk Siswa (User)
- ✅ Dashboard pembelajaran dengan progress tracking
- ✅ Browsing dan enrollment course
- ✅ Video player dengan subtitle
- ✅ Quiz interaktif dengan penilaian
- ✅ Progress belajar per course
- ✅ Certificate of completion
- ✅ Review dan rating courses
- ✅ Wishlist/Save for later

### Untuk Instruktur
- ✅ Dashboard analytics
- ✅ Buat dan kelola course
- ✅ Upload video dan materi pembelajaran
- ✅ Buat quiz dan assignments
- ✅ Monitor progress siswa
- ✅ Revenue tracking
- ✅ Student engagement analytics

### Untuk Admin
- ✅ Master dashboard dengan statistik platform
- ✅ User management (siswa, instruktur)
- ✅ Course moderation dan approval
- ✅ Revenue dan financial reporting
- ✅ Platform analytics dan insights
- ✅ System settings dan configuration

## 📁 Struktur Folder

```
frontend/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── common/          # Shared UI components (Button, Input, Card, Modal, etc)
│   │   ├── forms/           # Form components (LoginForm, RegisterForm, etc)
│   │   ├── course/          # Course-specific components (CourseCard, CourseGrid, etc)
│   │   └── dashboard/       # Dashboard components (stats, charts, tables)
│   │
│   ├── pages/               # Page components / Views
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── UserDashboardPage.jsx
│   │   ├── CourseDetailPage.jsx
│   │   ├── CourseListPage.jsx
│   │   ├── CourseLearnPage.jsx
│   │   ├── AdminDashboardPage.jsx
│   │   └── InstructorDashboardPage.jsx
│   │
│   ├── layouts/             # Layout wrappers
│   │   ├── MainLayout.jsx    # Main layout untuk public pages
│   │   ├── AdminLayout.jsx   # Layout untuk admin
│   │   └── InstructorLayout.jsx # Layout untuk instructor
│   │
│   ├── routes/              # Routing dan protected routes
│   │   └── ProtectedRoute.jsx
│   │
│   ├── services/            # API services
│   │   ├── apiClient.js     # Axios instance dengan interceptors
│   │   ├── authService.js
│   │   ├── courseService.js
│   │   ├── userService.js
│   │   └── analyticsService.js
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── useAuth.js       # Authentication hook
│   │   ├── useCourse.js     # Course data hooks
│   │   └── useCustom.js     # Other utility hooks
│   │
│   ├── store/               # State management (Zustand)
│   │   ├── authStore.js
│   │   └── courseStore.js
│   │
│   ├── utils/               # Utility functions
│   │   ├── helpers.js       # Format, validation, string helpers
│   │   ├── validation.js    # Form schema validation dengan Zod
│   │   └── classNames.js    # Tailwind className utilities
│   │
│   ├── constants/           # Application constants
│   │   └── index.js
│   │
│   ├── styles/              # Global styles
│   │   └── globals.css      # Tailwind + custom CSS
│   │
│   ├── App.jsx              # Main app component dengan routing
│   └── main.jsx             # Entry point
│
├── public/                  # Static assets
├── .env.example            # Environment variables template
├── .env.local              # Local environment variables
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm atau yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Setup environment variables
cp .env.example .env.local
# Edit .env.local dan set VITE_API_BASE_URL sesuai backend

# 3. Run development server
npm run dev

# 4. Build untuk production
npm run build

# 5. Preview production build
npm run preview
```

Server akan berjalan di `http://localhost:5173`

## 🛠 Tech Stack

### Frontend
- **React 18.2** - UI library
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Styling utility
- **Zustand** - State management (lightweight)
- **Axios** - HTTP client
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Lucide React** - Icons
- **Vite** - Build tool

### Design System
- Modern, clean, dan professional UI
- Responsive design (mobile, tablet, desktop)
- Consistent color scheme dan typography
- No gradient background (clean aesthetic)
- Accessibility-first approach

## 🔐 Authentication Flow

1. User login/register
2. Token disimpan di localStorage (via Zustand)
3. Token ditambahkan ke setiap request via interceptor
4. Protected routes redirect ke login jika tidak authenticated
5. Role-based access control (Admin, Instructor, User)

## 📡 API Integration

Semua API calls dilakukan via service layer:

```javascript
// Contoh: Fetch courses
import courseService from '@/services/courseService';

const { courses, loading, error } = useCourses();

// Atau direct call
const data = await courseService.getCourses({ limit: 10, page: 1 });
```

## 🎨 Component Architecture

### Reusable Components (src/components/common/)
- `Button` - Primary, secondary, outline, danger variants
- `Input` - Dengan label, error, validation states
- `Textarea` - Multi-line text input
- `Select` - Dropdown selection
- `Card` - Content container
- `Badge` - Status indicator
- `Modal` - Dialog/popup
- `Loader` - Loading spinner
- `Alert` - Notification alert
- `Pagination` - Halaman navigation
- `Tabs` - Tab navigation

### Form & Course Components
- `CourseCard` - Display single course
- `CourseGrid` - Grid layout courses
- `CourseSidebar` - Filter sidebar
- `Navigation` - Navbar dan Footer

## 📊 State Management

Menggunakan **Zustand** untuk minimal dan efficient state management:

```javascript
// Auth Store
import useAuthStore from '@/store/authStore';

const { user, token, isAuthenticated, login, logout } = useAuthStore();

// Course Store
import useCourseStore from '@/store/courseStore';

const { courses, selectedCourse, userProgress } = useCourseStore();
```

## 🔗 Custom Hooks

### useAuth
```javascript
const { user, login, register, logout, loading, error } = useAuth();
```

### useCourse
```javascript
const { course, loading, error } = useCourse(courseId);
const { courses, loading, error } = useCourses(params);
const { lessons, loading, error } = useLessons(courseId);
```

### useForm
```javascript
const { values, errors, touched, handleChange, handleSubmit } = useForm(
  initialValues,
  onSubmit
);
```

## 📝 Form Validation

Menggunakan **Zod** schema validation:

```javascript
import { validateForm, loginSchema } from '@/utils/validation';

const validation = await validateForm(loginSchema, formData);
if (!validation.success) {
  setErrors(validation.errors);
}
```

## 🛣️ Routing Structure

```
/                          - Landing page
/login                     - Login page
/register                  - Register page
/courses                   - Course listing
/courses/:id               - Course detail
/courses/:id/learn         - Course learning (protected)
/dashboard                 - User dashboard (protected)
/admin/dashboard           - Admin dashboard (protected, admin only)
/instructor/dashboard      - Instructor dashboard (protected, instructor only)
```

## ⚙️ Environment Variables

```
VITE_API_BASE_URL=http://localhost:8000/api
VITE_APP_NAME=EduCourse
VITE_APP_VERSION=1.0.0
```

## 🎯 Best Practices Implemented

✅ **Component Composition**
- Small, reusable components
- Props-based configuration
- Separation of concerns

✅ **State Management**
- Centralized auth state
- Minimal global state
- Local component state when appropriate

✅ **API Integration**
- Service layer pattern
- Axios interceptors for auth
- Error handling & retry logic
- Loading states

✅ **Form Handling**
- Schema validation dengan Zod
- React Hook Form integration
- Field-level error messages
- Proper form submission flow

✅ **Responsive Design**
- Mobile-first approach
- Tailwind breakpoints (sm, md, lg, xl, 2xl)
- Flexible layouts dengan grid & flexbox

✅ **Performance**
- Code splitting ready (React Router v6)
- Optimized images
- Lazy loading support
- Efficient re-renders

✅ **Code Quality**
- Clean, readable code
- Consistent naming conventions
- Proper error handling
- JSDoc comments untuk public APIs

## 📚 Next Steps

Untuk menyelesaikan aplikasi:

1. **Create additional pages**
   - Course listing dengan filters
   - Course learning interface
   - Admin & Instructor dashboards

2. **Implement features**
   - Video player integration (HLS.js atau plyr)
   - Quiz engine
   - Certificate generation
   - Payment integration

3. **Add UI Enhancements**
   - Dark mode
   - Animations & transitions
   - Advanced data visualizations
   - Search & autocomplete

4. **Testing**
   - Unit tests (Jest)
   - Integration tests (React Testing Library)
   - E2E tests (Cypress/Playwright)

5. **Deployment**
   - Build optimization
   - Performance monitoring
   - Error tracking (Sentry)
   - CDN setup

## 🤝 Contributing

Struktur ini siap untuk team development. Pastikan:
- Follow folder structure
- Use provided components
- Reuse existing hooks
- Maintain naming conventions
- Add comments untuk complex logic

## 📄 License

Copyright © 2024 EduCourse. All rights reserved.
