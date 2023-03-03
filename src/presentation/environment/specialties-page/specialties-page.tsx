import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { HeaderCoreContainer } from 'presentation/atomic-components/molecules/header-core-container/header-core-container';
import { Modal } from 'presentation/atomic-components/molecules/modal/modal';
import { TableHeaderItemWithSimpleFilter } from 'presentation/atomic-components/molecules/table-header-item-with-simple-filter/table-header-item-with-simple-filter';
import { Visibility } from '@mui/icons-material';
import { useModal } from 'data/hooks/use-modal';
import { useState } from 'react';
import type { FC } from 'react';

interface Specialty {
  id: number;
  name: string;
}

const specialties: Specialty[] = [
  {
    id: 1,
    name: 'Automação industrial'
  },
  {
    id: 2,
    name: 'Redes'
  },
  {
    id: 3,
    name: 'Motores'
  },
  {
    id: 4,
    name: 'Desenvolvimento'
  },
  {
    id: 5,
    name: 'Eletrônica'
  }
];

export const SpecialtiesPage: FC = () => {
  const [openFilter, setOpenFilter] = useState<string | null>();

  const handleClickFilter = (filter: string): void => {
    setOpenFilter(filter);
  };

  const handleCloseFilter = (): void => {
    setOpenFilter(null);
  };

  const {
    closeModal: closeSecondModal,
    isOpen: isOpenSecondModal,
    openModal: openSecondModal
  } = useModal();

  return (
    <div className={'w-auto h-auto'}>
      <HeaderCoreContainer
        hasBreadcrumbs={false}
        subTitle={'JORNADA DE TRANSFORMAÇÃO DIGITAL'}
        title={'ESPECIALIDADES'}
      />
      <div>
        <Modal
          button={{
            StartIcon: Visibility,
            title: 'Abrir modal',
            variant: 'secondary'
          }}
          closeModal={closeSecondModal}
          isOpen={isOpenSecondModal}
          openModal={openSecondModal}
          size={'small'}
          title={'Modal'}
        >
          <Button
            endIcon={<Visibility />}
            onClick={(): void => {
              closeSecondModal();
            }}
            variant={'secondary'}
          >
            fechar modal
          </Button>
        </Modal>
      </div>
      <div>
        <TableContainer className={'bg-white'}>
          <Table aria-label={'simple table'} sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell align={'justify'} variant={'head'}>
                  <TableHeaderItemWithSimpleFilter
                    filterSide={'left'}
                    isOpen={openFilter === 'Nome'}
                    onClick={(): void => {
                      handleClickFilter('Nome');
                    }}
                    onClose={handleCloseFilter}
                    title={'Nome'}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {specialties.map((specialty) => (
                <TableRow key={specialty.id} className={'uppercase'}>
                  <TableCell align={'left'} component={'th'} scope={'row'}>
                    {specialty.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
