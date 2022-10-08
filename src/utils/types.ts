import type { definitions } from './generated-types';

export enum Roles {
  ADMIN = 1,
  AUTHOR = 2,
  READER = 3,
}

export type PostTable = definitions['posts'];
export type ProfileTable = definitions['profiles'];
export type CommentTable = definitions['comments'];
export type RolesTable = definitions['roles'];

export type Profile = ProfileTable & {
  roles: RolesTable;
};

export type Comment = CommentTable & {
  profiles: Profile;
};

export type Post = PostTable & {
  profiles: Profile;
};

// Form data types

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

export type PostData = Omit<PostTable, 'id' | 'created_at'>;

export type CommentData = Omit<CommentTable, 'id' | 'created_at'>;
