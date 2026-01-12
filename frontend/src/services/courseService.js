import apiClient from './apiClient';

const courseService = {
  // Get all courses with filters
  getCourses: async (params = {}) => {
    const response = await apiClient.get('/courses', { params });
    return response.data;
  },

  // Get course by ID
  getCourseById: async (courseId) => {
    const response = await apiClient.get(`/courses/${courseId}`);
    return response.data;
  },

  // Get course content/modules
  getCourseContent: async (courseId) => {
    const response = await apiClient.get(`/courses/${courseId}/content`);
    return response.data;
  },

  // Create new course (Instructor/Admin)
  createCourse: async (courseData) => {
    const response = await apiClient.post('/courses', courseData);
    return response.data;
  },

  // Update course (Instructor/Admin)
  updateCourse: async (courseId, courseData) => {
    const response = await apiClient.put(`/courses/${courseId}`, courseData);
    return response.data;
  },

  // Delete course (Admin)
  deleteCourse: async (courseId) => {
    const response = await apiClient.delete(`/courses/${courseId}`);
    return response.data;
  },

  // Upload course thumbnail/banner
  uploadCourseThumbnail: async (courseId, file) => {
    const formData = new FormData();
    formData.append('thumbnail', file);
    const response = await apiClient.post(`/courses/${courseId}/thumbnail`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  // Get course lessons
  getCourseLessons: async (courseId) => {
    const response = await apiClient.get(`/courses/${courseId}/lessons`);
    return response.data;
  },

  // Get lesson details
  getLesson: async (courseId, lessonId) => {
    const response = await apiClient.get(`/courses/${courseId}/lessons/${lessonId}`);
    return response.data;
  },

  // Create lesson
  createLesson: async (courseId, lessonData) => {
    const response = await apiClient.post(`/courses/${courseId}/lessons`, lessonData);
    return response.data;
  },

  // Update lesson
  updateLesson: async (courseId, lessonId, lessonData) => {
    const response = await apiClient.put(
      `/courses/${courseId}/lessons/${lessonId}`,
      lessonData
    );
    return response.data;
  },

  // Delete lesson
  deleteLesson: async (courseId, lessonId) => {
    const response = await apiClient.delete(`/courses/${courseId}/lessons/${lessonId}`);
    return response.data;
  },

  // Get course quizzes
  getCourseQuizzes: async (courseId) => {
    const response = await apiClient.get(`/courses/${courseId}/quizzes`);
    return response.data;
  },

  // Get quiz details
  getQuiz: async (courseId, quizId) => {
    const response = await apiClient.get(`/courses/${courseId}/quizzes/${quizId}`);
    return response.data;
  },

  // Submit quiz answers
  submitQuiz: async (courseId, quizId, answers) => {
    const response = await apiClient.post(`/courses/${courseId}/quizzes/${quizId}/submit`, {
      answers,
    });
    return response.data;
  },

  // Get user's course enrollment
  enrollCourse: async (courseId) => {
    const response = await apiClient.post(`/courses/${courseId}/enroll`);
    return response.data;
  },

  // Get user progress
  getUserProgress: async (courseId) => {
    const response = await apiClient.get(`/courses/${courseId}/progress`);
    return response.data;
  },

  // Update lesson completion
  markLessonComplete: async (courseId, lessonId) => {
    const response = await apiClient.post(`/courses/${courseId}/lessons/${lessonId}/complete`);
    return response.data;
  },

  // Get course ratings/reviews
  getCourseReviews: async (courseId, params = {}) => {
    const response = await apiClient.get(`/courses/${courseId}/reviews`, { params });
    return response.data;
  },

  // Create review
  createReview: async (courseId, reviewData) => {
    const response = await apiClient.post(`/courses/${courseId}/reviews`, reviewData);
    return response.data;
  },

  // Get instructor's courses
  getInstructorCourses: async (instructorId, params = {}) => {
    const response = await apiClient.get(`/instructors/${instructorId}/courses`, { params });
    return response.data;
  },
};

export default courseService;
