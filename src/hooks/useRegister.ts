import { useMutation } from '@tanstack/react-query';
import { SignUpData } from '@utils/types';
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';

export const useRegister = () => {
  const router = useRouter();
  const { signUp } = useAuth();

  return useMutation((registerData: SignUpData) => signUp(registerData), {
    onSuccess: () => router.push('/'),
  });
};
