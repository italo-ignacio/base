import { IconButton, Input, InputAdornment } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import type { FC } from 'react';

type Side = 'left' | 'right';

interface SimpleFilterTableProps {
  filterSide: Side;
  title: string;
}

export const SimpleFilterTable: FC<SimpleFilterTableProps> = ({ filterSide, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={'w[4px] h[3px] relative'}>
      <FilterAltIcon className={'hover:cursor-pointer'} onClick={(): void => setIsOpen(true)} />
      {isOpen ? (
        <div
          className={`bg-secondary absolute  w-52 h-60 rounded-xl p-4 flex flex-col gap-3 ${
            filterSide === 'left' ? '-ml-48' : null
          } `}
        >
          <div className={'flex items-center justify-between w-full'}>
            <span className={'text-white text-base'}>{title}</span>
            <CloseIcon
              className={'text-white hover:cursor-pointer'}
              onClick={(): void => setIsOpen(false)}
            />
          </div>
          <Input
            color={'secondary'}
            endAdornment={
              <InputAdornment position={'end'}>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          <div className={'w-full flex justify-end'}>
            <span
              className={
                'text-white text-xs font-extralight underline hover:font-light hover:cursor-pointer'
              }
            >
              Limpar filtros
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
