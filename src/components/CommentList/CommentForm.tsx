import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCreateComment } from '@hooks/useCreateComment';
import TextInput from '@components/shared/TextInput';
import Button from '@components/shared/Button';

const schema = yup.object({
  text: yup
    .string()
    .required('Вміст коментару не може бути порожнім')
    .min(8, 'Вміст кооментару надто короткий')
    .max(800, 'Вміст коментару надто великий'),
});

const CommentForm = () => {
  const { mutateAsync: addComment, isLoading, error } = useCreateComment();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<{ text: string }>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { text: string }) => {
    await addComment(data.text);
    if (!error) {
      reset({ text: '' });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-8 bg-[#000] bg-opacity-10'
    >
      <TextInput
        type='text'
        {...register('text')}
        placeholder='Ваш коментар...'
        disabled={isLoading}
        has_error={errors.text ? 1 : 0}
        error_text={errors.text?.message}
      />
      <Button type='submit' disabled={isLoading}>
        {isLoading ? 'Зачекайте...' : 'Додати коментар'}
      </Button>
    </form>
  );
};

export default CommentForm;
