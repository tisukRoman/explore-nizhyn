import { PostgrestError, User } from '@supabase/supabase-js';
import { UseMutateAsyncFunction, useMutation } from '@tanstack/react-query';
import { LoginData } from '@utils/types';
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';

export const useLogin = (): [
  UseMutateAsyncFunction<User | null, unknown, LoginData, unknown>,
  PostgrestError | null,
  boolean
] => {
  const { signIn } = useAuth();
  const router = useRouter();
  const { mutateAsync, error, isLoading } = useMutation(
    ['login'],
    (loginData: LoginData) => signIn(loginData),
    {
      onSuccess: () => router.push('/'),
    }
  );
  return [mutateAsync, error as PostgrestError | null, isLoading];
};
