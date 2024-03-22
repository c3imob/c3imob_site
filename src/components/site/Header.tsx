'use client';
import NavMenu from '../../layouts/site/Menu/NavMenu';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import UseSticky from '@/hooks/UseSticky';
import LoginModal, { LoginModalButton, LogoutModalButton } from 'src/modals/LoginModal';
import HeaderSearchbar, { HeaderSearchbarButton } from '../../layouts/site/Menu/HeaderSearchbar';

import logo_1 from '@/assets/images/logo/logo_n_4.png';
import Offcanvas, { OffcanvasButton } from '../../layouts/headers/Menu/Offcanvas';
import { getLoggedUser, isLoggedUser } from 'src/util/functions/checkLogin';

const Header = () => {
  const { sticky } = UseSticky();
  const [offCanvas, setOffCanvas] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  return (
    <>
      <div className={`theme-main-menu menu-overlay sticky-menu "menu-style-two" ${sticky ? 'fixed' : ''}`}>
        <div className={`inner-content gap-one`}>
          <div className="top-header position-relative">
            <div className="d-flex align-items-center">
              <div className="logo order-lg-0">
                <Link href="/" className="d-flex align-items-center">
                  <Image style={{ height: '42px', width: 'auto' }} src={logo_1} alt="" />
                </Link>
              </div>

              <div className="right-widget ms-auto me-3 me-lg-0 order-lg-3">
                <ul className="d-flex align-items-center style-none">
                  <>
                    <li className="d-none d-md-inline-block ms-3 ms-xl-4 ">
                      {isLoggedUser() && <Link href="/dashboard" className={'btn-two rounded-3'} target="_blank">
                        <span>Abrir Intranet</span>
                      </Link>}
                    </li>
                    <li className="d-none d-md-inline-block ms-3 ms-xl-4 ">{isLoggedUser() ? <LogoutModalButton /> : <LoginModalButton />}</li>
                    <li className="d-none d-md-inline-block ms-3 ms-xl-4 ">
                      <HeaderSearchbarButton isSearch={isSearch} setIsSearch={setIsSearch} />
                    </li>
                    <li className="d-none d-md-inline-block ms-3 ms-xl-4 ">
                      <OffcanvasButton offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
                    </li>
                  </>
                </ul>
              </div>

              <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
                <div className={`collapse navbar-collapse`} id="navbarNav">
                  <NavMenu />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <LoginModal />
      <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
      <HeaderSearchbar isSearch={isSearch} setIsSearch={setIsSearch} />
    </>
  );
};

export default Header;
