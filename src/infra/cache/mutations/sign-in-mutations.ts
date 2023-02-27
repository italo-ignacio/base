import { api } from 'infra/http';
import { useMutation } from 'react-query';
import type { UseMutationResult } from 'react-query';

interface login {
  data: { success: boolean };
}
export const useSignInMutation = (): UseMutationResult<
  login,
  unknown,
  { email: string; password: string },
  unknown
> =>
  useMutation(
    ({ email, password }: { email: string; password: string }) =>
      api.post<login>({ body: { email, password }, route: 'users' }),
    {
      onSuccess(data) {
        console.log(data);
      }
    }
  );
