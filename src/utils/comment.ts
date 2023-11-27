import { TComment } from '../types/comment';

function getMonthYearFromIso(isoDate: string) {
  return new Date(isoDate).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

function getSimpleDateFromIso(isoDate: string) {
  const date = new Date(isoDate);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function sortByDate(a: TComment, b: TComment) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export { getMonthYearFromIso, getSimpleDateFromIso, sortByDate };
