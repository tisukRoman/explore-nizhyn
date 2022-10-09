import {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { supabase } from '@utils/supabaseClient';
import { User } from '@supabase/supabase-js';
import { api } from '@utils/api';

type AuthContextType = {
  signUp: typeof api.signUp;
  signIn: typeof api.login;
  signOut: typeof api.logout;
  user: User | null;
};

export const AuthContext = createContext<AuthContextType>({
  signUp: api.signUp,
  signIn: api.login,
  signOut: api.logout,
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

  const value = useMemo(
    () => ({
      signUp: api.signUp,
      signIn: api.login,
      signOut: api.logout,
      user,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
