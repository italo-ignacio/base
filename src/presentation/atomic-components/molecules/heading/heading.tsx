import { colors } from 'presentation/styles/palettes';
import Divider from '@mui/material/Divider';
import type { FC, ReactNode } from 'react';

interface HeadingProps {
  title: string;
  startElement?: ReactNode;
  endElement?: ReactNode;
}
export const Heading: FC<HeadingProps> = ({ title, startElement, endElement }) => (
  <div className={'flex items-center gap-3 w-full'}>
    {startElement ? <div className={'z-10'}>{startElement}</div> : null}

    <h2 className={'uppercase z-10 font-semibold text-lg'}>{title}</h2>
    <div className={'flex w-full'}>
      <Divider className={'w-full'} color={colors.secondary} />
    </div>

    {endElement ? <div className={'z-10'}>{endElement}</div> : null}
  </div>
);
