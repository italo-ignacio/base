import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { TableHeaderItemWithSimpleFilter } from 'presentation/atomic-components/molecules/table-header-item-with-simple-filter/table-header-item-with-simple-filter';
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
                <TableHeaderItemWithSimpleFilter
                  filterOptions={filterOptions}
                  filterSide={'right'}
                  isOpen={openFilter === Filters.Step}
                  onClick={(): void => {
                    handleClickFilter(Filters.Step);
                  }}
                  onClose={handleCloseFilter}
                  title={Filters.Step}
                />
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                <TableHeaderItemWithSimpleFilter
                  filterOptions={filterOptions}
                  filterSide={'right'}
                  isOpen={openFilter === Filters.Proposal}
                  onClick={(): void => {
                    handleClickFilter(Filters.Proposal);
                  }}
                  onClose={handleCloseFilter}
                  title={Filters.Proposal}
                />
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                <TableHeaderItemWithSimpleFilter
                  filterOptions={filterOptions}
                  filterSide={'right'}
                  isOpen={openFilter === Filters.Name}
                  onClick={(): void => {
                    handleClickFilter(Filters.Name);
                  }}
                  onClose={handleCloseFilter}
                  title={Filters.Name}
                />
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                <TableHeaderItemWithSimpleFilter
                  filterOptions={filterOptions}
                  filterSide={'right'}
                  isOpen={openFilter === Filters.TechProduct}
                  onClick={(): void => {
                    handleClickFilter(Filters.TechProduct);
                  }}
                  onClose={handleCloseFilter}
                  title={Filters.TechProduct}
                />
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                <TableHeaderItemWithSimpleFilter
                  filterOptions={filterOptions}
                  filterSide={'right'}
                  isOpen={openFilter === Filters.CNPJ}
                  onClick={(): void => {
                    handleClickFilter(Filters.CNPJ);
                  }}
                  onClose={handleCloseFilter}
                  title={Filters.CNPJ}
                />
              </TableCell>
              {userType === 'collaborator' ? (
                <TableCell align={'left'} variant={'head'}>
                  <TableHeaderItemWithSimpleFilter
                    filterOptions={filterOptions}
                    filterSide={'right'}
                    isOpen={openFilter === Filters.Status}
                    onClick={(): void => {
                      handleClickFilter(Filters.Status);
                    }}
                    onClose={handleCloseFilter}
                    title={Filters.Status}
                  />
                </TableCell>
              ) : null}
              <TableCell align={'left'} variant={'head'}>
                <TableHeaderItemWithSimpleFilter
                  filterOptions={filterOptions}
                  filterSide={'left'}
                  isOpen={openFilter === Filters.RelationShipUnity}
                  onClick={(): void => {
                    handleClickFilter(Filters.RelationShipUnity);
                  }}
                  onClose={handleCloseFilter}
                  title={Filters.RelationShipUnity}
                />
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                <TableHeaderItemWithSimpleFilter
                  filterOptions={filterOptions}
                  filterSide={'left'}
                  isOpen={openFilter === Filters.ExecutingUnity}
                  onClick={(): void => {
                    handleClickFilter(Filters.ExecutingUnity);
                  }}
                  onClose={handleCloseFilter}
                  title={Filters.ExecutingUnity}
                />
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
