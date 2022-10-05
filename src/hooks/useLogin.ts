import { PostgrestError, User } from '@supabase/supabase-js';
import { UseMutateAsyncFunction, useMutation } from '@tanstack/react-query';
import { LoginData } from '@utils/types';
import { useAuth } from './useAuth';

export const useLogin = (): [
  UseMutateAsyncFunction<User | null, unknown, LoginData, unknown>,
  PostgrestError | null,
  boolean
] => {
  const { signIn } = useAuth();
  const { mutateAsync, error, isLoading } = useMutation(
    ['login'],
    (loginData: LoginData) => signIn(loginData),
    {}
  );
  return [mutateAsync, error as PostgrestError | null, isLoading];
};
