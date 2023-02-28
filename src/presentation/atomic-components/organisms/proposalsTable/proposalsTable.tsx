import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { SimpleFilterTable } from 'presentation/atomic-components/molecules/simple-table-filter/simple-table-filter';
import { useState } from 'react';
import type { FC } from 'react';
import type { FilterOption } from 'presentation/atomic-components/molecules/simple-table-filter/simple-table-filter';

interface unity {
  cfp: number;
  name: string;
}

interface proposalStatus {
  conclusionRecord: boolean;
  sgset: boolean;
  diagnostic?: boolean;
}

export interface proposal {
  id: number;
  step: number;
  proposal: string;
  name: string;
  techProduct: string;
  cnpj: string;
  status: proposalStatus;
  relationshipUnity: unity;
  executingUnity: unity;
}

interface ProposalsTableProps {
  proposals: proposal[];
  filterOptions: FilterOption[];
  userType: 'collaborator' | 'company';
}

enum Filters {
  Step = 'Etapa',
  Proposal = 'Proposta',
  Name = 'Nome',
  TechProduct = 'Produto Tecnológico',
  CNPJ = 'CNPJ',
  Status = 'Status',
  RelationShipUnity = 'Unid. Relac.',
  ExecutingUnity = 'Unid. Exec.'
}

// eslint-disable-next-line max-lines-per-function
export const ProposalsTable: FC<ProposalsTableProps> = ({ proposals, filterOptions, userType }) => {
  const [openFilter, setOpenFilter] = useState<string | null>();

  const handleClickFilter = (filter: string): void => {
    setOpenFilter(filter);
  };

  const handleCloseFilter = (): void => {
    setOpenFilter(null);
  };

  return (
    <div>
      <TableContainer className={'bg-white'}>
        <Table aria-label={'simple table'} sx={{ minWidth: 650 }}>
          <TableHead className={'font-semibold'}>
            <TableRow>
              <TableCell align={'justify'} variant={'head'}>
                <div className={'flex justify-between'}>
                  <span>{Filters.Step}</span>
                  <SimpleFilterTable
                    filterOptions={filterOptions}
                    filterSide={'right'}
                    isOpen={openFilter === Filters.Step}
                    onClick={(): void => {
                      handleClickFilter(Filters.Step);
                    }}
                    onClose={handleCloseFilter}
                    title={Filters.Step}
                  />
                </div>
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                <div className={'flex justify-between'}>
                  <span>{Filters.Proposal}</span>
                  <SimpleFilterTable
                    filterSide={'right'}
                    isOpen={openFilter === Filters.Proposal}
                    onClick={(): void => {
                      handleClickFilter(Filters.Proposal);
                    }}
                    onClose={handleCloseFilter}
                    title={Filters.Proposal}
                  />
                </div>
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                <div className={'flex justify-between'}>
                  <span>{Filters.Name}</span>
                  <SimpleFilterTable
                    filterOptions={filterOptions}
                    filterSide={'right'}
                    isOpen={openFilter === Filters.Name}
                    onClick={(): void => {
                      handleClickFilter(Filters.Name);
                    }}
                    onClose={handleCloseFilter}
                    title={Filters.Name}
                  />
                </div>
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                <div className={'flex justify-between'}>
                  <span>{Filters.TechProduct}</span>
                  <SimpleFilterTable
                    filterOptions={filterOptions}
                    filterSide={'right'}
                    isOpen={openFilter === Filters.TechProduct}
                    onClick={(): void => {
                      handleClickFilter(Filters.TechProduct);
                    }}
                    onClose={handleCloseFilter}
                    title={Filters.TechProduct}
                  />
                </div>
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                <div className={'flex justify-between'}>
                  <span>{Filters.CNPJ}</span>
                  <SimpleFilterTable
                    filterOptions={filterOptions}
                    filterSide={'right'}
                    isOpen={openFilter === Filters.CNPJ}
                    onClick={(): void => {
                      handleClickFilter(Filters.CNPJ);
                    }}
                    onClose={handleCloseFilter}
                    title={Filters.CNPJ}
                  />
                </div>
              </TableCell>
              {userType === 'collaborator' ? (
                <TableCell align={'left'} variant={'head'}>
                  <div className={'flex justify-between w-full h-full'}>
                    <span>{Filters.Status}</span>
                    <SimpleFilterTable
                      filterSide={'left'}
                      isOpen={openFilter === Filters.Status}
                      onClick={(): void => {
                        handleClickFilter(Filters.Status);
                      }}
                      onClose={handleCloseFilter}
                      title={Filters.Status}
                    />
                  </div>
                </TableCell>
              ) : null}
              <TableCell align={'left'} variant={'head'}>
                <div className={'flex justify-between items-center'}>
                  <span>{Filters.RelationShipUnity}</span>
                  <SimpleFilterTable
                    filterOptions={filterOptions}
                    filterSide={'left'}
                    isOpen={openFilter === Filters.RelationShipUnity}
                    onClick={(): void => {
                      handleClickFilter(Filters.RelationShipUnity);
                    }}
                    onClose={handleCloseFilter}
                    title={Filters.RelationShipUnity}
                  />
                </div>
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                <div className={'flex justify-between items-center'}>
                  <span>{Filters.ExecutingUnity}</span>
                  <SimpleFilterTable
                    filterOptions={filterOptions}
                    filterSide={'left'}
                    isOpen={openFilter === Filters.ExecutingUnity}
                    onClick={(): void => {
                      handleClickFilter(Filters.ExecutingUnity);
                    }}
                    onClose={handleCloseFilter}
                    title={Filters.ExecutingUnity}
                  />
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {proposals.map((item) => (
              <TableRow key={item.id} className={'uppercase'}>
                <TableCell align={'left'} component={'th'} scope={'row'}>
                  {item.step}
                </TableCell>
                <TableCell align={'left'}>{item.proposal}</TableCell>
                <TableCell align={'left'}>{item.name}</TableCell>
                <TableCell align={'left'}>{item.techProduct}</TableCell>
                <TableCell align={'left'}>{item.cnpj}</TableCell>
                {userType === 'collaborator' ? (
                  <TableCell align={'left'}>
                    <div className={'flex flex-col gap-2'}>
                      <Chip
                        label={'Reg. de conclusão'}
                        size={'small'}
                        variant={item.status.conclusionRecord === true ? 'filled' : 'outlined'}
                      />
                      <Chip
                        label={'SGSET'}
                        size={'small'}
                        variant={item.status.sgset === true ? 'filled' : 'outlined'}
                      />
                      {item.status.diagnostic ? (
                        <Chip
                          label={'Diagnóstico'}
                          size={'small'}
                          variant={item.status.diagnostic === true ? 'filled' : 'outlined'}
                        />
                      ) : null}
                    </div>
                  </TableCell>
                ) : null}
                <TableCell align={'left'}>
                  {userType === 'collaborator'
                    ? item.relationshipUnity.cfp
                    : item.relationshipUnity.name}
                </TableCell>
                <TableCell align={'left'}>
                  {userType === 'collaborator' ? item.executingUnity.cfp : item.executingUnity.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
