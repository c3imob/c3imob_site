'use client';
import Image from 'next/image';
import Notification from './Notification';
import Profile from './Profile';
import { useMemo, useState } from 'react';
import DashboardHeaderOne from './DashboardHeaderOne';

import dashboardIcon_2 from '@/assets/images/dashboard/icon/icon_11.svg';
import dashboardAvatarDefault from '@/assets/images/dashboard/avatar_01.jpg';
import { getLoggedUser } from 'src/util/functions/checkLogin';
import { baseApiPath } from 'src/util/entity-utils';

const DashboardHeader = ({ title }: any) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const userLogged = getLoggedUser();

  const DashboardAvatar = () => {
    if (userLogged.avatar) {
      return <img src={baseApiPath(userLogged.avatar)} loading="lazy" width="65" height="65" className="lazy-img" />;
    }
    return <Image src={dashboardAvatarDefault} alt="" className="lazy-img" />;
  };

  return (
    <>
      <header className="dashboard-header">
        <div className="d-flex align-items-center justify-content-end">
          <h4 className="m0 d-none d-lg-block">{title}</h4>
          <button onClick={() => setIsActive(true)} className="dash-mobile-nav-toggler d-block d-md-none me-auto">
            <span></span>
          </button>
          <div className="ms-auto"></div>
          <div className="profile-notification position-relative dropdown-center ms-3 ms-md-5 me-4">
            <button className="noti-btn dropdown-toggle" type="button" id="notification-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
              <Image src={dashboardIcon_2} alt="" className="lazy-img" />
              <div className="badge-pill"></div>
            </button>
            <Notification />
          </div>
          <div className="user-data position-relative">
            <button className="user-avatar online position-relative rounded-circle dropdown-toggle" type="button" id="profile-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
              <DashboardAvatar />
            </button>
            <Profile />
          </div>
        </div>
      </header>
      <DashboardHeaderOne isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default DashboardHeader;
