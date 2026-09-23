import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { FormField } from './FormField';
import { SuccessState } from './SuccessState';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';
import type { AppointmentFormData } from '@/types';
import { submitAppointment } from '@/lib/api';
import {
  validateAppointmentForm,
  validateFullName,
  validatePhone,
  validateService,
  validatePreferredDate,
  validatePreferredTime,
  validateMessage,
  type FormErrors,
} from '@/lib/validation';

interface AppointmentFormProps {
  variant?: 'contact' | 'appointment';
  defaultService?: string;
  className?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  defaultService,
  className,
}) => {
  const [searchParams] = useSearchParams();
  const initialServiceFromQuery = searchParams.get('service') || defaultService || '';

  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    service: initialServiceFromQuery,
    preferredDate: todayStr,
    preferredTime: 'Morning (9:00 AM – 12:00 PM)',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fullNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (initialServiceFromQuery && !formData.service) {
      setFormData((prev) => ({ ...prev, service: initialServiceFromQuery }));
    }
  }, [initialServiceFromQuery]);

  const timeSlots = [
    'Morning (9:00 AM – 12:00 PM)',
    'Afternoon (12:00 PM – 4:00 PM)',
    'Evening (4:00 PM – 7:30 PM)',
    'Flexible / By Appointment Alignment',
  ];

  const handleBlur = (field: keyof AppointmentFormData) => {
    switch (field) {
      case 'fullName':
        setErrors((prev) => ({ ...prev, fullName: validateFullName(formData.fullName) }));
        break;
      case 'phone':
        setErrors((prev) => ({ ...prev, phone: validatePhone(formData.phone) }));
        break;
      case 'service':
        setErrors((prev) => ({ ...prev, service: validateService(formData.service) }));
        break;
      case 'preferredDate':
        setErrors((prev) => ({ ...prev, preferredDate: validatePreferredDate(formData.preferredDate) }));
        break;
      case 'preferredTime':
        setErrors((prev) => ({ ...prev, preferredTime: validatePreferredTime(formData.preferredTime) }));
        break;
      case 'message':
        setErrors((prev) => ({ ...prev, message: validateMessage(formData.message) }));
        break;
    }
  };

  const handleChange = (field: keyof AppointmentFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [valueKey(field)]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const valueKey = (field: keyof AppointmentFormData) => field;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateAppointmentForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Focus first error field
      if (validationErrors.fullName && fullNameRef.current) {
        fullNameRef.current.focus();
      } else if (validationErrors.phone && phoneRef.current) {
        phoneRef.current.focus();
      } else if (validationErrors.service && serviceRef.current) {
        serviceRef.current.focus();
      } else if (validationErrors.preferredDate && dateRef.current) {
        dateRef.current.focus();
      } else if (validationErrors.preferredTime && timeRef.current) {
        timeRef.current.focus();
      }
      return;
    }

    setIsSubmitting(true);
    try {
      await submitAppointment(formData);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      service: '',
      preferredDate: todayStr,
      preferredTime: 'Morning (9:00 AM – 12:00 PM)',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return <SuccessState onReset={handleReset} />;
  }

  const inputBaseClasses =
    'w-full px-4 py-3 bg-white border rounded-xl text-ink-900 font-sans text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 shadow-sm';
  const inputErrorClasses = 'border-maroon-700 bg-maroon-50/30';
  const inputNormalClasses = 'border-gold-400/30 hover:border-gold-400/60';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={className}
    >
      <div className="space-y-6">
        <FormField
          id="fullName"
          label="Full Name"
          required
          error={errors.fullName}
        >
          <input
            ref={fullNameRef}
            id="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            onBlur={() => handleBlur('fullName')}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            placeholder="e.g. S. Ramanathan"
            className={`${inputBaseClasses} ${errors.fullName ? inputErrorClasses : inputNormalClasses}`}
          />
        </FormField>

        <FormField
          id="phone"
          label="Phone Number"
          required
          error={errors.phone}
          helpText="10-digit mobile number for appointment confirmation"
        >
          <input
            ref={phoneRef}
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            placeholder="e.g. 9944089820"
            className={`${inputBaseClasses} ${errors.phone ? inputErrorClasses : inputNormalClasses}`}
          />
        </FormField>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="service"
            label="Service Requested"
            required
            error={errors.service}
          >
            <select
              ref={serviceRef}
              id="service"
              required
              value={formData.service}
              onChange={(e) => handleChange('service', e.target.value)}
              onBlur={() => handleBlur('service')}
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? 'service-error' : undefined}
              className={`${inputBaseClasses} ${errors.service ? inputErrorClasses : inputNormalClasses}`}
            >
              <option value="">Select a Service</option>
              {services.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </FormField>

          <FormField
            id="preferredDate"
            label="Preferred Date"
            required
            error={errors.preferredDate}
          >
            <input
              ref={dateRef}
              id="preferredDate"
              type="date"
              required
              min={todayStr}
              value={formData.preferredDate}
              onChange={(e) => handleChange('preferredDate', e.target.value)}
              onBlur={() => handleBlur('preferredDate')}
              aria-invalid={!!errors.preferredDate}
              aria-describedby={errors.preferredDate ? 'preferredDate-error' : undefined}
              className={`${inputBaseClasses} ${errors.preferredDate ? inputErrorClasses : inputNormalClasses}`}
            />
          </FormField>
        </div>

        <FormField
          id="preferredTime"
          label="Preferred Time Window"
          required
          error={errors.preferredTime}
        >
          <select
            ref={timeRef}
            id="preferredTime"
            required
            value={formData.preferredTime}
            onChange={(e) => handleChange('preferredTime', e.target.value)}
            onBlur={() => handleBlur('preferredTime')}
            aria-invalid={!!errors.preferredTime}
            aria-describedby={errors.preferredTime ? 'preferredTime-error' : undefined}
            className={`${inputBaseClasses} ${errors.preferredTime ? inputErrorClasses : inputNormalClasses}`}
          >
            {timeSlots.map((slot, idx) => (
              <option key={idx} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          id="message"
          label="Additional Details (Optional)"
          error={errors.message}
          helpText={`${formData.message?.length || 0} / 500 characters`}
        >
          <textarea
            id="message"
            rows={4}
            maxLength={500}
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onBlur={() => handleBlur('message')}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            placeholder="Share birth date, time, birthplace, or specific query details..."
            className={`${inputBaseClasses} ${errors.message ? inputErrorClasses : inputNormalClasses}`}
          />
        </FormField>

        <Button
          type="submit"
          disabled={isSubmitting}
          variant="primary"
          size="lg"
          className="w-full mt-4"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" /> SUBMITTING REQUEST...
            </>
          ) : (
            'REQUEST CONSULTATION APPOINTMENT'
          )}
        </Button>
      </div>
    </form>
  );
};
