import { Divider } from '@mui/material';
import { IconButton } from 'presentation/atomic-components/atoms/icon-button/icon-button';
import { paths } from 'main/config';
import { useGetIcons } from './sidebar.functions';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Slide from '@mui/material/Slide';
import type { FC } from 'react';

export const Sidebar: FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const change = (type: 'account' | 'notification'): void => {
    if (type === 'notification') {
      setShowNotifications(!showNotifications);
      setShowAccount(false);
    } else {
      setShowAccount(!showAccount);
      setShowNotifications(false);
    }
  };

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
            color={showAccount ? 'secondary' : 'primary'}
            icon={<AccountCircleIcon />}
            onClick={(): void => {
              change('account');
            }}
            selected={showAccount}
          />
          <IconButton
            color={showNotifications ? 'secondary' : 'primary'}
            icon={<NotificationsIcon />}
            onClick={(): void => {
              change('notification');
            }}
            selected={showNotifications}
          />
          <IconButton
            color={'primary'}
            icon={<LogoutIcon />}
            onClick={(): void => {
              navigate(paths.login);
            }}
          />
        </div>
      </div>
      <div
        className={'overflow-x-hidden fixed left-11 bg-transparent w-auto z-40 '}
        ref={containerRef}
      >
        <Slide
          container={containerRef.current}
          direction={'right'}
          in={showNotifications || showAccount}
        >
          <div
            className={
              'w-auto h-[calc(100vh-40px)] flex top-5 pl-[40px] py-6 bg-secondary rounded-r-[28px]'
            }
          >
            <Divider color={'white'} orientation={'vertical'} />
            {showAccount ? <div className={'w-96 text-white'}>Account</div> : null}
            {showNotifications ? <div className={'w-96 text-white'}>Notification</div> : null}
          </div>
        </Slide>
      </div>
    </>
  );
};
