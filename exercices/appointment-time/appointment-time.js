// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  let currentTime = now != null ? now : Date.now();
  let appointmentTime = currentTime + days * 24 * 60 * 60 * 1000;

  appointmentTime +=
    (new Date(appointmentTime).getTimezoneOffset() -
      new Date(currentTime).getTimezoneOffset()) *
    60 *
    1000;

  let appointmentDate = new Date(appointmentTime);

  return appointmentDate
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString()
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  let appointment = new Date(timestamp);

  return {
    year: appointment.getFullYear(),
    month: appointment.getMonth(),
    date: appointment.getDate(),
    hour: appointment.getHours(),
    minute: appointment.getMinutes(),
  }
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  let appointment = getAppointmentDetails(timestamp);

  let { year, month, date, hour, minute } = { ...appointment, ...options };

  let newDate = new Date(year, month, date, hour, minute);

  return {
    year: newDate.getFullYear(),
    month: newDate.getMonth(),
    date: newDate.getDate(),
    hour: newDate.getHours(),
    minute: newDate.getMinutes(),
  }
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  return Math.round((new Date(timestampB).getTime() - new Date(timestampA).getTime()) / 1000)
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return new Date(appointmentTimestamp).getTime() > new Date(currentTimestamp).getTime()
}
