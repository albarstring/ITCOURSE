import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute, AdminRoute, InstructorRoute, UserRoute, PublicRoute } from './routes/ProtectedRoute';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserDashboardPage from './pages/UserDashboardPage';
import CourseListPage from './pages/CourseListPage';
import CourseDetailPage from './pages/CourseDetailPage';
import CourseLearnPage from './pages/CourseLearnPage';

// Placeholder components untuk pages yang belum dibuat
const AdminDashboard = () => (
  <div className="p-8">
    <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
    <p>Admin dashboard - Coming soon</p>
  </div>
);

const InstructorDashboard = () => (
  <div className="p-8">
    <h1 className="text-4xl font-bold mb-4">Instructor Dashboard</h1>
    <p>Instructor dashboard - Coming soon</p>
  </div>
);

const NotFound = () => (
  <div className="pt-20 container-custom py-12 text-center">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="mb-4">The page you're looking for doesn't exist.</p>
    <a href="/" className="text-primary-600 hover:text-primary-700">
      Go back home
    </a>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />

        {/* Courses Routes */}
        <Route path="/courses" element={<CourseListPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />
        <Route
          path="/courses/:courseId/learn"
          element={
            <UserRoute>
              <CourseLearnPage />
            </UserRoute>
          }
        />

        {/* User Dashboard */}
        <Route
          path="/dashboard"
          element={
            <UserRoute>
              <UserDashboardPage />
            </UserRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        {/* Instructor Routes */}
        <Route
          path="/instructor/dashboard"
          element={
            <InstructorRoute>
              <InstructorDashboard />
            </InstructorRoute>
          }
        />

        {/* Catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
