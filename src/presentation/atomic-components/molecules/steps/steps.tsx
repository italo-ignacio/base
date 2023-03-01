import { useWindowDimensions } from 'data/hooks';

import { colors } from 'presentation/styles/palettes';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import type { Dispatch, FC, SetStateAction } from 'react';
import type { StepsItemsProps } from 'presentation/environment';

const defaultValues = {
  big: 1400,
  first: 1,
  left: 32,
  medium: 1300,
  noSize: 0
};

const getSize = (
  width: number
): {
  widthWithGap: number;
  width: number;
  widthForTailwind: 'w-[150px]' | 'w-[170px]' | 'w-[190px]';
} => {
  if (width > defaultValues.big)
    return {
      width: 190,
      widthForTailwind: 'w-[190px]',
      widthWithGap: 222
    };
  if (width > defaultValues.medium)
    return {
      width: 170,
      widthForTailwind: 'w-[170px]',
      widthWithGap: 202
    };
  return {
    width: 150,
    widthForTailwind: 'w-[150px]',
    widthWithGap: 182
  };
};

const getShadow = (
  index: number,
  step: { currentState: number; futureState: number | undefined; length: number }
): string | null => {
  if (index < step.currentState - defaultValues.first) return 'inset 0 0 0 4px #E5E9EC';
  if (
    (step.futureState &&
      step.currentState - defaultValues.first === step.futureState - defaultValues.first &&
      index === step.currentState - defaultValues.first) ||
    (step.length === step.currentState && index === step.currentState - defaultValues.first)
  )
    return `inset 0 0 0 4px ${colors.red}, inset 0 0 0 8px ${colors.primary}`;

  if (step.currentState - defaultValues.first === index) return `inset 0 0 0 4px ${colors.red}`;
  if (step.futureState && step.futureState - defaultValues.first === index)
    return `inset 0 0 0 4px ${colors.primary}`;
  return null;
};

interface StepsProps {
  setSteps: Dispatch<SetStateAction<StepsItemsProps[]>>;
  allSteps: StepsItemsProps[];
}
export const Steps: FC<StepsProps> = ({ allSteps, setSteps }) => {
  const { width } = useWindowDimensions();

  const onClick = (index: number, indexStep: number): void => {
    if (allSteps[indexStep].currentState <= index + defaultValues.first) {
      const newSteps = allSteps.map((step, indexItem) => ({
        ...step,
        futureState: indexStep === indexItem ? index + defaultValues.first : step.futureState
      }));

      setSteps(newSteps);
    }
  };

  return (
    <>
      {allSteps.map((step, indexStep) => (
        <div key={step.title} className={'flex flex-col'}>
          <div className={'flex gap-8'}>
            <div
              className={
                'flex flex-col bg-secondary text-white rounded-[20px] p-4 justify-center items-center min-h-[120px] w-[140px]'
              }
            >
              {step.icon}
              {step.title}
            </div>
            <div className={'flex gap-8 relative'}>
              <div
                className={'w-full absolute top-[45%]'}
                style={{
                  left: step.currentState * getSize(width).widthWithGap - defaultValues.left,
                  width:
                    !step.futureState ||
                    step.futureState - step.currentState === defaultValues.noSize
                      ? defaultValues.noSize
                      : (step.futureState - step.currentState) * getSize(width).widthWithGap -
                        getSize(width).width
                }}
              >
                <Divider className={'h-4 bg-gradient-to-r from-red to-primary'} />
              </div>
              {step.items.map((stepItem, indexItem) => (
                <Paper
                  key={step.title}
                  className={`flex p-4 z-[2] text-center justify-center rounded-[20px] items-center min-h-[120px] ${
                    getSize(width).widthForTailwind
                  }`}
                  elevation={5}
                  onClick={(): void => {
                    onClick(indexItem, indexStep);
                  }}
                  sx={{
                    borderRadius: '20px',
                    boxShadow: getShadow(indexItem, {
                      currentState: allSteps[indexStep].currentState,
                      futureState: step.futureState,
                      length: allSteps[indexStep].items.length
                    }),
                    color:
                      indexItem < allSteps[indexStep].currentState - defaultValues.first
                        ? '#E5E9EC'
                        : '',
                    cursor:
                      indexItem < allSteps[indexStep].currentState - defaultValues.first
                        ? ''
                        : 'pointer'
                  }}
                >
                  {stepItem.title}
                </Paper>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
