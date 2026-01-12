import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../components/common/FormElements';
import { ArrowRight, BookOpen, Users, BarChart3 } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-white py-20 md:py-32">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
                  Learn, Grow, Succeed
                </h1>
                <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
                  Access high-quality courses from industry experts. Start your learning journey today with EduCourse.
                </p>
                <div className="flex gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate('/courses')}
                    className="gap-2"
                  >
                    Explore Courses <ArrowRight size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => navigate('/register')}
                  >
                    Sign Up Free
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-6xl">📚</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-secondary-50 py-20">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-secondary-900 text-center mb-4">
              Why Choose EduCourse?
            </h2>
            <p className="text-center text-secondary-600 text-lg mb-12 max-w-2xl mx-auto">
              We provide the best learning experience with quality content and expert instructors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Courses Section */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-secondary-900 text-center mb-12">
              Popular Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {popularCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-40 bg-gradient-to-br from-primary-200 to-primary-100 flex items-center justify-center text-4xl">
                    {course.icon}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-secondary-600 text-sm mb-4">
                      {course.description}
                    </p>
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full"
                      onClick={() => navigate('/courses')}
                    >
                      View Course
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/courses')}
              >
                View All Courses
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary-500 text-white py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <p className="text-lg opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary-50">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students learning from top instructors. Get started for free today.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/register')}
              className="gap-2"
            >
              Get Started Now <ArrowRight size={20} />
            </Button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

const features = [
  {
    icon: '🎓',
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of experience.',
  },
  {
    icon: '🎯',
    title: 'Structured Learning',
    description: 'Follow a well-organized curriculum designed for all levels.',
  },
  {
    icon: '🏆',
    title: 'Certifications',
    description: 'Earn recognized certificates upon course completion.',
  },
];

const popularCourses = [
  {
    id: 1,
    icon: '⚛️',
    title: 'React Fundamentals',
    description: 'Learn React from scratch and build modern web applications.',
  },
  {
    id: 2,
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Master modern design principles and tools.',
  },
  {
    id: 3,
    icon: '📊',
    title: 'Data Science',
    description: 'Explore data analysis and machine learning basics.',
  },
];

const stats = [
  { value: '10K+', label: 'Active Students' },
  { value: '500+', label: 'Courses' },
  { value: '100+', label: 'Instructors' },
  { value: '4.8★', label: 'Average Rating' },
];

export default LandingPage;
