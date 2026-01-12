import clsx from 'clsx';

// Button variants
export const buttonVariants = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white',
  secondary: 'bg-secondary-100 hover:bg-secondary-200 text-secondary-900',
  danger: 'bg-error hover:bg-red-600 text-white',
  success: 'bg-success hover:bg-green-600 text-white',
  outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
  ghost: 'hover:bg-secondary-100 text-secondary-900',
};

// Button sizes
export const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

// Input variants
export const inputVariants = {
  default: 'border-secondary-200 focus:border-primary-500 focus:ring-primary-500',
  error: 'border-error focus:border-error focus:ring-error',
  success: 'border-success focus:border-success focus:ring-success',
};

// Card styles
export const cardStyles = {
  base: 'bg-white rounded-lg border border-secondary-200 shadow-md',
  flat: 'bg-secondary-50 rounded-lg',
  elevated: 'bg-white rounded-lg shadow-lg',
};

// Utility function to combine classNames
export const cn = (...classes) => {
  return clsx(...classes);
};

// Responsive classes helper
export const responsiveClasses = {
  container: 'w-full px-4 mx-auto sm:px-6 md:px-8 lg:px-10',
  grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
  gridAuto: 'grid auto-cols-max gap-4',
};

// Common compositions
export const buttonClass = (variant = 'primary', size = 'md', disabled = false) => {
  return cn(
    'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-fast',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    buttonVariants[variant] || buttonVariants.primary,
    buttonSizes[size] || buttonSizes.md,
    disabled && 'opacity-50 cursor-not-allowed'
  );
};

export const inputClass = (variant = 'default', size = 'md') => {
  return cn(
    'w-full px-3 py-2 border-2 rounded-md transition-colors duration-fast',
    'placeholder-secondary-400 focus:outline-none',
    inputVariants[variant] || inputVariants.default,
    size === 'lg' && 'px-4 py-3 text-lg'
  );
};

export const cardClass = (style = 'base') => {
  return cn(cardStyles[style] || cardStyles.base);
};
