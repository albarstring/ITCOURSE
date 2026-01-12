import React from 'react';
import { cn } from '../../utils/classNames';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  isLoading = false,
  onClick,
  className,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-fast focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500',
    secondary: 'bg-secondary-100 hover:bg-secondary-200 text-secondary-900 focus:ring-secondary-500',
    danger: 'bg-error hover:bg-red-600 text-white focus:ring-error',
    success: 'bg-success hover:bg-green-600 text-white focus:ring-success',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
    ghost: 'hover:bg-secondary-100 text-secondary-900',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-2',
    md: 'px-4 py-2 text-base gap-2',
    lg: 'px-6 py-3 text-lg gap-3',
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export const Input = ({
  label,
  error,
  touched,
  variant = 'default',
  size = 'md',
  className,
  ...props
}) => {
  const baseStyles = 'w-full border-2 rounded-md transition-colors duration-fast focus:outline-none focus:ring-2 focus:ring-offset-0';

  const variants = {
    default: 'border-secondary-200 focus:border-primary-500 focus:ring-primary-500 placeholder-secondary-400',
    error: 'border-error focus:border-error focus:ring-error',
    success: 'border-success focus:border-success focus:ring-success',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  };

  const currentVariant = error && touched ? 'error' : variant;

  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-secondary-700 mb-2">{label}</label>}
      <input
        className={cn(baseStyles, variants[currentVariant], sizes[size], className)}
        {...props}
      />
      {error && touched && <p className="text-error text-sm mt-1">{error}</p>}
    </div>
  );
};

export const Textarea = ({
  label,
  error,
  touched,
  rows = 4,
  className,
  ...props
}) => {
  const baseStyles = 'w-full border-2 border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 px-4 py-2 transition-colors duration-fast resize-vertical';

  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-secondary-700 mb-2">{label}</label>}
      <textarea
        rows={rows}
        className={cn(baseStyles, error && touched && 'border-error', className)}
        {...props}
      />
      {error && touched && <p className="text-error text-sm mt-1">{error}</p>}
    </div>
  );
};

export const Select = ({
  label,
  error,
  touched,
  options = [],
  className,
  ...props
}) => {
  const baseStyles = 'w-full border-2 border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 px-4 py-2 transition-colors duration-fast';

  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-secondary-700 mb-2">{label}</label>}
      <select
        className={cn(baseStyles, error && touched && 'border-error', className)}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && touched && <p className="text-error text-sm mt-1">{error}</p>}
    </div>
  );
};

export const Card = ({ children, className, ...props }) => {
  return (
    <div className={cn('bg-white rounded-lg border border-secondary-200 shadow-md p-6', className)} {...props}>
      {children}
    </div>
  );
};

export const Badge = ({ children, variant = 'default', className, ...props }) => {
  const variants = {
    default: 'bg-secondary-100 text-secondary-800',
    primary: 'bg-primary-100 text-primary-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export const Loader = ({ size = 'md', className }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <svg
        className={cn('animate-spin text-primary-500', sizes[size])}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};

export const Alert = ({ children, variant = 'info', onClose, className, ...props }) => {
  const variants = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
  };

  return (
    <div
      className={cn(
        'border-l-4 p-4 rounded-md flex items-center justify-between',
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="text-sm">{children}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="text-lg font-semibold hover:opacity-70"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export const Modal = ({ isOpen, onClose, title, children, size = 'md', className }) => {
  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        className={cn(
          'bg-white rounded-lg shadow-xl w-full',
          sizes[size],
          className
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-secondary-200">
          <h2 className="text-xl font-semibold text-secondary-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-secondary-400 hover:text-secondary-600"
          >
            ✕
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export const Pagination = ({ currentPage, totalPages, onPageChange, className }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export const Tabs = ({ tabs = [], activeTab, onTabChange, className }) => {
  return (
    <div className={cn('border-b border-secondary-200', className)}>
      <div className="flex gap-0">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onTabChange?.(tab.value)}
            className={cn(
              'px-4 py-3 text-sm font-medium border-b-2 transition-colors',
              activeTab === tab.value
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-secondary-600 hover:text-secondary-900'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
