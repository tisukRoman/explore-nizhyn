import type { definitions } from './generated-types';

export type Post = definitions['posts'];

export type SignUpData = {
  email: string;
  password: string;
  username: string;
  avatar_url?: string;
};

export type LoginData = {
  email: string;
  password: string;
};
