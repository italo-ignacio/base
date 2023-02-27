import { LabelInput } from 'presentation/atomic-components/atoms/label-input';
import { useAddress } from 'data/usecases/page-hooks/address/use-address';
import Button from '@mui/material/Button';
import type { FC } from 'react';

export const AddressForm: FC = () => {
  const { handleSubmit, onSubmit, register, errors } = useAddress();

  return (
    <form className={'flex flex-col justify-center gap-4'} onSubmit={handleSubmit(onSubmit)}>
      <LabelInput error={!!errors.city} label={'Cidade'} register={register('city')} required />

      <LabelInput error={!!errors.state} label={'Estado'} register={register('state')} required />

      <Button type={'submit'}>Enviar</Button>
    </form>
  );
};
