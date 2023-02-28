import { LoginForm } from 'presentation/atomic-components/organisms/forms/login';
import type { FC } from 'react';

export const AuthPage: FC = () => (
  <div className={'flex gap-4 justify-center flex-col min-w-[85%]'}>
    <LoginForm />
  </div>
);
