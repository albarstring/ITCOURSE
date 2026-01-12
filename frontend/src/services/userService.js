import apiClient from './apiClient';

const userService = {
  // Get all users (Admin)
  getUsers: async (params = {}) => {
    const response = await apiClient.get('/users', { params });
    return response.data;
  },

  // Get user by ID
  getUserById: async (userId) => {
    const response = await apiClient.get(`/users/${userId}`);
    return response.data;
  },

  // Get user profile
  getProfile: async () => {
    const response = await apiClient.get('/users/profile');
    return response.data;
  },

  // Update user profile
  updateProfile: async (userData) => {
    const response = await apiClient.put('/users/profile', userData);
    return response.data;
  },

  // Get user enrolled courses
  getEnrolledCourses: async (params = {}) => {
    const response = await apiClient.get('/users/enrolled-courses', { params });
    return response.data;
  },

  // Get user learning statistics
  getLearningStats: async () => {
    const response = await apiClient.get('/users/learning-stats');
    return response.data;
  },

  // Get user certificates
  getCertificates: async () => {
    const response = await apiClient.get('/users/certificates');
    return response.data;
  },

  // Download certificate
  downloadCertificate: async (certificateId) => {
    const response = await apiClient.get(`/users/certificates/${certificateId}/download`, {
      responseType: 'blob',
    });
    return response.data;
  },

  // Update user role (Admin)
  updateUserRole: async (userId, role) => {
    const response = await apiClient.put(`/users/${userId}/role`, { role });
    return response.data;
  },

  // Suspend/Activate user (Admin)
  updateUserStatus: async (userId, status) => {
    const response = await apiClient.put(`/users/${userId}/status`, { status });
    return response.data;
  },

  // Delete user (Admin)
  deleteUser: async (userId) => {
    const response = await apiClient.delete(`/users/${userId}`);
    return response.data;
  },

  // Upload profile picture
  uploadProfilePicture: async (file) => {
    const formData = new FormData();
    formData.append('avatar', file);
    const response = await apiClient.post('/users/profile/avatar', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },
};

export default userService;
