import { create } from 'zustand';

const useCourseStore = create((set) => ({
  courses: [],
  selectedCourse: null,
  userProgress: {},

  setCourses: (courses) => set({ courses }),
  setSelectedCourse: (course) => set({ selectedCourse: course }),
  setUserProgress: (progress) => set({ userProgress: progress }),

  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, course],
    })),

  updateCourse: (courseId, updates) =>
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId ? { ...course, ...updates } : course
      ),
    })),

  deleteCourse: (courseId) =>
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== courseId),
    })),

  updateProgress: (courseId, progress) =>
    set((state) => ({
      userProgress: {
        ...state.userProgress,
        [courseId]: progress,
      },
    })),
}));

export default useCourseStore;
