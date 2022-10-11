import { NextPage } from 'next';
import { useGetProfile } from '@hooks/useGetProfile';
import ProfileForm from '@components/ProfileForm';
import Layout from '@components/Layout';

const Profile: NextPage = () => {
  const { data: profile, error, isLoading } = useGetProfile();

  const renderProfileForm = () => {
    if (profile) {
      return <ProfileForm profile={profile} isLoading={isLoading} />;
    } else if (error) {
      return <div>{error.message}</div>;
    } else {
      return <div>Завантаження...</div>;
    }
  };

  return (
    <Layout>
      <main className='pt-16 w-full h-full'>{renderProfileForm()}</main>
    </Layout>
  );
};

export default Profile;
