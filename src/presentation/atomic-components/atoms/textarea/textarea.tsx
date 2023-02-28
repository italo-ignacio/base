import { TextField } from '@mui/material';
import { useState } from 'react';
import type { FC } from 'react';
import type { TextFieldProps } from '@mui/material';

type TextareaProps = TextFieldProps & {
  maxLength?: number;
  valueInput: string;
};

export const Textarea: FC<TextareaProps> = ({ maxLength, valueInput, ...props }) => {
  const [inputLength, setInputLength] = useState(`0/${maxLength}`);

  return (
    <div className={'flex flex-col w-full'}>
      <TextField
        inputProps={{
          maxLength
        }}
        maxRows={3}
        minRows={3}
        multiline
        onKeyUpCapture={(): void => setInputLength(`${valueInput.length.toString()}/${maxLength}`)}
        variant={'standard'}
        {...props}
      />

      <span className={'mt-[-19px] mr-[10px] text-[12px] ml-auto z-10'}>{inputLength}</span>
    </div>
  );
};

Textarea.defaultProps = {
  maxLength: 225
};
