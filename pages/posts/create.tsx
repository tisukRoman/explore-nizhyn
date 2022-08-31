import * as yup from 'yup';
import { NextPage } from 'next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useRedirect } from '../../hooks/useRedirect';
import { useAuth } from '../../hooks/useAuth';
import Layout from '../../components/Layout';
import TextInput from '../../components/TextInput';
import TextEditor from '../../components/TextEditor';

type PostData = {
  title: string;
  tag: string;
  img_src: string;
  description?: string;
  content: any;
};

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
  const { user } = useAuth();
  useRedirect(user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostData>({ mode: 'onBlur', resolver: yupResolver(schema) });

  const onSubmit = (data: PostData) => {
    console.log(data);
  };

  return (
    <Layout>
      <div className='py-40 h-screen w-[90%] mx-auto bg-slate-100 p-6'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            type='text'
            {...register('title')}
            placeholder='Заголовок посту'
            has_error={errors.title ? 1 : 0}
            error_text={errors.title?.message}
          />
          <TextInput
            type='text'
            {...register('tag')}
            placeholder='Назва категорії'
            has_error={errors.tag ? 1 : 0}
            error_text={errors.tag?.message}
          />
          <TextInput
            type='text'
            {...register('img_src')}
            placeholder='Введіть url картинки'
            has_error={errors.img_src ? 1 : 0}
            error_text={errors.img_src?.message}
          />
        </form>
        <TextEditor />
      </div>
    </Layout>
  );
};

export default CreatePost;
