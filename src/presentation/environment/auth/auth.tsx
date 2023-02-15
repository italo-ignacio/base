import { Button, Input } from '@mui/material';
import { paths } from 'main/config';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import type { FC } from 'react';

export const Auth: FC = () => {
  const [values, setValues] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = (): void => {
    setValues(!values);
  };

  return (
    <div className={'flex gap-4 justify-center flex-col min-w-[85%]'}>
      <Input
        color={'secondary'}
        startAdornment={
          <InputAdornment position={'start'}>
            <AccountCircleOutlinedIcon />
          </InputAdornment>
        }
      />
      <Input
        color={'secondary'}
        endAdornment={
          <InputAdornment position={'end'}>
            <IconButton onClick={handleClickShowPassword}>
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
      />
      <Button
        onClick={(): void => {
          navigate(paths.home);
        }}
      >
        login
      </Button>
    </div>
  );
};
