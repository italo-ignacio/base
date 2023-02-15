import { Box, Divider } from '@mui/material';
import { IconButton } from 'presentation/atomic-components/atoms/icon-button/icon-button';
import { useGetIcons } from './sidebar.functions';
import { useRef, useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Slide from '@mui/material/Slide';
import type { FC } from 'react';

export const Sidebar: FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const containerRef = useRef(null);

  return (
    <>
      <div
        className={
          'flex flex-col justify-between z-50 bg-secondary rounded-[28px] px-1 py-4 w-[64px]'
        }
        ref={containerRef}
      >
        {useGetIcons('admin')}
        <div className={'flex flex-col text-white'}>
          <IconButton
            icon={<NotificationsIcon />}
            onClick={(): void => {
              setShowNotifications(!showNotifications);
            }}
          />
          <IconButton icon={<LogoutIcon />} />
        </div>
      </div>
      <Box className={'overflow-x-hidden absolute left-11 bg-transparent z-40'} ref={containerRef}>
        <Slide container={containerRef.current} direction={'right'} in={showNotifications}>
          <div
            className={
              'w-96 h-[calc(100vh-40px)] flex top-5 pl-[40px] py-6 bg-secondary rounded-r-[28px]'
            }
          >
            <Divider color={'white'} orientation={'vertical'} />
            <div>Notificação</div>
          </div>
        </Slide>
      </Box>
    </>
  );
};
