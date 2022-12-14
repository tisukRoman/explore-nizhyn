import { useMutation } from '@tanstack/react-query';
import { LoginData } from '@utils/types';
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';

export const useLogin = () => {
  const router = useRouter();
  const { signIn } = useAuth();

  return useMutation((loginData: LoginData) => signIn(loginData), {
    onSuccess: () => router.push('/'),
  });
};
