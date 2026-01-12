import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User, Settings } from 'lucide-react';
import useAuthStore from '../../store/authStore';
import { cn } from '../../utils/classNames';

export const Navbar = ({ isScrolled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-fast',
        isScrolled || isOpen
          ? 'bg-white border-b border-secondary-200 shadow-md'
          : 'bg-white border-b border-secondary-200'
      )}
    >
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary-600">
          EduCourse
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-secondary-700 hover:text-primary-600 transition-colors">
            Home
          </Link>
          <Link to="/courses" className="text-secondary-700 hover:text-primary-600 transition-colors">
            Courses
          </Link>
          <Link to="/about" className="text-secondary-700 hover:text-primary-600 transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-secondary-700 hover:text-primary-600 transition-colors">
            Contact
          </Link>
        </div>

        {/* Auth Actions */}
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/dashboard"
                className="text-secondary-700 hover:text-primary-600 transition-colors"
              >
                Dashboard
              </Link>
              <div className="relative group">
                <button className="flex items-center gap-2 p-2 hover:bg-secondary-100 rounded-lg transition-colors">
                  <img
                    src={user?.avatar || 'https://via.placeholder.com/32'}
                    alt={user?.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-secondary-700">{user?.firstName}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-fast">
                  <Link to="/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-secondary-50 first:rounded-t-lg">
                    <User size={16} />
                    <span>Profile</span>
                  </Link>
                  <Link to="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-secondary-50">
                    <Settings size={16} />
                    <span>Settings</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 hover:bg-secondary-50 last:rounded-b-lg text-error"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/login"
                className="px-4 py-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors font-medium"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary-100 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-secondary-200 p-4 space-y-4">
          <Link to="/" className="block text-secondary-700 hover:text-primary-600">
            Home
          </Link>
          <Link to="/courses" className="block text-secondary-700 hover:text-primary-600">
            Courses
          </Link>
          <Link to="/about" className="block text-secondary-700 hover:text-primary-600">
            About
          </Link>
          <Link to="/contact" className="block text-secondary-700 hover:text-primary-600">
            Contact
          </Link>

          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="block text-secondary-700 hover:text-primary-600">
                Dashboard
              </Link>
              <Link to="/profile" className="block text-secondary-700 hover:text-primary-600">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left text-error hover:text-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block text-primary-600 hover:text-primary-700 font-medium">
                Login
              </Link>
              <Link to="/register" className="block text-center px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 font-medium">
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-secondary-200 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">EduCourse</h3>
            <p className="text-sm">
              Empowering learners worldwide with high-quality online courses.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instructors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary-700 pt-8 text-center text-sm">
          <p>&copy; 2024 EduCourse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
