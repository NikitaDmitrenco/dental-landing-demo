export type AppointmentRequest = {
  name: string;
  phone: string;
  service: string;
};

export type SubmissionResult = {
  ok: boolean;
  message: string;
};

/** Demo mode deliberately does not transmit or persist any form values. */
export async function submitAppointment(_request: AppointmentRequest): Promise<SubmissionResult> {
  return {
    ok: true,
    message: 'Форма заполнена корректно. В рабочей версии заявка будет отправлена администратору',
  };
}
