import { MenuItem } from '@mui/material';
import type { FC, ReactElement } from 'react';

interface MenuTableItemProps {
  icon: ReactElement;
  action: string;
  onClick: () => void;
}

export const MenuTableItem: FC<MenuTableItemProps> = ({ icon, action, onClick }) => (
  <MenuItem onClick={onClick}>
    <div className={'flex justify-between items-center gap-2 font-montserrat text-secondary'}>
      {icon}
      <span>{action}</span>
    </div>
  </MenuItem>
);
