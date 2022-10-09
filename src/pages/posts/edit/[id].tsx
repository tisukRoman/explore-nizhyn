import * as yup from 'yup';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { Post, PostData } from '@utils/types';
import { api } from '@utils/api';
import { motion } from 'framer-motion';
import { ParsedUrlQuery } from 'querystring';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRedirect } from '@hooks/useRedirect';
import { useGetPost } from '@hooks/useGetPost';
import { useEditPost } from '@hooks/useEditPost';
import { useAuth } from '@hooks/useAuth';
import Layout from '@components/Layout';
import Button from '@components/shared/Button';
import TextInput from '@components/shared/TextInput';
import PageTitle from '@components/shared/PageTitle';
import TextEditor from '@components/TextEditor';

const schema = yup.object({
  title: yup.string().required(`Заголовок обов'язково`),
  tag: yup.string().required(`Назва категорії обов'язково`),
  img_src: yup
    .string()
    .url('Має бути url картинки')
    .required(`Картинка обов'язково`),
  description: yup.string(),
});

const EditPost: NextPage = () => {
  const { user } = useAuth();
  useRedirect(user);

  const [post, isFetching, error] = useGetPost();
  const [editPost, editError, isEditing] = useEditPost();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: post,
  });

  const onSubmit = async (data: PostData) => {
    const { profiles, ...postData } = data as Post;

    if (postData.content && user?.id) {
      await editPost({ ...postData, author_id: user.id });
    }
  };

  const renderForm = () => {
    if (post) {
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            type='text'
            {...register('title')}
            placeholder='Заголовок посту...'
            disabled={isEditing}
            has_error={errors.title ? 1 : 0}
            error_text={errors.title?.message}
          />
          <TextInput
            type='text'
            {...register('tag')}
            placeholder='Назва категорії...'
            disabled={isEditing}
            has_error={errors.tag ? 1 : 0}
            error_text={errors.tag?.message}
          />
          <TextInput
            type='text'
            {...register('img_src')}
            placeholder='Введіть url картинки...'
            disabled={isEditing}
            has_error={errors.img_src ? 1 : 0}
            error_text={errors.img_src?.message}
          />
          <TextInput
            type='text'
            {...register('description')}
            placeholder='Короткий опис...'
            disabled={isEditing}
            has_error={errors.description ? 1 : 0}
            error_text={errors.description?.message}
          />
          {isFetching ? (
            <p className='text-white'>Завантаження...</p>
          ) : (
            <motion.div
              initial={{ opacity: 0, translateY: -50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TextEditor name='content' control={control} />
            </motion.div>
          )}
          <Button type='submit' disabled={isEditing}>
            {isEditing ? 'Зачекайте' : 'Зберегти зміни'}
          </Button>
        </form>
      );
    } else if (error) {
      return <>Помилка</>;
    } else {
      return <>Завантаження...</>;
    }
  };

  return (
    <Layout>
      <div className='pt-20 min-h-screen w-full mx-auto md:max-w-screen-lg'>
        <div className='my-6 px-4'>
          <PageTitle>Редагувати Пост</PageTitle>
          {renderForm()}
        </div>
      </div>
    </Layout>
  );
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await api.getPostList();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id: postId } = params as Params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['post', postId], () =>
    api.getPostDetails(Number(postId))
  );
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

export default EditPost;
