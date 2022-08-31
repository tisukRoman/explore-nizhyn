import { FC, ReactNode } from 'react';

type ToastProps = {
  type: 'error' | 'success' | 'warning';
  icon?: ReactNode;
  message?: string;
};

const colorByType = (type: 'error' | 'success' | 'warning') => {
  const colors = {
    error: 'red',
    success: 'green',
    warning: 'yellow',
  };
  return colors[type];
};

const Toast: FC<ToastProps> = (props) => {
  return (
    <div
      className={`w-48 h-28 bg-[#000] absolute top-5 right-5 z-10 border-${colorByType(
        props.type
      )} border-2 rounded-lg`}
    >
      {props.message}
    </div>
  );
};

Toast.defaultProps = {
  type: 'error',
  icon: undefined,
  message: 'Success message',
};

export default Toast;
