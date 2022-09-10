import { supabase } from './supabaseClient';
import {
  SignUpData,
  LoginData,
  Post,
  Comment,
  Roles,
  Profile,
  PostData,
} from './types';

export class db {
  static async getProfile(id: string) {
    const { data, error } = await supabase
      .from<Profile>('profiles')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  }

  static async getAuthorsList() {
    const { data, error } = await supabase
      .from<Profile>('profiles')
      .select('*')
      .in('role_id', [Roles.ADMIN, Roles.AUTHOR])
      .order('role_id');
    if (error) throw error;
    return data;
  }

  static async getAuthorPosts(author_id: string) {
    const { data, error } = await supabase
      .from<Post>('posts')
      .select(`id, title, img_src, tag, profiles(id, avatar_url, username)`)
      .eq('author_id', author_id)
      .order('created_at', { ascending: false });
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

  static async getSearchedPostList(query: string) {
    const { data, error } = await supabase
      .from<Post>('posts')
      .select(`id, title, img_src, tag, profiles(id, avatar_url, username)`)
      .or(`or(title.ilike.%${query}%, tag.ilike.%${query}%), description.ilike.%${query}%`)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  }

  static async getPostDetails(post_id: number) {
    const { data, error } = await supabase
      .from<Post>('posts')
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

  static async createPost(postData: PostData) {
    const { data, error } = await supabase.from('posts').insert([postData]);
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
