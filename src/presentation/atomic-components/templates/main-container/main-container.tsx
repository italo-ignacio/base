import { Grow } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Sidebar } from 'presentation/atomic-components/organisms';
import type { FC } from 'react';

export const CoreContainer: FC = () => (
  <div className={'w-full h-screen flex bg-lightGray p-5'}>
    <section className={'w-full flex gap-4'} id={'main'}>
      <Sidebar />
      <Grow in>
        <div className={'overflow-auto rounded-xl w-full h-full bg-white p-7'} id={'container'}>
          <div className={'flex gap-1'} id={'header-conatiner'}>
            <div className={'bg-primary w-1 h-14 rounded-sm'} />
            <div className={'flex flex-col justify-arou'} id={'texts-container'}>
              <span className={'text-base font-light font-montserrat text-secondary'}>
                JORNADA DE TRANSFORMAÇÃO DIGITAL
              </span>
              <span className={'text-2xl text-primary font-montserrat font-medium'}>PROPOSTAS</span>
            </div>
          </div>
          <Outlet />
        </div>
      </Grow>
    </section>
  </div>
);
