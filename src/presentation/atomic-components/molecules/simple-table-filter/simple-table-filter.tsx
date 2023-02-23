import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import type { FC } from 'react';

type Side = 'left' | 'right';

export const SimpleFilterTable: FC<{ filterSide: Side }> = ({
  filterSide
}: {
  filterSide: Side;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <FilterAltIcon className={'hover:cursor-pointer'} onClick={(): void => setIsOpen(true)} />
      {isOpen ? (
        <div
          className={`bg-secondary relative  w-64 h-80 rounded-xl p-4 -ml-64 ${
            filterSide === 'left' ? '-ml-64' : null
          } `}
        >
          <div className={'flex items-center justify-between w-full'}>
            <span className={'text-white text-base'}>Title</span>
            <CloseIcon
              className={'text-white hover:cursor-pointer'}
              onClick={(): void => setIsOpen(false)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
