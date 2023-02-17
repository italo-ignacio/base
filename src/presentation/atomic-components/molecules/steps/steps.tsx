import { useWindowDimensions } from 'data/usecases';

import { colors } from 'presentation/styles/palettes';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';

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
  step: { start: number; end: number | undefined; length: number }
): string | null => {
  if (index < step.start - defaultValues.first) return 'inset 0 0 0 4px #E5E9EC';
  if (
    (step.end &&
      step.start - defaultValues.first === step.end - defaultValues.first &&
      index === step.start - defaultValues.first) ||
    (step.length === step.start && index === step.start - defaultValues.first)
  )
    return `inset 0 0 0 4px ${colors.red}, inset 0 0 0 8px ${colors.primary}`;

  if (step.start - defaultValues.first === index) return `inset 0 0 0 4px ${colors.red}`;
  if (step.end && step.end - defaultValues.first === index)
    return `inset 0 0 0 4px ${colors.primary}`;
  return null;
};

interface StepsProps1 {
  icon: ReactNode;
  items: {
    title: string;
  }[];
  start: number;
  end?: number;
  title: string;
}
interface StepsProps {
  setSteps: Dispatch<SetStateAction<StepsProps1[]>>;
  allSteps: StepsProps1[];
}
export const Steps: FC<StepsProps> = ({ allSteps, setSteps }) => {
  const { width } = useWindowDimensions();

  const onClick = (index: number, indexStep: number): void => {
    if (allSteps[indexStep].start <= index + defaultValues.first) {
      const newSteps = allSteps.map((step, indexSt) => ({
        ...step,
        end: indexStep === indexSt ? index + defaultValues.first : step.end
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
                  left: step.start * getSize(width).widthWithGap - defaultValues.left,
                  width:
                    !step.end || step.end - step.start === defaultValues.noSize
                      ? defaultValues.noSize
                      : (step.end - step.start) * getSize(width).widthWithGap - getSize(width).width
                }}
              >
                <Divider className={'h-4 bg-gradient-to-r from-red to-primary'} />
              </div>
              {step.items.map((stepItem, index) => (
                <Paper
                  key={step.title}
                  className={`flex p-4 z-[2] text-center justify-center rounded-[20px] items-center min-h-[120px] ${
                    getSize(width).widthForTailwind
                  } ${index === allSteps[indexStep].start && 'shadow-inside'}`}
                  elevation={4}
                  id={`paper${index}`}
                  onClick={(): void => {
                    onClick(index, indexStep);
                  }}
                  sx={{
                    borderRadius: '20px',
                    boxShadow: getShadow(index, {
                      end: step.end,
                      length: allSteps[indexStep].items.length,
                      start: allSteps[indexStep].start
                    }),
                    color: index < allSteps[indexStep].start - defaultValues.first ? '#E5E9EC' : '',
                    cursor: index < allSteps[indexStep].start - defaultValues.first ? '' : 'pointer'
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
