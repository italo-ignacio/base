import { Authentication } from 'data/usecases/login';
import { api } from 'infra/http/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AuthenticationClass, AuthenticationParams } from 'domain/usecase/use-login';

const makeRemoteAuthentication = (): AuthenticationClass => new Authentication('/users', api);

export const login = createAsyncThunk('auth/login', async (params: AuthenticationParams) => {
  const data = await makeRemoteAuthentication().login(params);

  return data;
});
