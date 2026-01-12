import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { ROLES } from '../constants';

// Protected Route Component
export const ProtectedRoute = ({ children, requiredRoles = null }) => {
  const { isAuthenticated, role } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRoles && !requiredRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Public Route Component - Redirect if authenticated
export const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

// Admin Route
export const AdminRoute = ({ children }) => {
  return <ProtectedRoute requiredRoles={[ROLES.ADMIN]}>{children}</ProtectedRoute>;
};

// Instructor Route
export const InstructorRoute = ({ children }) => {
  return <ProtectedRoute requiredRoles={[ROLES.INSTRUCTOR, ROLES.ADMIN]}>{children}</ProtectedRoute>;
};

// User Route
export const UserRoute = ({ children }) => {
  return <ProtectedRoute requiredRoles={[ROLES.USER, ROLES.INSTRUCTOR, ROLES.ADMIN]}>
    {children}
  </ProtectedRoute>;
};
