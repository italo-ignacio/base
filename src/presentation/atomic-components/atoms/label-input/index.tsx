import { Input } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import type { FC, ReactNode } from 'react';
import type { OverridableComponent } from '@mui/types';
import type { SvgIconTypeMap } from '@mui/material';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface LabelInputProps {
  register?: UseFormRegisterReturn;
  label?: string;
  type?: string;
  mask?: string;
  required?: boolean;
  children?: ReactNode;
  error?: boolean;
  EndIcon?: OverridableComponent<SvgIconTypeMap>;
  handleEndFunction?: () => void;
  StartIcon?: OverridableComponent<SvgIconTypeMap>;
  handleStartFunction?: () => void;
  onChange?: (e: { target: { value: string } }) => void;
  onFocus?: () => void;
  onFocusOut?: () => void;
}

export const LabelInput: FC<LabelInputProps> = ({ register, children, ...props }) => (
  <div className={'flex flex-col w-full text-start'}>
    {props.label ? (
      <label className={'mb-[2px]'}>
        {props.label}
        {props.required ? <span> *</span> : ''}
      </label>
    ) : null}

    {children || (
      <Input
        endAdornment={
          props.EndIcon ? (
            <InputAdornment position={'end'}>
              {props.handleEndFunction ? (
                <IconButton onClick={props.handleEndFunction} tabIndex={-1}>
                  <props.EndIcon />
                </IconButton>
              ) : (
                <props.EndIcon />
              )}
            </InputAdornment>
          ) : null
        }
        error={props.error}
        startAdornment={
          props.StartIcon ? (
            <InputAdornment position={'start'}>
              {props.handleStartFunction ? (
                <IconButton onClick={props.handleStartFunction} tabIndex={-1}>
                  <props.StartIcon />
                </IconButton>
              ) : (
                <props.StartIcon />
              )}
            </InputAdornment>
          ) : null
        }
        style={{
          backgroundColor: '#FAFAFA',
          paddingLeft: props.handleStartFunction ? '0px' : '0.4rem',
          paddingRight: props.handleEndFunction ? '0px' : '0.4rem'
        }}
        type={props.type}
        {...register}
        onBlur={props.onFocusOut}
        onChange={props.onChange ? props.onChange : register?.onChange}
        onFocus={props.onFocus}
      />
    )}
  </div>
);
