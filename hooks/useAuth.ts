import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      } else {
        console.log(user);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { login };
};
