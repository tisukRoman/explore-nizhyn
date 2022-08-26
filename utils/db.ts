import { supabase } from './supabaseClient';
import {
  SignUpData,
  LoginData,
  Profile,
  Post,
  PostDetails,
  Comment,
} from './types';

export class db {
  static async getProfile(id: string) {
    const { data, error } = await supabase
      .from<Profile>('profiles')
      .select('username, avatar_url')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  }

  static async getPostList() {
    const { data, error } = await supabase
      .from<Post>('posts')
      .select(`id, title, img_src, tag, profiles(id, avatar_url, username)`)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  }

  static async getPostDetails(post_id: number) {
    const { data, error } = await supabase
      .from<PostDetails>('posts')
      .select('*, profiles(id, avatar_url, username)')
      .eq('id', post_id)
      .single();
    if (error) throw error;
    return data;
  }

  static async getPostComments(post_id: number) {
    const { data, error } = await supabase
      .from<Comment>('comments')
      .select('*, profiles(id, username, avatar_url)')
      .eq('post_id', post_id);
    if (error) throw error;
    return data;
  }

  static async signUp(authData: SignUpData) {
    const { user, error } = await supabase.auth.signUp({
      email: authData.email,
      password: authData.password,
    });
    if (error) throw error;
    const { error: err } = await supabase
      .from('profiles')
      .update({
        username: authData.username,
        avatar_url: authData.avatar_url,
      })
      .eq('id', user?.id);
    if (err) return err;
    return 'Реєстрація успішна';
  }

  static async login(loginData: LoginData) {
    const { user, error } = await supabase.auth.signIn({
      email: loginData.email,
      password: loginData.password,
    });
    if (error) throw error;
    return user;
  }

  static async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }
}
