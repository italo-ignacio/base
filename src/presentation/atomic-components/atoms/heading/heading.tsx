import { colors } from 'presentation/styles/palettes';
import Divider from '@mui/material/Divider';
import type { FC, ReactNode } from 'react';

interface HeadingProps {
  title: string;
  startElement?: ReactNode;
  endElement?: ReactNode;
}

export const Heading: FC<HeadingProps> = ({ title, startElement, endElement }) => (
  <div className={'flex justify-around items-center gap-2'}>
    {startElement || null}

    <h2 className={'uppercase z-10 font-semibold text-lg min-w-max'}>{title}</h2>
    <span className={'w-full'}>
      <Divider color={colors.secondary} />
    </span>

    {endElement || null}
  </div>
);
