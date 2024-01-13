import dayjs from 'dayjs';

const getReadableDate = (date: string) => dayjs(date).format('MMMM DD, YYYY');

export default getReadableDate;
