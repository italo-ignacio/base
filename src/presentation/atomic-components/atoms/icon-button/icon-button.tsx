import { IconButton as IconButtonUI } from '@mui/material';
import type { FC, ReactNode } from 'react';

interface IconButtonProps {
  onClick?: () => void;
  icon: ReactNode;
  selected?: boolean;
  disabled?: boolean;
}

export const IconButton: FC<IconButtonProps> = ({ icon, onClick, selected, disabled }) => (
  <IconButtonUI disabled={disabled} onClick={onClick}>
    <span
      className={`rounded-xl text-sm p-2 ${selected ? 'bg-primary text-secondary' : 'text-white'}`}
    >
      {icon}
    </span>
  </IconButtonUI>
);
