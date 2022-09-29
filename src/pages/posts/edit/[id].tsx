import * as yup from 'yup';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { PostData } from '@utils/types';
import { db } from '@utils/db';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRedirect } from '@hooks/useRedirect';
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

type EditPostProps = {
  post: PostData;
};

const EditPost: NextPage<EditPostProps> = ({ post }) => {
  const router = useRouter();
  const { user } = useAuth();
  useRedirect(user);

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
    if (data.content && user?.id) {
      const postId = Number(router.query.id);
      await db.editPost(postId, { ...data, author_id: user.id });
      router.push(`/posts/${postId}`);
    }
  };

  return (
    <Layout>
      <div className='pt-20 min-h-screen w-full mx-auto md:max-w-screen-lg'>
        <div className='my-6 px-4'>
          <PageTitle>Редагувати Пост</PageTitle>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            type='text'
            {...register('title')}
            placeholder='Заголовок посту...'
            has_error={errors.title ? 1 : 0}
            error_text={errors.title?.message}
          />
          <TextInput
            type='text'
            {...register('tag')}
            placeholder='Назва категорії...'
            has_error={errors.tag ? 1 : 0}
            error_text={errors.tag?.message}
          />
          <TextInput
            type='text'
            {...register('img_src')}
            placeholder='Введіть url картинки...'
            has_error={errors.img_src ? 1 : 0}
            error_text={errors.img_src?.message}
          />
          <TextInput
            type='text'
            {...register('description')}
            placeholder='Короткий опис...'
            has_error={errors.description ? 1 : 0}
            error_text={errors.description?.message}
          />
          <TextEditor name='content' control={control} />
          <Button type='submit'>Зберегти зміни</Button>
        </form>
      </div>
    </Layout>
  );
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await db.getPostList();
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
  const { profiles, id, ...post } = await db.getPostDetails(Number(postId));

  return {
    props: { post },
  };
};

export default EditPost;
