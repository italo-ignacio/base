import { HeaderCoreContainer } from 'presentation/atomic-components/molecules/header-core-container/header-core-container';
import type { FC } from 'react';

export const EnterprisesPage: FC = () => (
  <>
    <HeaderCoreContainer title={'Empresas'} />
    <div className={'flex items-center justify-center transition-transform delay-300'}>
      Empresas
    </div>
  </>
);
