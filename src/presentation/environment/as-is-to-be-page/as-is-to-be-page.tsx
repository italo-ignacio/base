import { HeaderCoreContainer } from 'presentation/atomic-components/molecules/header-core-container/header-core-container';
import { Heading } from 'presentation/atomic-components/atoms/heading/heading';
import { IconButton } from 'presentation/atomic-components/atoms/icon-button/icon-button';
import { Steps } from 'presentation/atomic-components/molecules/steps/steps';
import Divider from '@mui/material/Divider';
import type { FC } from 'react';

export const AsIsToBePage: FC = () => (
  <>
    <HeaderCoreContainer
      subTitle={'173/2023 - Planejamento estratégico tecnológico'}
      title={'as is | to be'}
    />
    <Heading
      endElement={
        <div>
          <IconButton icon={<>sasa</>} />
        </div>
      }
      title={'TI - Infra'}
    />
    <div
      className={'flex flex-col items-center justify-center transition-transform delay-300 gap-8'}
    >
      <div className={'flex w-[80%] items-center gap-3'}>
        <h2 className={'uppercase z-10 font-semibold text-lg min-w-max text-red'}>ESTADO ATUAL</h2>
        <div className={'w-full'}>
          <Divider className={'h-2 rounded-sm bg-gradient-to-r from-red to-primary'} />
        </div>
        <h2 className={'uppercase z-10 font-semibold text-lg min-w-max text-primary'}>
          ESTADO FUTURO
        </h2>
      </div>
      <Steps />
    </div>
  </>
);
