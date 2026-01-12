import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { useCourses, useUserProgress } from '../hooks/useCourse';
import { UserLayout } from '../layouts/MainLayout';
import { Button, Loader } from '../components/common/FormElements';
import { CourseCard } from '../components/course/CourseCard';
import { BookOpen, Award, Target } from 'lucide-react';

const UserDashboardPage = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { courses, loading } = useCourses({ enrolledOnly: true });

  const recentActivity = [
    { id: 1, course: 'React Fundamentals', action: 'Completed Lesson 5', time: '2 hours ago' },
    { id: 2, course: 'UI/UX Design', action: 'Completed Quiz', time: '1 day ago' },
    { id: 3, course: 'JavaScript Advanced', action: 'Started Course', time: '3 days ago' },
  ];

  const stats = [
    {
      icon: BookOpen,
      label: 'Courses Enrolled',
      value: courses?.length || 0,
      color: 'text-blue-500',
    },
    {
      icon: Target,
      label: 'In Progress',
      value: courses?.filter((c) => c.progress < 100)?.length || 0,
      color: 'text-orange-500',
    },
    {
      icon: Award,
      label: 'Completed',
      value: courses?.filter((c) => c.progress === 100)?.length || 0,
      color: 'text-green-500',
    },
  ];

  return (
    <UserLayout>
      <div className="pt-20 pb-12">
        <div className="container-custom">
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-secondary-900 mb-2">
              Welcome back, {user?.firstName}! 👋
            </h1>
            <p className="text-secondary-600">
              Continue your learning journey and achieve your goals.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-secondary-600 text-sm mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-secondary-900">{stat.value}</p>
                    </div>
                    <Icon className={`${stat.color} w-8 h-8`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Active Courses */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-secondary-900">Your Courses</h2>
                <Link to="/courses">
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </Link>
              </div>

              {loading ? (
                <div className="flex justify-center py-12">
                  <Loader />
                </div>
              ) : courses?.length > 0 ? (
                <div className="space-y-4">
                  {courses.slice(0, 3).map((course) => (
                    <div
                      key={course.id}
                      className="bg-white rounded-lg shadow-md p-4 border border-secondary-200 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={course.thumbnail || 'https://via.placeholder.com/80'}
                          alt={course.title}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-secondary-900 mb-1">
                            {course.title}
                          </h3>
                          <p className="text-sm text-secondary-600 mb-2">
                            Instructor: {course.instructor?.name}
                          </p>
                          <div className="w-full bg-secondary-200 rounded-full h-2">
                            <div
                              className="bg-primary-500 h-full rounded-full transition-all"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-secondary-600 mt-1">
                            {course.progress}% Complete
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => navigate(`/courses/${course.id}/learn`)}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-secondary-50 rounded-lg">
                  <p className="text-secondary-600 mb-4">No courses yet</p>
                  <Button
                    variant="primary"
                    onClick={() => navigate('/courses')}
                  >
                    Start Learning
                  </Button>
                </div>
              )}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-secondary-200 h-fit">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="pb-4 border-b border-secondary-200 last:border-b-0"
                  >
                    <p className="text-sm font-medium text-secondary-900">
                      {activity.course}
                    </p>
                    <p className="text-sm text-secondary-600">{activity.action}</p>
                    <p className="text-xs text-secondary-500 mt-1">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserDashboardPage;
