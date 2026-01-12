import React from 'react';
import { Star, Users, Clock } from 'lucide-react';
import { formatCurrency } from '../../utils/helpers';
import { Link } from 'react-router-dom';

export const CourseCard = ({ course, onClick }) => {
  return (
    <div className="bg-white rounded-lg border border-secondary-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-fast cursor-pointer"
      onClick={onClick}
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden bg-secondary-100">
        <img
          src={course.thumbnail || 'https://via.placeholder.com/300x200'}
          alt={course.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {course.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-secondary-900 mb-2 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-secondary-200">
          <img
            src={course.instructor?.avatar || 'https://via.placeholder.com/32'}
            alt={course.instructor?.name}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-secondary-700">{course.instructor?.name}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 text-sm text-secondary-600">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span>{course.rating?.toFixed(1) || 0} ({course.reviewCount || 0})</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{course.studentCount || 0}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{course.duration || 0}h</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-600">
            {formatCurrency(course.price)}
          </span>
          {course.originalPrice && course.originalPrice > course.price && (
            <span className="text-sm text-secondary-500 line-through">
              {formatCurrency(course.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export const CourseGrid = ({ courses, isLoading, onCourseClick }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg border border-secondary-200 overflow-hidden">
            <div className="h-48 bg-secondary-100 skeleton" />
            <div className="p-4">
              <div className="h-4 bg-secondary-200 rounded mb-2 skeleton" />
              <div className="h-4 bg-secondary-200 rounded mb-4 skeleton" />
              <div className="h-8 bg-secondary-200 rounded skeleton" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!courses || courses.length === 0) {
    return (
      <div className="col-span-full text-center py-12">
        <p className="text-secondary-600 text-lg">No courses found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onClick={() => onCourseClick && onCourseClick(course.id)}
        />
      ))}
    </div>
  );
};

export const CourseSidebar = ({ onFilterChange }) => {
  return (
    <div className="bg-white rounded-lg border border-secondary-200 shadow-md p-6">
      <h3 className="text-lg font-semibold text-secondary-900 mb-6">Filters</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-secondary-700 mb-3">
          Category
        </label>
        <div className="space-y-2">
          {['All', 'Programming', 'Design', 'Business', 'Marketing'].map((cat) => (
            <label key={cat} className="flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked={cat === 'All'}
                onChange={(e) => onFilterChange?.({ category: cat })}
                className="w-4 h-4 rounded border-secondary-300 text-primary-600"
              />
              <span className="text-sm text-secondary-700">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Level Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-secondary-700 mb-3">
          Level
        </label>
        <div className="space-y-2">
          {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
            <label key={level} className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={(e) => onFilterChange?.({ level })}
                className="w-4 h-4 rounded border-secondary-300 text-primary-600"
              />
              <span className="text-sm text-secondary-700">{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-secondary-700 mb-3">
          Price Range
        </label>
        <input
          type="range"
          min="0"
          max="500"
          className="w-full"
          onChange={(e) => onFilterChange?.({ maxPrice: e.target.value })}
        />
      </div>

      {/* Rating Filter */}
      <div>
        <label className="block text-sm font-medium text-secondary-700 mb-3">
          Rating
        </label>
        <div className="space-y-2">
          {[4.5, 4, 3.5, 3].map((rating) => (
            <label key={rating} className="flex items-center gap-2">
              <input
                type="radio"
                name="rating"
                onChange={(e) => onFilterChange?.({ minRating: rating })}
                className="w-4 h-4 border-secondary-300 text-primary-600"
              />
              <span className="text-sm text-secondary-700">
                {rating}+ ⭐
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
