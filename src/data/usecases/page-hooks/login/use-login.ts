import { loginSchema } from 'validations/schemas/login';
import { paths } from 'main/config';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import type {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister
} from 'react-hook-form';
import type { LoginRequest } from 'validations/schemas/login';

export const useLogin = (): {
  errors: FieldErrors<{ email: string; password: string }>;
  register: UseFormRegister<LoginRequest>;
  onSubmit: SubmitHandler<LoginRequest>;
  handleSubmit: UseFormHandleSubmit<LoginRequest>;
} => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit: SubmitHandler<LoginRequest> = (data) => {
    console.log(data);
    navigate(paths.home);
  };

  return {
    errors,
    handleSubmit,
    onSubmit,
    register
  };
};
