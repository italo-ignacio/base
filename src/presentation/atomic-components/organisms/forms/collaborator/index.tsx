import { Button } from '@mui/material';
import { Controller } from 'react-hook-form';
import { LabelInput } from 'presentation/atomic-components/atoms/label-input';
import { Select } from 'presentation/atomic-components/atoms/select/select';
import { useCollaborator } from 'data/usecases/page-hooks/collaborator/use-address';
import { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import type { FC, ReactElement } from 'react';

const values = [
  {
    label: 'Tel',
    value: 'HOME_PHONE'
  },
  {
    label: 'Cel',
    value: 'MOBILE'
  }
];

export const CollaboratorForm: FC = () => {
  const { handleSubmit, onSubmit, register, errors, control } = useCollaborator();
  const [visible, setVisible] = useState(false);

  const handleClickShowPassword = (): void => {
    setVisible(!visible);
  };

  return (
    <form className={'flex flex-col justify-center gap-4'} onSubmit={handleSubmit(onSubmit)}>
      <LabelInput
        StartIcon={AccountCircleOutlinedIcon}
        error={!!errors.email}
        label={'Email'}
        register={register('email')}
      />

      <LabelInput
        EndIcon={visible ? VisibilityOff : Visibility}
        StartIcon={KeyOutlinedIcon}
        error={!!errors.password}
        handleEndFunction={handleClickShowPassword}
        label={'Senha'}
        register={register('password')}
        type={visible ? 'text' : 'password'}
      />
      <LabelInput error={!!errors.name} label={'Nome'} register={register('name')} />
      <LabelInput error={!!errors.nif} label={'NIF'} register={register('nif')} />
      <div className={'flex gap-4'}>
        <div>
          <LabelInput error={!!errors.phone?.ddd} label={'DDD'} register={register('phone.ddd')} />
        </div>
        <LabelInput
          error={!!errors.phone?.number}
          label={'Número'}
          register={register('phone.number')}
        />
        <div>
          <LabelInput label={'Tipo'}>
            <Controller
              control={control}
              name={'phone.type'}
              render={({ field: { ref, onChange, ...field } }): ReactElement => (
                <Select
                  change={onChange}
                  error={!!errors.phone?.type}
                  field={field}
                  options={values}
                  reference={ref}
                />
              )}
            />
          </LabelInput>
        </div>
      </div>

      <Button type={'submit'}>Enviar</Button>
    </form>
  );
};
