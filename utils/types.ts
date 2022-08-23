import type { definitions } from './generated-types';

export type Post = definitions['posts'];

export type AuthData = {
  email: string;
  password: string;
  username: string;
  avatar_url?: string;
};
