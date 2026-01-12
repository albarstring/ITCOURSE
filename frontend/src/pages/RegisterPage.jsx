import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button, Input, Alert } from '../components/common/FormElements';
import { validateForm, registerSchema } from '../utils/validation';
import { MainLayout } from '../layouts/MainLayout';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register, loading } = useAuth();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = await validateForm(registerSchema, values);
    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    try {
      await register(values);
      navigate('/login', {
        state: { message: 'Registration successful! Please sign in.' },
      });
    } catch (err) {
      setErrors({ form: err.response?.data?.message || 'Registration failed' });
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen pt-16 bg-gradient-to-br from-secondary-50 to-white flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-secondary-900 mb-2 text-center">
              Create Account
            </h1>
            <p className="text-center text-secondary-600 mb-8">
              Join EduCourse and start learning today
            </p>

            {errors.form && (
              <Alert variant="error" className="mb-6">
                {errors.form}
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="First Name"
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched.firstName}
                  error={errors.firstName}
                  disabled={loading}
                />
                <Input
                  label="Last Name"
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched.lastName}
                  error={errors.lastName}
                  disabled={loading}
                />
              </div>

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

              <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.confirmPassword}
                error={errors.confirmPassword}
                disabled={loading}
              />

              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={values.agreeToTerms}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-secondary-300 text-primary-600 mt-1"
                />
                <span className="text-sm text-secondary-700">
                  I agree to the{' '}
                  <Link to="/terms" className="text-primary-600 hover:text-primary-700">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-primary-600 hover:text-primary-700">
                    Privacy Policy
                  </Link>
                </span>
              </label>
              {errors.agreeToTerms && touched.agreeToTerms && (
                <p className="text-error text-sm">{errors.agreeToTerms}</p>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full mt-6"
                isLoading={loading}
              >
                Create Account
              </Button>
            </form>

            <p className="text-center text-secondary-600 mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;
