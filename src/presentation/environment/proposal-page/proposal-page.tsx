import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useEffect, useState } from 'react';
import type { FC } from 'react';

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
    name: 'HUFFIX DO BRASIL INDUSTRIA',
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
    <div className={'w-auto h-auto overflow-auto'}>
      <TableContainer className={'bg-white'}>
        <Table aria-label={'simple table'} sx={{ minWidth: 650 }}>
          <TableHead className={'font-semibold'}>
            <TableRow>
              <TableCell align={'left'} variant={'head'}>
                Etapa
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                Proposta
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                Nome
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                Produto Tecnológico
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                CNPJ
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                Status
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                Unid. Relac.
              </TableCell>
              <TableCell align={'left'} variant={'head'}>
                Unid. Exec.
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {proposals.map((item) => (
              <TableRow
                key={item.id}
                className={'uppercase'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
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
                      variant={item.status.conclusionRecord === true ? 'filled' : 'outlined'}
                    />
                    <Chip
                      label={'SGSET'}
                      variant={item.status.sgset === true ? 'filled' : 'outlined'}
                    />
                    {item.status.diagnostic ? (
                      <Chip
                        label={'Diagnóstico'}
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
