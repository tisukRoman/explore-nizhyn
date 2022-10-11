import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { Profile } from '@utils/types';
import { api } from '@utils/api';

export const useEditProfile = () => {
  const router = useRouter();
  return useMutation((profileData: Profile) => api.editProfile(profileData), {
    onSuccess: () => router.push('/'),
  });
};
