import { IconButton as IconButtonUI } from '@mui/material';
import type { FC, ReactNode } from 'react';

interface IconButtonProps {
  onClick?: () => void;
  icon: ReactNode;
  selected?: boolean;
}

export const IconButton: FC<IconButtonProps> = ({ icon, onClick, selected }) => (
  <IconButtonUI disabled={selected} onClick={onClick}>
    <span
      className={`rounded-xl text-sm text-white p-2 ${selected && 'bg-primary text-secondary'}`}
    >
      {icon}
    </span>
  </IconButtonUI>
);
