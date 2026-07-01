export const validateEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

export const isPastDate = (date) => {
  const today = new Date().toISOString().split("T")[0];
  return date < today;
};

export const isTimeValid = (startTime, endTime) => {
  return startTime < endTime;
};