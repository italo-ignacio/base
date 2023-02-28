import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Input,
  InputAdornment
} from '@mui/material';
import { useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import type { FC, ReactElement } from 'react';

export type Side = 'left' | 'right';

type Order = 'asc' | 'desc' | 'none';
export interface FilterOption {
  label: string;
  value: number;
}
export interface SimpleFilterTableProps {
  filterSide: Side;
  title: string;
  filterOptions?: FilterOption[];
  isOpen?: boolean;
  onClick?: () => void;
  onClose?: () => void;
}

// eslint-disable-next-line max-lines-per-function
export const SimpleFilterTable: FC<SimpleFilterTableProps> = ({
  filterSide,
  title,
  filterOptions,
  isOpen,
  onClick,
  onClose
}) => {
  const [selectedFilters, setSelectedFilters] = useState<FilterOption[]>();
  const [selectedOrder, setSelectedOrder] = useState<Order>('none');
  const minimum = -1;

  const cleanFilter = (): void => {
    setSelectedFilters([]);
  };

  const findSelectedFilter = (filter: FilterOption): number => {
    if (selectedFilters)
      return selectedFilters.findIndex((selectedFilter) => selectedFilter === filter);

    return minimum;
  };

  const checkOptionIsSelected = (filter: FilterOption): boolean => {
    if (selectedFilters) {
      const index = findSelectedFilter(filter);

      if (index > minimum) return true;
      return false;
    }
    return false;
  };

  const selectFilter = (filter: FilterOption): void => {
    if (selectedFilters) setSelectedFilters([...selectedFilters, filter]);
    else setSelectedFilters([filter]);
  };

  const deselectFilters = (filter: FilterOption): void => {
    if (selectedFilters) {
      const selectedFilterIndex = findSelectedFilter(filter);

      const copySelectedFilters = selectedFilters;
      const limit = 1;

      copySelectedFilters.splice(selectedFilterIndex, limit);
      setSelectedFilters([...copySelectedFilters]);
    }
  };

  const handleFilterOptionClick = (filter: FilterOption): void => {
    if (checkOptionIsSelected(filter)) deselectFilters(filter);
    else selectFilter(filter);
  };

  const handleOrder = (): ReactElement => {
    if (selectedOrder === 'none')
      return (
        <SwapVertIcon
          className={'text-white hover:cursor-pointer'}
          onClick={(): void => setSelectedOrder('asc')}
        />
      );
    if (selectedOrder === 'asc')
      return (
        <ArrowDownwardIcon
          className={'text-white hover:cursor-pointer'}
          onClick={(): void => setSelectedOrder('desc')}
        />
      );

    return (
      <ArrowUpwardIcon
        className={'text-white hover:cursor-pointer'}
        onClick={(): void => setSelectedOrder('none')}
      />
    );
  };

  return (
    <div className={'w[4px] h[3px] relative'}>
      {selectedFilters?.length ? (
        <div
          className={
            'bg-primary w-5 h-5 rounded-full text-white flex justify-center items-center absolute mx-2 -my-3 text-[.9rem]'
          }
        >
          {selectedFilters.length}
        </div>
      ) : null}

      <FilterAltIcon className={'hover:cursor-pointer'} onClick={isOpen ? onClose : onClick} />
      {isOpen ? (
        <div
          className={`bg-secondary absolute  w-52 ${
            filterOptions ? 'h-80' : 'h-max'
          } rounded-xl p-4 flex flex-col gap-3 ${filterSide === 'left' ? '-ml-48' : null} `}
        >
          <div className={'flex items-center justify-between w-full'}>
            <div className={'flex gap-1 items-center'}>
              <span className={'text-white text-base'}>{title}</span>
              {handleOrder()}
            </div>
            <CloseIcon className={'text-white hover:cursor-pointer'} onClick={onClose} />
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
          {filterOptions ? (
            <div className={'w-full flex justify-end'}>
              <button
                className={
                  'text-white text-xs font-extralight underline hover:font-light hover:cursor-pointer'
                }
                onClick={(): void => cleanFilter()}
                type={'button'}
              >
                <span>Limpar filtros</span>
              </button>
            </div>
          ) : null}
          {filterOptions ? (
            <div className={'flex flex-col gap-2 overflow-y-scroll filter'} id={'filter'}>
              <FormGroup aria-label={'position'}>
                {filterOptions.map((filter) => (
                  <FormControlLabel
                    key={filter.value}
                    checked={checkOptionIsSelected(filter)}
                    className={'text-white'}
                    control={<Checkbox color={'secondary'} size={'small'} />}
                    label={filter.label}
                    onClick={(): void => handleFilterOptionClick(filter)}
                    title={'filter'}
                    value={filter.value}
                  />
                ))}
              </FormGroup>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
