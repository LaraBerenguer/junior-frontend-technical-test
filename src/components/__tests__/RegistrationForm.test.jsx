import { describe, it, expect } from 'vitest';

describe('Registration Form Validation', () => {
  
  const validateEmail = (email) => {
    if (!email?.trim()) return "Email is required";
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? null : "Please enter a valid email address";
  };

  const validateName = (name) => !name?.trim() ? "Name is required" : null;

  const validateRole = (role) => {
    if (!role) return "Role is required";
    return ['Student', 'Junior', 'Mid', 'Senior'].includes(role) ? null : "Invalid role";
  };

  it('validates fields correctly', () => {
    // Valid cases
    expect(validateName('John Doe')).toBe(null);
    expect(validateEmail('test@example.com')).toBe(null);
    expect(validateRole('Junior')).toBe(null);
    
    // Invalid cases
    expect(validateName('')).toBe('Name is required');
    expect(validateEmail('invalid-email')).toBe('Please enter a valid email address');
    expect(validateRole('Invalid')).toBe('Invalid role');
  });

  it('validates complete form', () => {
    const validateForm = (data) => {
      const errors = {};
      ['name', 'email', 'role'].forEach(field => {
        const validator = { name: validateName, email: validateEmail, role: validateRole }[field];
        const error = validator(data[field]);
        if (error) errors[field] = error;
      });
      return Object.keys(errors).length ? errors : null;
    };

    expect(validateForm({ name: 'John', email: 'john@test.com', role: 'Junior' })).toBe(null);
    expect(validateForm({ name: '', email: 'invalid', role: '' })).toEqual({
      name: 'Name is required',
      email: 'Please enter a valid email address', 
      role: 'Role is required'
    });
  });
});