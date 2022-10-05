import * as yup from 'yup';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRedirect } from '@hooks/useRedirect';
import { useAuth } from '@hooks/useAuth';
import Layout from '@components/Layout';
import TextEditor from '@components/TextEditor';
import TextInput from '@components/shared/TextInput';
import PageTitle from '@components/shared/PageTitle';
import Button from '@components/shared/Button';
import { PostData } from '@utils/types';
import { db } from '@utils/db';
import { useCreatePost } from '@hooks/useCreatePost';

const schema = yup.object({
  title: yup.string().required(`Заголовок обов'язково`),
  tag: yup.string().required(`Назва категорії обов'язково`),
  img_src: yup
    .string()
    .url('Має бути url картинки')
    .required(`Картинка обов'язково`),
  description: yup.string(),
});

const CreatePost: NextPage = () => {
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
  });

  const [createPost, createError, isCreating] = useCreatePost();

  const onSubmit = async (data: PostData) => {
    if (data.content && user?.id) {
      await createPost({ ...data, author_id: user.id });
      if (!createError) {
        router.push('/');
      }
    }
  };

  const renderError = () => {
    return (
      createError && (
        <div className='text-red-500 text-lg font-bold my-8'>
          Помилка створення посту
        </div>
      )
    );
  };

  return (
    <Layout>
      <div className='pt-20 min-h-screen w-full mx-auto md:max-w-screen-lg'>
        <div className='my-6 px-4'>
          <PageTitle>Створити Пост</PageTitle>
          {renderError()}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            type='text'
            {...register('title')}
            placeholder='Заголовок посту...'
            disabled={isCreating}
            has_error={errors.title ? 1 : 0}
            error_text={errors.title?.message}
          />
          <TextInput
            type='text'
            {...register('tag')}
            placeholder='Назва категорії...'
            disabled={isCreating}
            has_error={errors.tag ? 1 : 0}
            error_text={errors.tag?.message}
          />
          <TextInput
            type='text'
            {...register('img_src')}
            placeholder='Введіть url картинки...'
            disabled={isCreating}
            has_error={errors.img_src ? 1 : 0}
            error_text={errors.img_src?.message}
          />
          <TextInput
            type='text'
            {...register('description')}
            placeholder='Короткий опис...'
            disabled={isCreating}
            has_error={errors.description ? 1 : 0}
            error_text={errors.description?.message}
          />
          <TextEditor name='content' control={control} />
          <Button type='submit' disabled={isCreating}>
            {isCreating ? 'Зачекайте...' : 'Створити Пост'}
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default CreatePost;
