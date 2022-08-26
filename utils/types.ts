//import type { definitions } from './generated-types';

export type Profile = {
  id: string;
  username?: string;
  avatar_url?: string;
  location?: string;
  about?: string;
  wallpaper_url?: string;
  role_id?: number;
};

export type Comment = {
  id: number;
  created_at?: string;
  post_id?: number;
  user_id?: string;
  text?: string;
  profiles: {
    id: string;
    username?: string;
    avatar_url?: string;
  };
};

export type Post = {
  id: number;
  created_at?: string;
  title?: string;
  img_src?: string;
  tag?: string;
  profiles: {
    id: string;
    username?: string;
    avatar_url?: string;
  };
};

export type PostDetails = {
  id: number;
  created_at?: string;
  title?: string;
  description?: string;
  content?: string;
  img_src?: string;
  tag?: string;
  profiles: {
    id: string;
    username?: string;
    avatar_url?: string;
  };
};

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
