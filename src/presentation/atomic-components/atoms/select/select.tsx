import { Autocomplete, Chip, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import type { FC, ReactNode, RefCallback } from 'react';
import type { TextFieldProps } from '@mui/material';

interface Values {
  label: string;
  value: string;
}

type SelectProps = TextFieldProps & {
  isMultiple?: boolean;
  options: Values[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field?: any;
  change?: (value: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reference?: RefCallback<any>;
  defaultValue?: {
    label: string;
    value: string;
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
      const Data = data as Values;

      if (change)
        if (Data?.value) change(Data.value);
        else change('');
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
