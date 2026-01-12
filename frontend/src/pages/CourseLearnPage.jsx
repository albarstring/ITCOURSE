import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserLayout } from '../layouts/MainLayout';
import { Button, Loader, Tabs } from '../components/common/FormElements';
import { useLessons, useLesson, useQuiz } from '../hooks/useCourse';
import { Play, CheckCircle, Lock, MessageSquare } from 'lucide-react';

const CourseLearnPage = () => {
  const { courseId } = useParams();
  const { lessons, loading: lessonsLoading } = useLessons(courseId);
  const [selectedLessonId, setSelectedLessonId] = useState(lessons?.[0]?.id);
  const { lesson, loading: lessonLoading } = useLesson(courseId, selectedLessonId);
  const [activeTab, setActiveTab] = useState('lesson');

  const tabsList = [
    { value: 'lesson', label: 'Lesson' },
    { value: 'discussion', label: 'Discussion' },
    { value: 'resources', label: 'Resources' },
  ];

  if (lessonsLoading) {
    return (
      <UserLayout>
        <div className="flex justify-center items-center min-h-screen">
          <Loader size="lg" />
        </div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div className="pt-20 pb-12 bg-secondary-900 text-white min-h-screen">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-120px)]">
            {/* Video Player & Content Area */}
            <div className="lg:col-span-3 flex flex-col">
              {/* Video Player */}
              <div className="bg-secondary-800 rounded-lg overflow-hidden mb-6 aspect-video">
                <div className="w-full h-full bg-black flex items-center justify-center">
                  {lessonLoading ? (
                    <Loader size="lg" />
                  ) : lesson?.type === 'video' ? (
                    <div className="text-center">
                      <Play className="w-20 h-20 mx-auto mb-4 opacity-50" />
                      <p className="text-gray-400">Video Player</p>
                      {lesson.videoUrl && (
                        <video
                          src={lesson.videoUrl}
                          controls
                          className="w-full h-full"
                        />
                      )}
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-gray-400">{lesson?.title || 'Select a lesson'}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Tabs */}
              <Tabs
                tabs={tabsList}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                className="bg-secondary-800 border-secondary-700"
              />

              {/* Tab Content */}
              <div className="flex-1 bg-secondary-800 rounded-b-lg p-6 overflow-y-auto">
                {activeTab === 'lesson' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">{lesson?.title}</h2>
                    <div className="prose prose-invert max-w-none">
                      <p>{lesson?.description}</p>
                      <div dangerouslySetInnerHTML={{ __html: lesson?.content }} />
                    </div>
                  </div>
                )}

                {activeTab === 'discussion' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Discussion Forum</h3>
                    <p className="text-gray-300">Coming soon...</p>
                  </div>
                )}

                {activeTab === 'resources' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Resources</h3>
                    <p className="text-gray-300">No resources available yet.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar - Lessons List */}
            <div className="lg:col-span-1 bg-secondary-800 rounded-lg p-4 overflow-y-auto max-h-[calc(100vh-180px)]">
              <h3 className="text-lg font-bold mb-4">Course Content</h3>
              <div className="space-y-2">
                {lessons?.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => setSelectedLessonId(lesson.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-start gap-3 ${
                      selectedLessonId === lesson.id
                        ? 'bg-primary-600'
                        : 'bg-secondary-700 hover:bg-secondary-600'
                    }`}
                  >
                    <div className="flex-shrink-0 pt-1">
                      {lesson.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <span className="text-sm font-semibold">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{lesson.title}</p>
                      {lesson.duration && (
                        <p className="text-xs opacity-75">{lesson.duration} min</p>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-2">
                <Button variant="primary" size="sm" className="w-full">
                  Mark Complete
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Next Lesson
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default CourseLearnPage;
