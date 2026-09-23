import type { AppointmentFormData } from '@/types';

export interface FormErrors {
  fullName?: string;
  phone?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}

export function validateFullName(name: string): string | undefined {
  const trimmed = name.trim();
  if (!trimmed) return 'Full Name is required.';
  if (trimmed.length < 2) return 'Full Name must be at least 2 characters.';
  if (!/^[a-zA-Z\s.]+$/.test(trimmed)) return 'Full Name should contain only letters, spaces, or dots.';
  return undefined;
}

export function validatePhone(phone: string): string | undefined {
  const digitsOnly = phone.replace(/\D/g, '');
  // Normalize if +91 prefix is present
  const normalised = digitsOnly.startsWith('91') && digitsOnly.length === 12
    ? digitsOnly.slice(2)
    : digitsOnly;

  if (!phone.trim()) return 'Phone Number is required.';
  if (normalised.length !== 10) return 'Please enter a valid 10-digit mobile number.';
  if (!/^[6-9]\d{9}$/.test(normalised)) return 'Mobile number must start with a digit between 6 and 9.';
  return undefined;
}

export function validateService(service: string): string | undefined {
  if (!service || service.trim() === '') return 'Please select a service.';
  return undefined;
}

export function validatePreferredDate(date: string): string | undefined {
  if (!date) return 'Preferred Date is required.';
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (selectedDate < today) return 'Date cannot be in the past.';
  return undefined;
}

export function validatePreferredTime(time: string): string | undefined {
  if (!time) return 'Preferred Time is required.';
  return undefined;
}

export function validateMessage(message?: string): string | undefined {
  if (message && message.length > 500) {
    return 'Message must not exceed 500 characters.';
  }
  return undefined;
}

export function validateAppointmentForm(data: AppointmentFormData): FormErrors {
  const errors: FormErrors = {};

  const nameError = validateFullName(data.fullName);
  if (nameError) errors.fullName = nameError;

  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.phone = phoneError;

  const serviceError = validateService(data.service);
  if (serviceError) errors.service = serviceError;

  const dateError = validatePreferredDate(data.preferredDate);
  if (dateError) errors.preferredDate = dateError;

  const timeError = validatePreferredTime(data.preferredTime);
  if (timeError) errors.preferredTime = timeError;

  const msgError = validateMessage(data.message);
  if (msgError) errors.message = msgError;

  return errors;
}
