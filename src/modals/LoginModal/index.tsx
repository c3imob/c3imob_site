import Link from 'next/link';
import LoginForm from '@/components/forms/LoginForm';
import { useState } from 'react';

import RegisterForm from '@/components/forms/RegisterForm';
import SignupSocialNetwork from './SignupSocialNetwork';
import { logoutFunction } from 'src/util/functions/checkLogin';

const tab_title: string[] = ['Fazer Login', 'Cadastre-se'];

export const LoginModalButton = ({ loginModal, setLoginModal }: any) => {
  return (
    <>
      <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="btn-one">
        <i className="fa-regular fa-lock"></i>
        Entrar
      </Link>
    </>
  );
};
export const LogoutModalButton = ({ loginModal, setLoginModal }: any) => {
  return (
    <>
      <Link href="#" onClick={logoutFunction} className="btn-one">
        <i className="fa-regular fa-lock"></i>
        Sair
      </Link>
    </>
  );
};
const LoginModal = ({ loginModal, setLoginModal }: any) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="modal fade" id="loginModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-fullscreen modal-dialog-centered">
          <div className="container">
            <div className="user-data-form modal-content">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
              <div className="form-wrapper m-auto">
                <ul className="nav nav-tabs w-100">
                  {tab_title.map((tab: string, index) => (
                    <li key={index} onClick={() => handleTabClick(index)} className="nav-item">
                      <button className={`nav-link ${activeTab === index ? 'active' : ''}`}>{tab}</button>
                    </li>
                  ))}
                </ul>
                <div className="tab-content mt-30">
                  <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`}>
                    <div className="text-center mb-20">
                      <h2>Bem-vindo de volta!</h2>
                      <p className="fs-20 color-dark">
                        Ainda não tem uma conta?{' '}
                        <Link onClick={() => handleTabClick(1)} href="#">
                          Cadastre-se
                        </Link>
                      </p>
                    </div>
                    <LoginForm />
                  </div>

                  <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                    <div className="text-center mb-20">
                      <h2>Cadastre-se</h2>
                      <p className="fs-20 color-dark">
                        Já tem uma conta?{' '}
                        <Link onClick={() => handleTabClick(0)} href="#">
                          Faça login
                        </Link>
                      </p>
                    </div>
                    <RegisterForm />
                  </div>
                </div>
                {/* <SignupSocialNetwork activeTab={activeTab} />    */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
