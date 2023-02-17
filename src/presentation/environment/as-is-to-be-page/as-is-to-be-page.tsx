import { HeaderCoreContainer } from 'presentation/atomic-components/molecules/header-core-container/header-core-container';
import { Heading } from 'presentation/atomic-components/atoms/heading/heading';
import { Radar } from 'presentation/atomic-components/atoms/radar/radar';
import { Steps } from 'presentation/atomic-components/molecules/steps/steps';
import { colors } from 'presentation/styles/palettes';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CableIcon from '@mui/icons-material/Cable';
import Divider from '@mui/material/Divider';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import type { FC, ReactNode } from 'react';

const stepsInitial = [
  {
    icon: <CableIcon />,
    items: [
      { title: 'Sem cabeamento' },
      { title: 'Cabeamento não organizado e sem encaminhamento adequado' },
      { title: 'Cabeamento com encaminhamento' },
      { title: 'Cabeamento com documentação' },
      { title: 'Cabeamento estruturado e certificado' }
    ],
    start: 1,
    title: 'Cabeamento'
  },
  {
    icon: <WifiOutlinedIcon />,
    items: [
      { title: 'Sem wi-fi' },
      { title: 'Wi-fi de rede domestica' },
      { title: 'Wi-fi corporativo descentralizado' },
      { title: 'Wi-fi corporativo centralizado' },
      { title: 'Wi-fi corporativo centralizado e seguro' }
    ],
    start: 3,
    title: 'Wi-fi'
  },
  {
    icon: <WifiOutlinedIcon />,
    items: [
      { title: 'Não utiliza' },
      { title: 'Utiliza redes publicas com cobertura parcial' },
      { title: 'Utiliza redes publicas com cobertura total' },
      { title: 'Utiliza dados moveis privados' },
      { title: 'Conectividade nos dois sentidos, end-point ⬌ servidor' }
    ],
    start: 5,
    title: 'Redes Móveis'
  },
  {
    icon: <CableIcon />,
    items: [
      { title: 'Sem cabeamento' },
      { title: 'Cabeamento não organizado e sem encaminhamento adequado' },
      { title: 'Cabeamento com encaminhamento' },
      { title: 'Cabeamento com documentação' },
      { title: 'Cabeamento estruturado e certificado' }
    ],
    start: 1,
    title: 'Cabeamento'
  },
  {
    icon: <WifiOutlinedIcon />,
    items: [
      { title: 'Sem wi-fi' },
      { title: 'Wi-fi de rede domestica' },
      { title: 'Wi-fi corporativo descentralizado' },
      { title: 'Wi-fi corporativo centralizado' },
      { title: 'Wi-fi corporativo centralizado e seguro' }
    ],
    start: 3,
    title: 'Wi-fi'
  },
  {
    icon: <WifiOutlinedIcon />,
    items: [
      { title: 'Não utiliza' },
      { title: 'Utiliza redes publicas com cobertura parcial' },
      { title: 'Utiliza redes publicas com cobertura total' },
      { title: 'Utiliza dados moveis privados' },
      { title: 'Conectividade nos dois sentidos, end-point ⬌ servidor' }
    ],
    start: 5,
    title: 'Redes Móveis'
  },
  {
    icon: <CableIcon />,
    items: [
      { title: 'Sem cabeamento' },
      { title: 'Cabeamento não organizado e sem encaminhamento adequado' },
      { title: 'Cabeamento com encaminhamento' },
      { title: 'Cabeamento com documentação' },
      { title: 'Cabeamento estruturado e certificado' }
    ],
    start: 1,
    title: 'Cabeamento'
  },
  {
    icon: <WifiOutlinedIcon />,
    items: [
      { title: 'Sem wi-fi' },
      { title: 'Wi-fi de rede domestica' },
      { title: 'Wi-fi corporativo descentralizado' },
      { title: 'Wi-fi corporativo centralizado' },
      { title: 'Wi-fi corporativo centralizado e seguro' }
    ],
    start: 3,
    title: 'Wi-fi'
  },
  {
    icon: <WifiOutlinedIcon />,
    items: [
      { title: 'Não utiliza' },
      { title: 'Utiliza redes publicas com cobertura parcial' },
      { title: 'Utiliza redes publicas com cobertura total' },
      { title: 'Utiliza dados moveis privados' },
      { title: 'Conectividade nos dois sentidos, end-point ⬌ servidor' }
    ],
    start: 5,
    title: 'Redes Móveis'
  }
];

interface StepsProps {
  icon: ReactNode;
  items: {
    title: string;
  }[];
  start: number;
  end?: number;
  title: string;
}
const defaultValues = {
  zero: 0
};

interface getItemsProps {
  end: number[];
  values: { data: number[]; color: string }[];
}
export const AsIsToBePage: FC = () => {
  const [steps, setSteps] = useState<StepsProps[]>(stepsInitial);

  const getItems = (): getItemsProps => {
    const start = steps.map((step) => step.start);

    const end = steps.map((step) => {
      if (step.items.length === step.start) return step.items.length;
      return step.end || defaultValues.zero;
    });

    return {
      end,
      values: [
        { color: colors.primary, data: end },
        { color: colors.red, data: start }
      ]
    };
  };

  return (
    <>
      <HeaderCoreContainer
        subTitle={'173/2023 - Planejamento estratégico tecnológico'}
        title={'as is | to be'}
      />
      <Heading
        endElement={
          <div className={'w-[200px] min-h-[170px] flex justify-center items-center'}>
            <Radar values={getItems().values} />
          </div>
        }
        title={'TI - Infra'}
      />
      <div
        className={'flex flex-col items-center justify-center transition-transform delay-300 gap-8'}
      >
        <div className={'flex w-[80%] items-center gap-3'}>
          <h2 className={'uppercase z-10 font-semibold text-lg min-w-max text-red'}>
            ESTADO ATUAL
          </h2>
          <div className={'w-full'}>
            <Divider className={'h-2 rounded-sm bg-gradient-to-r from-red to-primary'} />
          </div>
          <h2 className={'uppercase z-10 font-semibold text-lg min-w-max text-primary'}>
            ESTADO FUTURO
          </h2>
        </div>
        <Steps allSteps={steps} setSteps={setSteps} />

        <div className={'flex flex-col w-40'}>
          <Button disabled={getItems().end.includes(defaultValues.zero)}>Enviar</Button>
        </div>
      </div>
    </>
  );
};
