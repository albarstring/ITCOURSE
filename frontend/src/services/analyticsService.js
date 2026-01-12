import apiClient from './apiClient';

const analyticsService = {
  // Instructor analytics
  getInstructorStats: async () => {
    const response = await apiClient.get('/analytics/instructor/stats');
    return response.data;
  },

  // Get course analytics
  getCourseAnalytics: async (courseId) => {
    const response = await apiClient.get(`/analytics/courses/${courseId}`);
    return response.data;
  },

  // Get student engagement
  getStudentEngagement: async (courseId, params = {}) => {
    const response = await apiClient.get(`/analytics/courses/${courseId}/engagement`, { params });
    return response.data;
  },

  // Get revenue analytics
  getRevenueAnalytics: async (params = {}) => {
    const response = await apiClient.get('/analytics/revenue', { params });
    return response.data;
  },

  // Admin dashboard analytics
  getAdminStats: async () => {
    const response = await apiClient.get('/analytics/admin/stats');
    return response.data;
  },

  // Get platform statistics
  getPlatformStats: async () => {
    const response = await apiClient.get('/analytics/platform/stats');
    return response.data;
  },

  // Get user activity report
  getUserActivityReport: async (params = {}) => {
    const response = await apiClient.get('/analytics/user-activity', { params });
    return response.data;
  },
};

export default analyticsService;
