import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../utils/supabaseClient';
import { db } from '../utils/db';

type AuthContextType = {
  signUp: typeof db.signUp; 
  signIn: typeof db.login; 
  signOut: typeof db.logout; 
  user: User | null;
};

export const AuthContext = createContext<AuthContextType>({
  signUp: db.signUp,
  signIn: db.login,
  signOut: db.logout,
  user: null,
});

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const session = supabase.auth.session();

    setUser(session?.user ?? null);
    setLoading(false);

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const value = {
    signUp: db.signUp,
    signIn: db.login,
    signOut: db.logout,
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
