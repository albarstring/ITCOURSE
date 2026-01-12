import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCourse, useLessons } from '../hooks/useCourse';
import { UserLayout } from '../layouts/MainLayout';
import { Button, Loader, Badge, Card, Tabs } from '../components/common/FormElements';
import { Star, Users, Clock, Award, Share2, Heart } from 'lucide-react';
import { formatCurrency, formatDate } from '../utils/helpers';

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { course, loading, error } = useCourse(courseId);
  const { lessons } = useLessons(courseId);
  const [activeTab, setActiveTab] = useState('overview');
  const [isEnrolled, setIsEnrolled] = useState(false);

  if (loading) {
    return (
      <UserLayout>
        <div className="pt-20 pb-12 flex justify-center items-center min-h-screen">
          <Loader size="lg" />
        </div>
      </UserLayout>
    );
  }

  if (error || !course) {
    return (
      <UserLayout>
        <div className="pt-20 pb-12 container-custom text-center">
          <p className="text-error text-lg mb-4">{error || 'Course not found'}</p>
          <Link to="/courses">
            <Button variant="primary">Back to Courses</Button>
          </Link>
        </div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div className="pt-20 pb-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <Badge variant="primary" className="mb-4">
                  {course.level}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg text-primary-100 mb-6">{course.description}</p>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                    <span>{course.rating?.toFixed(1) || 0} ({course.reviewCount || 0} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{course.studentCount || 0} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{course.duration || 0} hours</span>
                  </div>
                </div>

                {course.instructor && (
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-primary-400">
                    <img
                      src={course.instructor.avatar || 'https://via.placeholder.com/48'}
                      alt={course.instructor.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="text-sm opacity-75">Instructor</p>
                      <p className="font-semibold">{course.instructor.name}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-white text-secondary-900 rounded-lg shadow-lg p-6">
                <img
                  src={course.thumbnail || 'https://via.placeholder.com/300x200'}
                  alt={course.title}
                  className="w-full h-40 rounded-lg object-cover mb-6"
                />
                <div className="text-3xl font-bold mb-4">
                  {formatCurrency(course.price)}
                </div>
                {!isEnrolled ? (
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full mb-3"
                    onClick={() => setIsEnrolled(true)}
                  >
                    Enroll Now
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    size="lg"
                    className="w-full mb-3"
                    onClick={() => navigate(`/courses/${courseId}/learn`)}
                  >
                    Continue Learning
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full gap-2 mb-4"
                >
                  <Share2 size={18} />
                  Share
                </Button>
                <Button
                  variant="ghost"
                  className="w-full gap-2"
                >
                  <Heart size={18} />
                  Save for Later
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="container-custom mt-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b border-secondary-200 flex">
              {['Overview', 'Curriculum', 'Reviews'].map((tab) => (
                <button
                  key={tab.toLowerCase()}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`flex-1 px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.toLowerCase()
                      ? 'border-b-2 border-primary-500 text-primary-600'
                      : 'text-secondary-600 hover:text-secondary-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-8">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-secondary-900 mb-3">
                      About this course
                    </h3>
                    <p className="text-secondary-700 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                      What you'll learn
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.outcomes?.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary-500 font-bold mt-1">✓</span>
                          <span className="text-secondary-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                      Requirements
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-secondary-700">
                      {course.requirements?.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Curriculum Tab */}
              {activeTab === 'curriculum' && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
                    Course Curriculum
                  </h3>
                  {lessons?.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      className="border border-secondary-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">
                          {lesson.type === 'video' && '🎥'}
                          {lesson.type === 'document' && '📄'}
                          {lesson.type === 'quiz' && '✍️'}
                          {lesson.type === 'assignment' && '📝'}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-secondary-900 mb-1">
                            Lesson {index + 1}: {lesson.title}
                          </h4>
                          <p className="text-sm text-secondary-600">
                            {lesson.duration && `${lesson.duration} min`}
                          </p>
                        </div>
                        <Badge variant="secondary">
                          {lesson.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-secondary-900">
                    Student Reviews
                  </h3>
                  <div className="text-center py-8 text-secondary-600">
                    <p>No reviews yet. Be the first to review!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default CourseDetailPage;
