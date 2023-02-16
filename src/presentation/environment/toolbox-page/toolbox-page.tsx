import { Button, Divider } from '@mui/material';
import { HeaderCoreContainer } from 'presentation/atomic-components/molecules/header-core-container/header-core-container';
import { Mandala } from 'presentation/atomic-components/atoms/mandala/mandala';
import { colors } from 'presentation/styles/palettes';
import { dataArray } from 'main/mock/mandala';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import type { FC } from 'react';

export const ToolboxPage: FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <HeaderCoreContainer
        subTitle={'173/2023 - Planejamento estratégico tecnológico'}
        title={'cadastro a3'}
      />
      <div className={'flex items-center justify-center transition-transform delay-300'}>
        <Mandala dataArray={dataArray} selected={selected} setSelected={setSelected} />

        {typeof selected === 'number' && dataArray[selected].subItem ? (
          <div className={'flex gap-4 min-h-[55vh] animate-big w-[30%]'}>
            <div className={'flex justify-start gap-4'}>
              <Divider className={'w-1'} color={colors.primary} orientation={'vertical'} />
              <span className={'flex p-1 h-min bg-primary rounded-md text-lg mt-2'}>
                <ArrowForwardIosIcon />
              </span>
            </div>
            <div className={'flex flex-col w-full justify-center gap-4'}>
              {dataArray[selected].subItem?.map((item) => (
                <Button key={item.label} className={'w-80'} variant={'secondary'}>
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
