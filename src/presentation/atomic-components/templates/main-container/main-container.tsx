import { Grow } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Sidebar } from 'presentation/atomic-components/organisms';
import type { FC } from 'react';

export const CoreContainer: FC = () => (
  <main className={'w-full h-screen flex bg-lightGray p-5'}>
    <section className={'w-full flex gap-4'} id={'main'}>
      <Sidebar />
      <Grow in>
        <div
          className={'flex flex-col overflow-auto rounded-xl w-full h-full bg-white p-8 gap-3 main'}
          id={'container'}
        >
          <Outlet />
        </div>
      </Grow>
    </section>
  </main>
);
