import { NextPage } from 'next';
import { useAuth } from '../../hooks/useAuth';
import { useRedirect } from '../../hooks/useRedirect';

const CreatePost: NextPage = () => {
  const {user} = useAuth();
  useRedirect(user);

  return <>

  </>;
};

export default CreatePost;
