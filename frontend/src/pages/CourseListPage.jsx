import React, { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Button, Input, Loader } from '../components/common/FormElements';
import { useCourses } from '../hooks/useCourse';
import { CourseCard, CourseSidebar } from '../components/course/CourseCard';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const CourseListPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const { courses, loading } = useCourses({ search: searchQuery, ...filters });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <MainLayout>
      <div className="pt-20 pb-12">
        <div className="container-custom">
          {/* Search Bar */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-secondary-900 mb-6">
              Discover Courses
            </h1>
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-secondary-400" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-3 border-2 border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filter */}
            <div className="hidden lg:block">
              <CourseSidebar onFilterChange={setFilters} />
            </div>

            {/* Courses Grid */}
            <div className="lg:col-span-3">
              {loading ? (
                <div className="flex justify-center items-center py-24">
                  <Loader size="lg" />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courses?.map((course) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      onClick={() => navigate(`/courses/${course.id}`)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CourseListPage;
