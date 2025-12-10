import { forwardRef } from 'react'

/**
 * Input - Accessible form input with proper labeling
 * Accessibility: Always has visible label, proper aria attributes, 
 * clear focus states for keyboard users
 */
const Input = forwardRef(function Input({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  error,
  helpText,
  as = 'input',
  rows = 4,
  className = ''
}, ref) {
  const Component = as === 'textarea' ? 'textarea' : 'input'
  const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-')}`
  const errorId = error ? `${inputId}-error` : undefined
  const helpId = helpText ? `${inputId}-help` : undefined
  
  const describedBy = [errorId, helpId].filter(Boolean).join(' ') || undefined

  return (
    <div className={`form-field ${error ? 'has-error' : ''} ${className}`}>
      <label htmlFor={inputId} className="form-field-label">
        {label}
        {required && <span className="required-indicator" aria-hidden="true"> *</span>}
      </label>
      
      <Component
        ref={ref}
        id={inputId}
        type={type}
        className="form-field-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        aria-required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={describedBy}
        rows={as === 'textarea' ? rows : undefined}
      />
      
      {error && (
        <span id={errorId} className="form-field-error" role="alert">
          {error}
        </span>
      )}
      
      {helpText && !error && (
        <span id={helpId} className="form-field-help">
          {helpText}
        </span>
      )}
    </div>
  )
})

export default Input

