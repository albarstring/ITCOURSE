import { useState, useCallback, useEffect } from 'react';
import courseService from '../services/courseService';

export const useCourse = (courseId) => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!courseId) return;

    const fetchCourse = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await courseService.getCourseById(courseId);
        setCourse(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch course');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  return { course, loading, error };
};

export const useCourses = (params = {}) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await courseService.getCourses(params);
        setCourses(data.courses || data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [JSON.stringify(params)]);

  return { courses, loading, error };
};

export const useLessons = (courseId) => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!courseId) return;

    const fetchLessons = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await courseService.getCourseLessons(courseId);
        setLessons(data.lessons || data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch lessons');
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [courseId]);

  return { lessons, loading, error };
};

export const useLesson = (courseId, lessonId) => {
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!courseId || !lessonId) return;

    const fetchLesson = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await courseService.getLesson(courseId, lessonId);
        setLesson(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch lesson');
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [courseId, lessonId]);

  return { lesson, loading, error };
};

export const useQuiz = (courseId, quizId) => {
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!courseId || !quizId) return;

    const fetchQuiz = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await courseService.getQuiz(courseId, quizId);
        setQuiz(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch quiz');
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [courseId, quizId]);

  return { quiz, loading, error };
};

export const useSubmitQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submit = useCallback(async (courseId, quizId, answers) => {
    setLoading(true);
    setError(null);
    try {
      const data = await courseService.submitQuiz(courseId, quizId, answers);
      return data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to submit quiz';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { submit, loading, error };
};

export const useUserProgress = (courseId) => {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!courseId) return;

    const fetchProgress = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await courseService.getUserProgress(courseId);
        setProgress(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch progress');
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [courseId]);

  return { progress, loading, error };
};
