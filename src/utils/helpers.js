export const BASE_PATH = '/Personal-Injury-Law-Firm';

export function withBase(path = '/') {
  if (!path || path === '/') return `${BASE_PATH}/`;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}

export function formatDate(dateString, options = {}) {
  if (!dateString) return '—';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  });
}

export function formatDateTime(dateString) {
  if (!dateString) return '—';
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePhone(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10;
}

export function validateConsultationForm(values) {
  const errors = {};
  if (!values.firstName?.trim()) errors.firstName = 'First name is required';
  if (!values.lastName?.trim()) errors.lastName = 'Last name is required';
  if (!values.email?.trim()) errors.email = 'Email is required';
  else if (!validateEmail(values.email)) errors.email = 'Enter a valid email';
  if (!values.phone?.trim()) errors.phone = 'Phone is required';
  else if (!validatePhone(values.phone)) errors.phone = 'Enter a valid phone number';
  if (!values.caseType) errors.caseType = 'Please select a case type';
  if (!values.preferredContact) errors.preferredContact = 'Select a preferred contact method';
  if (!values.description?.trim()) errors.description = 'Please provide a brief description';
  else if (values.description.trim().length < 20)
    errors.description = 'Please provide at least 20 characters';
  if (!values.consent) errors.consent = 'Consent is required to submit';
  return errors;
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
