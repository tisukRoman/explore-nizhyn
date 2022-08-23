import { supabase } from './supabaseClient';
import { SignUpData, Post, LoginData } from './types';

export class db {
  static async getPostList() {
    const { data, error } = await supabase
      .from<Post>('posts')
      .select('id, title, img_src, tag');

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  static async signUp(authData: SignUpData) {
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
  }

  static async login(loginData: LoginData) {
    const { user, error } = await supabase.auth.signIn({
      email: loginData.email,
      password: loginData.password,
    });
    if (error) {
      throw new Error(error.message);
    }
    return user;
  }
}
