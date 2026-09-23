import type { AppointmentFormData } from '@/types';

export interface AppointmentRequest extends AppointmentFormData {}

// PHASE 2: replace this stub with a real POST to the backend endpoint.
export async function submitAppointment(data: AppointmentRequest): Promise<{ ok: true }> {
  await new Promise((r) => setTimeout(r, 800));
  console.info('[demo] appointment request (not persisted):', data);
  return { ok: true };
}
