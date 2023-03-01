import { Button, Grow, Input } from '@mui/material';
import { Controller } from 'react-hook-form';
import { LabelInput } from 'presentation/atomic-components/atoms/label-input';
import { Select } from 'presentation/atomic-components/atoms/select/select';
import { ValidatePassword } from 'presentation/atomic-components/atoms/validate-password';
import { useCollaborator } from 'data/usecases/collaborator/use-collaborator';
import { useEffect, useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import MaskedInput from 'react-input-mask';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import type { FC, ReactElement } from 'react';
import type { PhoneType } from 'domain/enums';

const valuesPhone = [
  {
    label: 'Tel',
    value: 'HOME_PHONE'
  },
  {
    label: 'Cel',
    value: 'MOBILE'
  }
];

const valuesUnities = [
  {
    label: '127',
    value: '127'
  },
  {
    label: '123',
    value: '123'
  },
  {
    label: '101',
    value: '101'
  }
];

const valuesSpecialties = [
  {
    label: 'Primeira',
    value: '1'
  },
  {
    label: 'Segunda',
    value: '2'
  },
  {
    label: 'Terceira',
    value: '3'
  }
];

const defaultValues = {
  homePhoneLength: 9,
  sliceEnd: -1,
  sliceStart: 0
};

// eslint-disable-next-line max-lines-per-function
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
  const [visibleFocus, setVisibleFocus] = useState(false);

  const handleClickShowPassword = (): void => {
    setVisible(!visible);
  };

  return (
    <form className={'flex flex-col justify-center gap-4 z-20'} onSubmit={handleSubmit(onSubmit)}>
      <LabelInput
        StartIcon={AccountCircleOutlinedIcon}
        error={!!errors.email}
        label={'Email'}
        register={register('email')}
        required
      />
      <div className={'z-20'}>
        <LabelInput
          EndIcon={visible ? VisibilityOff : Visibility}
          StartIcon={KeyOutlinedIcon}
          error={!!errors.password}
          handleEndFunction={handleClickShowPassword}
          label={'Senha'}
          onChange={(e): void => setValue('password', e.target.value, { shouldValidate: true })}
          onFocus={(): void => {
            if (!visibleFocus) setVisibleFocus(true);
          }}
          onFocusOut={(): void => {
            if (visibleFocus) setVisibleFocus(false);
          }}
          register={register('password')}
          required
          type={visible ? 'text' : 'password'}
        />
      </div>
      <div className={'z-10'} hidden={!visibleFocus}>
        <Grow in={visibleFocus}>
          <div>
            <ValidatePassword password={getValues('password')} />
          </div>
        </Grow>
      </div>
      <LabelInput error={!!errors.name} label={'Nome'} register={register('name')} required />
      <LabelInput error={!!errors.nif} label={'NIF'} register={register('nif')} required />
      <div className={'flex gap-4'}>
        <div>
          <LabelInput label={'DDD'} required>
            <Controller
              control={control}
              name={'phone.ddd'}
              render={({ field: { onChange: handleChange, ...field } }): ReactElement => (
                <MaskedInput
                  mask={'(099)'}
                  maskPlaceholder={''}
                  onChange={handleChange}
                  value={field.value}
                >
                  <Input error={!!errors.phone?.ddd} inputRef={field.ref} />
                </MaskedInput>
              )}
            />
          </LabelInput>
        </div>
        <LabelInput label={'Número'} required>
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
                <Input error={!!errors.phone?.number} inputRef={ref} />
              </MaskedInput>
            )}
          />
        </LabelInput>
        <div className={'w-[90px]'}>
          <LabelInput label={'Tipo'} required>
            <Controller
              control={control}
              name={'phone.type'}
              render={({ field: { ref, ...field } }): ReactElement => (
                <Select
                  change={(e): void => {
                    setValue('phone.type', e as PhoneType, {
                      shouldValidate: true
                    });
                    if (getValues('phone.type') === 'HOME_PHONE')
                      if (
                        getValues('phone.number') &&
                        getValues('phone.number').length > defaultValues.homePhoneLength
                      )
                        setValue(
                          'phone.number',
                          getValues('phone.number').slice(
                            defaultValues.sliceStart,
                            defaultValues.sliceEnd
                          ),
                          {
                            shouldValidate: true
                          }
                        );
                  }}
                  defaultValue={{
                    label: 'Cel',
                    value: 'MOBILE'
                  }}
                  error={!!errors.phone?.type}
                  field={field}
                  options={valuesPhone}
                  reference={ref}
                  style={{ width: '80px' }}
                />
              )}
            />
          </LabelInput>
        </div>
      </div>
      <LabelInput label={'Unidades'} required>
        <Controller
          control={control}
          name={'unities'}
          render={({ field: { ref, ...field } }): ReactElement => (
            <Select
              change={(e): void => {
                setValue('unities', e as number[], {
                  shouldValidate: true
                });
              }}
              error={!!errors.unities}
              field={field}
              isMultiple
              options={valuesUnities}
              reference={ref}
            />
          )}
        />
      </LabelInput>
      <LabelInput label={'Especialidades'}>
        <Controller
          control={control}
          name={'specialties'}
          render={({ field: { ref, ...field } }): ReactElement => (
            <Select
              change={(e): void => {
                setValue('specialties', e as number[], {
                  shouldValidate: true
                });
              }}
              error={!!errors.specialties}
              field={field}
              isMultiple
              options={valuesSpecialties}
              reference={ref}
            />
          )}
        />
      </LabelInput>
      <Button type={'submit'}>Enviar</Button>
    </form>
  );
};
