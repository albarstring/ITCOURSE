import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button, Input, Alert } from '../components/common/FormElements';
import { validateForm, loginSchema } from '../utils/validation';
import { MainLayout } from '../layouts/MainLayout';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loading, error } = useAuth();
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = await validateForm(loginSchema, values);
    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    try {
      await login(values.email, values.password);
      navigate('/dashboard');
    } catch (err) {
      setErrors({ form: err.response?.data?.message || 'Login failed' });
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen pt-16 bg-gradient-to-br from-secondary-50 to-white flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-secondary-900 mb-2 text-center">
              Welcome Back
            </h1>
            <p className="text-center text-secondary-600 mb-8">
              Sign in to your EduCourse account
            </p>

            {errors.form && (
              <Alert variant="error" className="mb-6">
                {errors.form}
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.email}
                error={errors.email}
                disabled={loading}
              />

              <Input
                label="Password"
                type="password"
                name="password"
                placeholder="••••••••"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.password}
                error={errors.password}
                disabled={loading}
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-secondary-300 text-primary-600"
                  />
                  <span className="text-secondary-700">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-primary-600 hover:text-primary-700">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full mt-6"
                isLoading={loading}
              >
                Sign In
              </Button>
            </form>

            <p className="text-center text-secondary-600 mt-6">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary-600 hover:text-primary-700 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
