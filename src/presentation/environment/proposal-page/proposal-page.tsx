import { HeaderCoreContainer } from 'presentation/atomic-components/molecules/header-core-container/header-core-container';
import { ProposalsTable } from 'presentation/atomic-components/organisms/proposalsTable/proposalsTable';
import type { FC } from 'react';
import type { FilterOption } from 'presentation/atomic-components/molecules/simple-table-filter/simple-table-filter';
import type { proposal } from 'presentation/atomic-components/organisms/proposalsTable/proposalsTable';

const proposalsData: proposal[] = [
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
const filterOptions: FilterOption[] = [
  { label: 'Lorena Ipsula 1', value: 1 },
  { label: 'Lorena Ipsula 2', value: 2 },
  { label: 'Lorena Ipsula 3', value: 3 },
  { label: 'Lorena Ipsula 4', value: 4 },
  { label: 'Lorena Ipsula 5', value: 5 }
];

export const ProposalPage: FC = () => (
  <div className={'w-auto h-auto'}>
    <HeaderCoreContainer
      hasBreadcrumbs={false}
      subTitle={'JORNADA DE TRANSFORMAÇÃO DIGITAL'}
      title={'PROPOSTAS'}
    />
    <ProposalsTable
      filterOptions={filterOptions}
      proposals={proposalsData}
      userType={'collaborator'}
    />
  </div>
);
