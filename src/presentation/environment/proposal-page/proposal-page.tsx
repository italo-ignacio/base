// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-lines */
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { HeaderCoreContainer } from 'presentation/atomic-components/molecules/header-core-container/header-core-container';
import { SimpleFilterTable } from 'presentation/atomic-components/molecules/simple-table-filter/simple-table-filter';
import { useEffect, useState } from 'react';
import type { FC } from 'react';
import type { Filter } from 'presentation/atomic-components/molecules/simple-table-filter/simple-table-filter';

/*
 * Enum usersRoles {
 *   admin = 'admin',
 *   local = 'local',
 *   consultant = 'consultant',
 *   company = 'company'
 * }
 */

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

const data: proposal[] = [
  {
    cnpj: '18.587.218/0001-50',
    executingUnity: {
      cfp: 121,
      name: 'Aclimação'
    },
    id: 1,
    name: 'HUFFIX DO aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa BRASIL INDUSTRIA',
    proposal: '172312-204',
    relationshipUnity: {
      cfp: 127,
      name: 'JANDIRA'
    },
    status: {
      conclusionRecord: false,
      diagnostic: true,
      sgset: false
    },
    step: 1,
    techProduct: 'Planejamento Estratégico Tecnológico'
  },
  {
    cnpj: '18.587.218/0001-50',
    executingUnity: {
      cfp: 121,
      name: 'Aclimação'
    },
    id: 2,
    name: 'HUFFIX DO BRASIL INDUSTRIA',
    proposal: '172312-204',
    relationshipUnity: {
      cfp: 127,
      name: 'JANDIRA'
    },
    status: {
      conclusionRecord: false,
      diagnostic: false,
      sgset: true
    },
    step: 1,
    techProduct: 'Planejamento Estratégico Tecnológico'
  },
  {
    cnpj: '18.587.218/0001-50',
    executingUnity: {
      cfp: 121,
      name: 'Aclimação'
    },
    id: 3,
    name: 'HUFFIX DO BRASIL INDUSTRIA',
    proposal: '172312-204',
    relationshipUnity: {
      cfp: 127,
      name: 'JANDIRA'
    },
    status: {
      conclusionRecord: true,
      sgset: false
    },
    step: 1,
    techProduct: 'Planejamento Estratégico Tecnológico'
  },
  {
    cnpj: '18.587.218/0001-50',
    executingUnity: {
      cfp: 121,
      name: 'Aclimação'
    },
    id: 4,
    name: 'HUFFIX DO BRASIL INDUSTRIA',
    proposal: '172312-204',
    relationshipUnity: {
      cfp: 127,
      name: 'JANDIRA'
    },
    status: {
      conclusionRecord: false,
      diagnostic: true,
      sgset: true
    },
    step: 1,
    techProduct: 'Planejamento Estratégico Tecnológico'
  },
  {
    cnpj: '18.587.218/0001-50',
    executingUnity: {
      cfp: 121,
      name: 'Aclimação'
    },
    id: 5,
    name: 'HUFFIX DO BRASIL INDUSTRIA',
    proposal: '172312-204',
    relationshipUnity: {
      cfp: 127,
      name: 'JANDIRA'
    },
    status: {
      conclusionRecord: false,
      diagnostic: true,
      sgset: true
    },
    step: 1,
    techProduct: 'Planejamento Estratégico Tecnológico'
  }
];
const filterOptions: Filter[] = [
  { label: 'Lorena Ipsula 1', value: 1 },
  { label: 'Lorena Ipsula 2', value: 2 },
  { label: 'Lorena Ipsula 3', value: 3 },
  { label: 'Lorena Ipsula 4', value: 4 },
  { label: 'Lorena Ipsula 5', value: 5 }
];

// Const role = 'admin';

export const ProposalPage: FC = () => {
  const [proposals, setProposals] = useState<proposal[]>(data);

  // Const [userRole, setUserRole] = useState<string>(role);

  // Const getUserRole = (): string => userRole;

  useEffect(() => {
    setProposals(data);

    // SetUserRole(role);
  }, []);

  return (
    <div className={'w-auto h-auto'}>
      <HeaderCoreContainer
        hasBreadcrumbs={false}
        subTitle={'JORNADA DE TRANSFORMAÇÃO DIGITAL'}
        title={'PROPOSTAS'}
      />
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
                  <SimpleFilterTable
                    filterOptions={filterOptions}
                    filterSide={'right'}
                    title={'Propostas'}
                  />
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
              <TableCell align={'left'} variant={'head'}>
                <div className={'flex justify-between w-full h-full'}>
                  <span>Status</span>
                  <SimpleFilterTable
                    filterOptions={filterOptions}
                    filterSide={'left'}
                    title={'Status'}
                  />
                </div>
              </TableCell>
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
                <TableCell align={'left'}>{item.relationshipUnity.cfp}</TableCell>
                <TableCell align={'left'}>{item.executingUnity.cfp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
