import { supabase } from './supabaseClient';
import { Post } from './types';

export const db = {
  posts: () => supabase.from<Post>('posts'),
};
