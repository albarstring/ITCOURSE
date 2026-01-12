export const ROLES = {
  ADMIN: 'admin',
  INSTRUCTOR: 'instructor',
  USER: 'user',
};

export const USER_ROLES = [
  { value: ROLES.ADMIN, label: 'Admin' },
  { value: ROLES.INSTRUCTOR, label: 'Instructor' },
  { value: ROLES.USER, label: 'Student' },
];

export const USER_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  SUSPENDED: 'suspended',
};

export const COURSE_STATUS = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
  ARCHIVED: 'archived',
};

export const COURSE_LEVEL = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
};

export const LESSON_TYPE = {
  VIDEO: 'video',
  DOCUMENT: 'document',
  QUIZ: 'quiz',
  ASSIGNMENT: 'assignment',
};

export const QUIZ_TYPE = {
  MULTIPLE_CHOICE: 'multiple_choice',
  TRUE_FALSE: 'true_false',
  SHORT_ANSWER: 'short_answer',
};

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  DEFAULT_SORT: 'created_at',
};

export const MESSAGE_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

export const API_TIMEOUT = 30000; // 30 seconds

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth-token',
  USER: 'user',
  PREFERENCES: 'user-preferences',
};
