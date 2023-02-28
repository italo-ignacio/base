/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { login } from './thunk';
import type { AuthenticationResponse } from 'domain/usecase/use-login';

interface InitialStateProps {
  authData: AuthenticationResponse;
  authLoading: 'failed' | 'idle' | 'pending' | 'succeeded';
}

const initialState: InitialStateProps = {
  authData: {} as AuthenticationResponse,
  authLoading: 'idle'
};

export const authSlice = createSlice({
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.authLoading = 'pending';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authData = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.authLoading = 'failed';
      });
  },
  initialState,
  name: 'auth',
  reducers: {}
});

export const { reducer: authReducer } = authSlice;
