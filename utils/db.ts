import { supabase } from './supabaseClient';
import { AuthData, Post } from './types';

export const db = {
  async getPostList() {
    const { data, error } = await supabase
      .from<Post>('posts')
      .select('id, title, img_src, tag');

    if (error) {
      throw new Error(error.message);
    }
    return data;
  },
  async signUp(authData: AuthData) {
    const { user, session, error } = await supabase.auth.signUp(
      {
        email: authData.email,
        password: authData.password,
      },
      {
        data: {
          username: authData.username,
          avatar_url: authData.avatar_url,
        },
      }
    );
    if (error) {
      throw new Error(error.message);
    }
    return { user, session };
  },
};
