import { api } from 'infra/http';
import { useMutation } from 'react-query';
import type { AuthenticationResponse } from 'domain/usecase/use-login';
import type { UseMutationResult } from 'react-query';

export const useSignInMutation = (): UseMutationResult<
  AuthenticationResponse,
  unknown,
  { email: string; password: string },
  unknown
> =>
  useMutation(
    ({ email, password }: { email: string; password: string }) =>
      api.post({ body: { email, password }, route: '/users' }),
    {
      onSuccess(data) {
        console.log(data);
      }
    }
  );
