import { Button, Divider } from '@mui/material';
import { HeaderCoreContainer } from 'presentation/atomic-components/molecules/header-core-container/header-core-container';
import { Mandala } from 'presentation/atomic-components/atoms/mandala/mandala';
import { colors } from 'presentation/styles/palettes';
import { dataArray } from 'main/mock/mandala';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import type { FC } from 'react';

export const ToolboxPage: FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <>
      <HeaderCoreContainer subTitle={'Análise de sistema'} title={'TOOLBOX'} />
      <div className={'flex items-center justify-center transition-transform delay-300'}>
        <Mandala dataArray={dataArray} selected={selected} setSelected={setSelected} />

        {typeof selected === 'number' && dataArray[selected].subItem ? (
          <div className={'flex gap-4 min-h-[55vh] animate-big w-[30%]'}>
            <div className={'flex justify-start gap-4'}>
              <Divider
                className={'w-1'}
                color={colors.primary}
                orientation={'vertical'}
                sx={{
                  maxHeight:
                    document.getElementById('mandala')?.getBoundingClientRect().height || 'auto'
                }}
              />
              <span className={'flex p-1 h-min bg-primary rounded-md text-lg mt-2'}>
                <ArrowForwardIosIcon />
              </span>
            </div>
            <div className={'flex flex-col w-full justify-center gap-4'}>
              {dataArray[selected].subItem?.map((item) => (
                <Button
                  key={item.label}
                  onClick={(): void => {
                    navigate(item.link);
                  }}
                  variant={'secondary'}
                >
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
