import { SimpleFilterTable } from 'presentation/atomic-components/molecules/simple-table-filter/simple-table-filter';
import type { FC } from 'react';
import type { SimpleFilterTableProps } from 'presentation/atomic-components/molecules/simple-table-filter/simple-table-filter';

type TableHeaderItemWithSimpleFilterProps = SimpleFilterTableProps;

export const TableHeaderItemWithSimpleFilter: FC<TableHeaderItemWithSimpleFilterProps> = ({
  filterSide,
  title,
  filterOptions,
  isOpen,
  onClick,
  onClose
}) => (
  <div className={'flex justify-between items-center h-6'}>
    <span>{title}</span>
    <SimpleFilterTable
      filterOptions={filterOptions}
      filterSide={filterSide}
      isOpen={isOpen}
      onClick={onClick}
      onClose={onClose}
      title={title}
    />
  </div>
);
