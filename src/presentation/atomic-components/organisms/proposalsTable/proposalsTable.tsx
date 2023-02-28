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
import type { FC } from 'react';
import type { Filter } from 'presentation/atomic-components/molecules/simple-table-filter/simple-table-filter';

interface unity {
  cfp: number;
  name: string;
}

interface proposalStatus {
  conclusionRecord: boolean;
  sgset: boolean;
  diagnostic?: boolean;
}

interface proposal {
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
  filterOptions: Filter[];
  userType: 'collaborator' | 'company';
}

export const ProposalsTable: FC<ProposalsTableProps> = ({ proposals, filterOptions, userType }) => (
  <div>
    <TableContainer className={'bg-white'}>
      <Table aria-label={'simple table'} sx={{ minWidth: 650 }}>
        <TableHead className={'font-semibold'}>
          <TableRow>
            <TableCell align={'justify'} variant={'head'}>
              <div className={'flex justify-between'}>
                <span>Etapa</span>
                <SimpleFilterTable
                  filterOptions={filterOptions}
                  filterSide={'right'}
                  title={'Etapa'}
                />
              </div>
            </TableCell>
            <TableCell align={'left'} variant={'head'}>
              <div className={'flex justify-between'}>
                <span>Propostas</span>
                <SimpleFilterTable filterSide={'right'} title={'Propostas'} />
              </div>
            </TableCell>
            <TableCell align={'left'} variant={'head'}>
              <div className={'flex justify-between'}>
                <span>Nome</span>
                <SimpleFilterTable
                  filterOptions={filterOptions}
                  filterSide={'right'}
                  title={'Nome'}
                />
              </div>
            </TableCell>
            <TableCell align={'left'} variant={'head'}>
              <div className={'flex justify-between'}>
                <span>Produto Tecnológico</span>
                <SimpleFilterTable
                  filterOptions={filterOptions}
                  filterSide={'right'}
                  title={'Produto Tecnológico'}
                />
              </div>
            </TableCell>
            <TableCell align={'left'} variant={'head'}>
              <div className={'flex justify-between'}>
                <span>CNPJ</span>
                <SimpleFilterTable
                  filterOptions={filterOptions}
                  filterSide={'right'}
                  title={'CNPJ'}
                />
              </div>
            </TableCell>
            {userType === 'collaborator' ? (
              <TableCell align={'left'} variant={'head'}>
                <div className={'flex justify-between w-full h-full'}>
                  <span>Status</span>
                  <SimpleFilterTable filterSide={'left'} title={'Status'} />
                </div>
              </TableCell>
            ) : null}
            <TableCell align={'left'} variant={'head'}>
              <div className={'flex justify-between items-center'}>
                <span>Unid. Relac.</span>
                <SimpleFilterTable
                  filterOptions={filterOptions}
                  filterSide={'left'}
                  title={'Unid. Relac.'}
                />
              </div>
            </TableCell>
            <TableCell align={'left'} variant={'head'}>
              <div className={'flex justify-between items-center'}>
                <span>Unid. Exec.</span>
                <SimpleFilterTable
                  filterOptions={filterOptions}
                  filterSide={'left'}
                  title={'Unid. Exec.'}
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
