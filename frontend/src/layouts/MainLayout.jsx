import React from 'react';
import { Navbar, Footer } from '../components/common/Navigation';

export const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-secondary-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-auto">
          <div className="container-custom py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export const InstructorLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-secondary-50">
      <InstructorSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <InstructorHeader />
        <main className="flex-1 overflow-auto">
          <div className="container-custom py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export const UserLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-secondary-900 text-white p-6 overflow-y-auto hidden md:block">
      <h2 className="text-2xl font-bold mb-8">Admin</h2>
      <nav className="space-y-2">
        <SidebarLink href="/admin/dashboard" label="Dashboard" icon="📊" />
        <SidebarLink href="/admin/users" label="Users" icon="👥" />
        <SidebarLink href="/admin/courses" label="Courses" icon="📚" />
        <SidebarLink href="/admin/analytics" label="Analytics" icon="📈" />
        <SidebarLink href="/admin/settings" label="Settings" icon="⚙️" />
      </nav>
    </div>
  );
};

const InstructorSidebar = () => {
  return (
    <div className="w-64 bg-secondary-900 text-white p-6 overflow-y-auto hidden md:block">
      <h2 className="text-2xl font-bold mb-8">Instructor</h2>
      <nav className="space-y-2">
        <SidebarLink href="/instructor/dashboard" label="Dashboard" icon="📊" />
        <SidebarLink href="/instructor/courses" label="My Courses" icon="📚" />
        <SidebarLink href="/instructor/students" label="Students" icon="👥" />
        <SidebarLink href="/instructor/analytics" label="Analytics" icon="📈" />
        <SidebarLink href="/instructor/settings" label="Settings" icon="⚙️" />
      </nav>
    </div>
  );
};

const SidebarLink = ({ href, label, icon }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-secondary-800 transition-colors"
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </a>
  );
};

const AdminHeader = () => {
  return (
    <header className="bg-white border-b border-secondary-200 shadow-sm px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-secondary-900">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-secondary-100 rounded-lg">🔔</button>
          <button className="w-10 h-10 bg-primary-500 rounded-full text-white flex items-center justify-center">
            👤
          </button>
        </div>
      </div>
    </header>
  );
};

const InstructorHeader = () => {
  return (
    <header className="bg-white border-b border-secondary-200 shadow-sm px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-secondary-900">Instructor Dashboard</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-secondary-100 rounded-lg">🔔</button>
          <button className="w-10 h-10 bg-primary-500 rounded-full text-white flex items-center justify-center">
            👤
          </button>
        </div>
      </div>
    </header>
  );
};
