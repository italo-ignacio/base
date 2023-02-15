import { Grow } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Sidebar } from 'presentation/atomic-components/organisms';
import type { FC } from 'react';

export const CoreContainer: FC = () => (
  <div className={'w-full h-screen flex bg-bg p-5'}>
    <section className={'w-full flex gap-4'} id={'main'}>
      <Sidebar />
      <Grow in>
        <div className={'overflow-auto rounded-xl w-full h-full bg-white'} id={'container'}>
          <Outlet />
        </div>
      </Grow>
    </section>
  </div>
);
