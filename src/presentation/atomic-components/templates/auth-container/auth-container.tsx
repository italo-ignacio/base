import { LogoJornada } from 'main/assets';
import { Outlet } from 'react-router-dom';
import type { FC } from 'react';

export const AuthContainer: FC = () => (
  <div
    className={
      'relative flex justify-end flex-row min-h-screen w-full md:grid grid-cols-[1.5fr_1fr]'
    }
  >
    <div
      className={
        'hidden md:flex justify-center items-center flex-col gap-8 self-stretch p-[0px_56px]'
      }
    >
      <img alt={'Logo SENAI-MG'} className={'w-[80%]'} src={LogoJornada} />
    </div>
    <div
      className={
        'bg-secondary flex flex-col justify-center items-center p-[32px_16px] w-full md:p-[32px_64px]'
      }
    >
      <Outlet />
    </div>
  </div>
);
