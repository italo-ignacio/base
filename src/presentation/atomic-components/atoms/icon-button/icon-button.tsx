import { IconButton as IconButtonUI } from '@mui/material';
import type { FC, ReactNode } from 'react';

interface IconButtonProps {
  onClick?: () => void;
  icon: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  color?: 'primary' | 'secondary';
}

export const IconButton: FC<IconButtonProps> = ({ icon, onClick, selected, disabled, color }) => (
  <IconButtonUI disabled={disabled} onClick={onClick}>
    <span
      className={`rounded-xl text-sm p-2 ${selected ? 'bg-primary' : ''} ${
        color === 'primary' ? 'text-white' : 'text-secondary'
      }`}
    >
      {icon}
    </span>
  </IconButtonUI>
);

IconButton.defaultProps = {
  color: 'secondary'
};
