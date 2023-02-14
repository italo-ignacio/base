import { Autocomplete, Chip, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import type { FC, ReactNode } from 'react';
import type { TextFieldProps } from '@mui/material';

type SelectProps = TextFieldProps & {
  isMultiple?: boolean;
  options: readonly unknown[];
};

interface OptionProps {
  label: string;
}

export const Select: FC<SelectProps> = ({ isMultiple, options, ...props }) => (
  <Autocomplete
    clearOnEscape
    clearText={'Limpar'}
    closeText={'Fechar'}
    disableCloseOnSelect={isMultiple}
    disablePortal
    fullWidth
    id={'combo-box-demo'}
    loadingText={'Carregando...'}
    multiple={isMultiple}
    noOptionsText={'Nenhum dado encontrado'}
    openText={'Abrir'}
    options={options}
    renderInput={({ InputProps, ...params }): ReactNode => {
      const { startAdornment, ...rest } = InputProps;

      return (
        <>
          <TextField InputProps={{ ...rest }} {...params} {...props} />
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
