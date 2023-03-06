import { Menu } from '@mui/material';
import { MenuTableItem } from 'presentation/atomic-components/atoms/menu-table-item/menu-table-item';
import { useState } from 'react';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import type { FC, MouseEvent } from 'react';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import type { SvgIconTypeMap } from '@mui/material';

export interface Option {
  action: string;
  onClick: () => void;
  icon: OverridableComponent<SvgIconTypeMap>;
}

interface MenuTablePropos {
  options: Option[];
}

export const MenuTable: FC<MenuTablePropos> = ({ options }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        onClick={(event): void => {
          handleClick(event);
        }}
        type={'button'}
      >
        <MoreHorizOutlinedIcon />
      </button>
      <Menu
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
        anchorEl={anchorEl}
        id={'basic-menu'}
        onClose={handleClose}
        open={open}
      >
        {options.map((option) => (
          <MenuTableItem
            key={option.action}
            action={option.action}
            icon={<option.icon />}
            onClick={(): void => option.onClick()}
          />
        ))}
      </Menu>
    </div>
  );
};
