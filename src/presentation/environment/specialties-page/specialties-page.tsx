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
import { LabelInput } from 'presentation/atomic-components/atoms/label-input';
import { MenuTable } from 'presentation/atomic-components/molecules/menu-table/menu-table';
import { Modal } from 'presentation/atomic-components/molecules/modal/modal';
import { TableHeaderItemWithSimpleFilter } from 'presentation/atomic-components/molecules/table-header-item-with-simple-filter/table-header-item-with-simple-filter';
import { useModal } from 'data/hooks/use-modal';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import type { FC } from 'react';
import type { Option } from 'presentation/atomic-components/molecules/menu-table/menu-table';

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

const onClick = (): void => console.log('123r');

const options: Option[] = [
  {
    action: 'Editar',
    icon: ModeEditOutlinedIcon,
    onClick
  },
  {
    action: 'Excluir',
    icon: DeleteOutlineIcon,
    onClick
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
    <div className={'w-auto h-auto flex flex-col'}>
      <HeaderCoreContainer
        hasBreadcrumbs={false}
        subTitle={'JORNADA DE TRANSFORMAÇÃO DIGITAL'}
        title={'ESPECIALIDADES'}
      />
      <div className={'flex flex-col  mt-6'}>
        <div>
          <Modal
            button={{
              EndIcon: AddIcon,
              title: 'Nova',
              variant: 'primary'
            }}
            closeModal={closeSecondModal}
            isOpen={isOpenSecondModal}
            openModal={openSecondModal}
            size={'small'}
            title={'Nova Especialidade'}
          >
            <LabelInput label={'Nome'} />
            <Button
              className={'font-montserrat'}
              onClick={(): void => {
                closeSecondModal();
              }}
              size={'small'}
              variant={'primary'}
            >
              Cadastrar
            </Button>
          </Modal>
        </div>
        <div>
          <TableContainer className={'bg-white'}>
            <Table aria-label={'simple table'} sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow className={'h-1'}>
                  <TableCell align={'justify'} className={'h-1'} variant={'head'}>
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
                  <TableRow
                    key={specialty.id}
                    className={'hover:bg-bg hover:cursor-pointer transition-colors uppercase'}
                  >
                    <TableCell align={'left'} component={'th'} scope={'row'}>
                      <div className={'flex justify-between items-center'}>
                        <span>{specialty.name}</span>
                        <MenuTable options={options} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};
