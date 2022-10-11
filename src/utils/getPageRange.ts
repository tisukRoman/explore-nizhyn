import { POSTS_PER_PAGE } from './consts';

export const getPageRange = (page: number = 0): [from: number, to: number] => {
  const from = page ? page * POSTS_PER_PAGE + page : page * POSTS_PER_PAGE;
  const to = from + POSTS_PER_PAGE;
  return [from, to];
};
