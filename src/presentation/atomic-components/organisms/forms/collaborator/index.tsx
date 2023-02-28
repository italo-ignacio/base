import { Button, Input } from '@mui/material';
import { Controller } from 'react-hook-form';
import { LabelInput } from 'presentation/atomic-components/atoms/label-input';
import { Select } from 'presentation/atomic-components/atoms/select/select';
import { useCollaborator } from 'data/usecases/collaborator/use-address';
import { useEffect, useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import MaskedInput from 'react-input-mask';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import type { FC, ReactElement } from 'react';
import type { PhoneType } from 'domain/enums';

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
  const { handleSubmit, onSubmit, register, errors, control, getValues, setValue } =
    useCollaborator();

  useEffect(() => {
    if (!getValues('phone.type'))
      setValue('phone.type', 'MOBILE' as PhoneType, {
        shouldValidate: true
      });
  }, [getValues, setValue]);

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
          <LabelInput label={'DDD'}>
            <Controller
              control={control}
              name={'phone.ddd'}
              render={({ field: { onChange: handleChange, ...field } }): ReactElement => (
                <MaskedInput
                  mask={'999'}
                  maskPlaceholder={''}
                  onChange={handleChange}
                  value={field.value}
                >
                  <Input error={!!errors.phone?.ddd} />
                </MaskedInput>
              )}
            />
          </LabelInput>
        </div>
        <LabelInput label={'Número'}>
          <Controller
            control={control}
            name={'phone.number'}
            render={({ field: { ref, onChange: handleChange, ...field } }): ReactElement => (
              <MaskedInput
                mask={getValues('phone.type') === 'HOME_PHONE' ? '9999-9999' : '99999-9999'}
                maskPlaceholder={''}
                onChange={handleChange}
                value={field.value}
              >
                <Input error={!!errors.phone?.number} ref={ref} />
              </MaskedInput>
            )}
          />
        </LabelInput>
        <div className={'w-[90px]'}>
          <LabelInput label={'Tipo'}>
            <Controller
              control={control}
              name={'phone.type'}
              render={({ field: { ref, ...field } }): ReactElement => (
                <Select
                  change={(e): void => {
                    setValue('phone.type', e as PhoneType, {
                      shouldValidate: true
                    });
                  }}
                  defaultValue={{
                    label: 'Cel',
                    value: 'MOBILE'
                  }}
                  error={!!errors.phone?.type}
                  field={field}
                  options={values}
                  reference={ref}
                  style={{ width: '80px' }}
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
