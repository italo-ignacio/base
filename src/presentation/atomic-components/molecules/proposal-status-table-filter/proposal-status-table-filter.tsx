import { Select } from 'presentation/atomic-components/atoms/select/select';
import { IconButton as TableIconButton } from 'presentation/atomic-components/atoms/icon-button/icon-button';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import type { FC } from 'react';
import type { Values } from 'presentation/atomic-components/atoms/select/select';

export interface ProposalStatusFilterTableProps {
  isOpen: boolean;
  onClick: () => void;
  onClose: () => void;
}

enum Filters {
  conclusionRecord = 'Reg. de conclusão',
  sgset = 'SGSET',
  diagnostic = 'Diagnóstico'
}

const filterOptions: Values[] = [
  {
    label: 'Todos',
    value: 'all'
  },
  {
    label: 'Completos',
    value: 'true'
  },
  {
    label: 'Incompletos',
    value: 'false'
  }
];

export const ProposalStatusFilterTable: FC<ProposalStatusFilterTableProps> = ({
  isOpen,
  onClick,
  onClose
}) => {
  const [selectedConclusionRecordStatus, setSelectedConclusionRecordStatus] =
    useState<string>('all');
  const [selectedSgsetStatus, setSelectedSgsetStatus] = useState<string>('all');
  const [selectedDiagnosticStatus, setSelectedDiagnosticStatus] = useState<string>('all');

  const cleanFilter = (): void => {
    setSelectedConclusionRecordStatus('all');
    setSelectedDiagnosticStatus('all');
    setSelectedSgsetStatus('all');
  };

  const findDefaultValue = (value: string): Values | undefined => {
    const finded = filterOptions.find((option): boolean | undefined => option.value === value);

    return finded;
  };

  return (
    <div className={'w[4px] h[3px] relative'}>
      {selectedConclusionRecordStatus || selectedDiagnosticStatus || selectedSgsetStatus ? (
        <div
          className={
            'bg-primary w-5 h-5 rounded-full text-white flex justify-center items-center absolute left-7 top-1 z-10 text-[.9rem]'
          }
        />
      ) : null}
      <div className={'max-w-[40px]'}>
        <TableIconButton icon={<FilterAltIcon />} onClick={isOpen ? onClose : onClick} />
      </div>
      {isOpen ? (
        <div
          className={'bg-secondary absolute  w-52 h-80 -ml-16 rounded-xl p-4 flex flex-col gap-3'}
        >
          <div className={'flex items-center justify-between w-full'}>
            <span className={'text-white text-base'}>Status</span>
            <CloseIcon className={'text-white hover:cursor-pointer'} onClick={onClose} />
          </div>
          <div className={'flex flex-col gap-4'}>
            <div>
              <span className={'text-white text-sm'}>{Filters.conclusionRecord}</span>
              <Select
                change={(value): void => {
                  setSelectedConclusionRecordStatus(value as string);
                }}
                defaultValue={findDefaultValue(selectedConclusionRecordStatus)}
                options={filterOptions}
                value={selectedConclusionRecordStatus}
              />
            </div>
            <div>
              <span className={'text-white'}>{Filters.diagnostic}</span>
              <Select
                change={(value): void => {
                  setSelectedDiagnosticStatus(value as string);
                }}
                defaultValue={findDefaultValue(selectedDiagnosticStatus)}
                options={filterOptions}
              />
            </div>
            <div>
              <span className={'text-white'}>{Filters.sgset}</span>
              <Select
                change={(value): void => {
                  setSelectedSgsetStatus(value as string);
                }}
                color={'primary'}
                defaultValue={findDefaultValue(selectedSgsetStatus)}
                options={filterOptions}
              />
            </div>
          </div>
          <div className={'w-full flex justify-end'}>
            <button
              className={
                'text-white text-xs font-extralight underline hover:font-light hover:cursor-pointer'
              }
              onClick={(): void => {
                cleanFilter();
                onClose();
              }}
              type={'button'}
            >
              <span>Limpar filtros</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
