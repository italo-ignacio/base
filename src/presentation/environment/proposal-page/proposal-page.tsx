import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import type { FC } from 'react';

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
    id: 2,
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
    id: 3,
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

export const ProposalPage: FC = () => {
  const [proposals, setProposals] = useState<proposal[]>(data);

  useEffect(() => {
    setProposals(data);
  }, []);

  return (
    <div className={'w-auto h-full drop-shadow-xl bg-primary'}>
      <TableContainer className={'bg-white'}>
        <Table aria-label={'simple table'} sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow className={'font-bold'}>
              <TableCell align={'left'}>Etapa</TableCell>
              <TableCell align={'left'}>Proposta</TableCell>
              <TableCell align={'left'}>Nome</TableCell>
              <TableCell align={'left'}>Produto Tecnológico</TableCell>
              <TableCell align={'left'}>CNPJ</TableCell>
              <TableCell align={'left'}>Unid. Relac.</TableCell>
              <TableCell align={'left'}>Unid. Exec.</TableCell>
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
                <TableCell align={'left'}>{item.relationshipUnity.name}</TableCell>
                <TableCell align={'left'}>{item.executingUnity.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
