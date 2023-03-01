import { login } from 'store/auth/thunk';
import { loginSchema } from 'validations/schemas/login';
import { paths } from 'main/config';
import { useAppSelector } from 'store';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import type { AnyAction } from '@reduxjs/toolkit';
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
  const dispatch = useDispatch();
  const { authData, authLoading } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  console.log(authData, authLoading);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit: SubmitHandler<LoginRequest> = (data) => {
    dispatch(login(data) as unknown as AnyAction);
    navigate(paths.home);
  };

  return {
    errors,
    handleSubmit,
    onSubmit,
    register
  };
};
