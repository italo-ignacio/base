import { AddressForm } from 'presentation/atomic-components/organisms/forms/address';
import { CollaboratorForm } from 'presentation/atomic-components/organisms/forms/collaborator';
import type { FC } from 'react';

export const FormsPage: FC = () => (
  <div className={'flex flex-col gap-12 items-center justify-center '}>
    <div className={'w-96 text-center'}>
      <h1 className={'pb-4'}>Address form</h1>
      <AddressForm />
    </div>
    <div className={'w-96 text-center'}>
      <h1 className={'pb-4'}>Collaborator form</h1>
      <CollaboratorForm />
    </div>
  </div>
);
