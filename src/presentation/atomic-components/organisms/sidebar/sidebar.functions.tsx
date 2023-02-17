import { IconButton } from 'presentation/atomic-components/atoms/icon-button/icon-button';
import { paths } from 'main/config';

import { useNavigate } from 'react-router-dom';
import { usePath } from 'data/usecases';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import type { ReactNode } from 'react';

interface itemsProps {
  icon: ReactNode;
  link: string;
  hideFor: ('admin' | 'adminLocal' | 'consutor' | 'empresa')[];
}
const items: itemsProps[] = [
  {
    hideFor: [],
    icon: <ShowChartIcon />,
    link: paths.home
  },
  {
    hideFor: [],
    icon: <BusinessCenterIcon />,
    link: paths.proposal
  },
  {
    hideFor: ['consutor', 'empresa'],
    icon: <PersonIcon />,
    link: ''
  },
  {
    hideFor: ['adminLocal', 'consutor', 'empresa'],
    icon: <AssignmentIcon />,
    link: ''
  },
  {
    hideFor: ['adminLocal', 'consutor', 'empresa'],
    icon: <EmojiEventsIcon />,
    link: ''
  },
  {
    hideFor: ['empresa'],
    icon: <DashboardIcon />,
    link: paths.toolbox
  }
];

export const useGetIcons = (user: 'admin' | 'adminLocal' | 'consutor' | 'empresa'): ReactNode => {
  const navigate = useNavigate();
  const { firstPathname } = usePath();

  return (
    <div className={'flex flex-col justify-center items-center text-white'}>
      {items.map((item) => {
        if (!item.hideFor.includes(user))
          return (
            <IconButton
              key={item.link}
              disabled={firstPathname === item.link}
              icon={item.icon}
              onClick={(): void => {
                if (item.link !== '') navigate(item.link);
              }}
              selected={firstPathname === item.link}
            />
          );

        return null;
      })}
    </div>
  );
};
