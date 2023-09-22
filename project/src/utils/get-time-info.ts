const MINUTES_PER_HOUR = 60;
const DIGITS_COUNT = 10;

const getTimeInfo = (entireMinutes: number) => {
  const hours = String(Math.floor(entireMinutes / MINUTES_PER_HOUR));
  const modulo = entireMinutes % MINUTES_PER_HOUR;
  const minutes = modulo < DIGITS_COUNT ? `0${modulo}` : `${modulo}`;
  return ({
    hours,
    minutes
  });
};

export default getTimeInfo;
