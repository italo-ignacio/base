import { Button, Input } from '@mui/material';
import { useLogin } from 'data/usecases/login/use-login';
import { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import type { FC } from 'react';

export const LoginForm: FC = () => {
  const { handleSubmit, onSubmit, register } = useLogin();
  const [values, setValues] = useState(false);

  const handleClickShowPassword = (): void => {
    setValues(!values);
  };

  return (
    <form className={'flex flex-col justify-center gap-4'} onSubmit={handleSubmit(onSubmit)}>
      <Input
        color={'secondary'}
        startAdornment={
          <InputAdornment position={'start'}>
            <AccountCircleOutlinedIcon />
          </InputAdornment>
        }
        type={'email'}
        {...register('email')}
      />

      <Input
        color={'secondary'}
        endAdornment={
          <InputAdornment position={'end'}>
            <IconButton onClick={handleClickShowPassword} tabIndex={-1}>
              {values ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        startAdornment={
          <InputAdornment position={'start'}>
            <KeyOutlinedIcon />
          </InputAdornment>
        }
        type={values ? 'text' : 'password'}
        {...register('password')}
      />

      <Button type={'submit'}>Enviar</Button>
    </form>
  );
};
