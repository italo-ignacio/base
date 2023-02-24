import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Input,
  InputAdornment
} from '@mui/material';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import type { FC } from 'react';

type Side = 'left' | 'right';

export interface Filter {
  label: string;
  value: number;
}
interface SimpleFilterTableProps {
  filterSide: Side;
  title: string;
  filterOptions: Filter[];
}

export const SimpleFilterTable: FC<SimpleFilterTableProps> = ({
  filterSide,
  title,
  filterOptions
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Filter[]>();

  useEffect(() => {
    console.log(selectedFilters);
  }, [selectedFilters]);

  return (
    <div className={'w[4px] h[3px] relative'}>
      <FilterAltIcon className={'hover:cursor-pointer'} onClick={(): void => setIsOpen(true)} />
      {isOpen ? (
        <div
          className={`bg-secondary absolute  w-52 h-max rounded-xl p-4 flex flex-col gap-3 ${
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
          <div className={'flex flex-col gap-2'}>
            <FormGroup aria-label={'position'}>
              {filterOptions.map((filter) => (
                <FormControlLabel
                  key={filter.value}
                  className={'text-white'}
                  control={<Checkbox color={'secondary'} size={'small'} />}
                  label={filter.label}
                  onClick={(): void => {
                    if (selectedFilters) {
                      const limit = 1;
                      const minimum = -1;

                      const selectedFilterIndex: number = selectedFilters.findIndex(
                        (selectedFilter) => selectedFilter === filter
                      );

                      console.log(selectedFilterIndex);

                      if (selectedFilterIndex > minimum) {
                        const copySelectedFilters = [...selectedFilters];

                        copySelectedFilters.splice(selectedFilterIndex, limit);
                        setSelectedFilters(copySelectedFilters);
                      } else setSelectedFilters([...selectedFilters, filter]);
                    } else setSelectedFilters([filter]);
                  }}
                  value={filter.value}
                />
              ))}
            </FormGroup>
          </div>
        </div>
      ) : null}
    </div>
  );
};
