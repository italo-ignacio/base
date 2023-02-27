import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useSignInMutation from 'infra/cache/mutations/sign-in-mutations';
import useToken from 'data/usecases/use-token';
import type { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import type { UseMutationResult } from 'react-query';

export const useAuth = (): {
  signIn: UseMutationResult<
    {
      data: {
        accessToken: string;
        user: {
          name: string;
        };
      };
    },
    unknown,
    {
      email: string;
      password: string;
    },
    unknown
  >;
  register: UseFormRegister<LoginFields>;
  onSubmit: SubmitHandler<LoginFields>;
  handleSubmit: UseFormHandleSubmit<LoginFields>;
} => {
  const navigate = useNavigate();

  const { setToken } = useToken();

  const { handleSubmit, register } = useForm<LoginFields>();

  const signIn = useSignInMutation(setToken, navigate);

  const onSubmit: SubmitHandler<LoginFields> = (data) => signIn.mutate(data);

  return {
    handleSubmit,
    onSubmit,
    register,
    signIn
  };
};
