import { Autocomplete, Chip, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import type { FC, ReactNode, RefCallback } from 'react';
import type { Noop } from 'react-hook-form';
import type { TextFieldProps } from '@mui/material';

export interface Values {
  label: number | string;
  value: number | string;
}

type SelectProps = TextFieldProps & {
  isMultiple?: boolean;
  options: Values[];
  field?: {
    name?: string;
    onBlur?: Noop;
    onChange?: () => void;
    value?: (number | string | undefined)[] | number | string;
  };
  change?: (value: (number | string)[] | number | string | undefined) => void;
  reference?: RefCallback<HTMLInputElement>;
  defaultValue?: {
    label: number | string;
    value: number | string;
  };
};

interface OptionProps {
  label: string;
}

export const Select: FC<SelectProps> = ({
  isMultiple,
  options,
  field,
  change,
  reference,
  ...props
}) => (
  <Autocomplete
    clearOnEscape
    clearText={'Limpar'}
    closeText={'Fechar'}
    defaultValue={props.defaultValue}
    disableCloseOnSelect={isMultiple}
    disablePortal
    fullWidth
    isOptionEqualToValue={(option, value): boolean => option?.value === value?.value}
    loadingText={'Carregando...'}
    multiple={isMultiple}
    noOptionsText={'Nenhum dado encontrado'}
    onChange={(e, data): void => {
      if (isMultiple) {
        const Data = data as Values[];

        if (change)
          if (Data) change(Data.map((v) => Number(v.value)));
          else change(undefined);
      } else {
        const Data = data as Values;

        if (change)
          if (Data?.value) change(Data.value);
          else change(undefined);
      }
    }}
    openText={'Abrir'}
    options={options}
    renderInput={({ InputProps, ...params }): ReactNode => {
      const { startAdornment, ...rest } = InputProps;

      return (
        <>
          <TextField
            InputProps={{ ...rest }}
            {...params}
            {...props}
            {...field}
            inputRef={reference}
            onChange={(): void => {}}
          />
          <TextField InputProps={{ startAdornment }} color={'isSelect'} />
        </>
      );
    }}
    renderTags={(params, getTagProps): ReactNode =>
      params.map((option, index) => {
        const customOption = option as OptionProps;

        return (
          <Chip
            deleteIcon={<CloseIcon />}
            {...getTagProps({ index })}
            key={customOption.label}
            label={customOption.label}
          />
        );
      })
    }
  />
);
