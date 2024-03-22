'use client';
import UserAvatarSetting from './UserSetting';
import Link from 'next/link';
import { apiGetEntityView as getAdminUser, apiUpdateEntity as updateAdminUser, apiNewEntity as newAdminUser, apiDeleteEntity as deleteAdminUser } from 'src/services/AdminUser/admin-user-services';

import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { getLoggedUser } from 'src/util/functions/checkLogin';
import { IAdminUser } from 'src/components/models/AdminUser/admin-user-model';

export interface FormProfileData {
  id?: number;
  avatar?: string;
  avatarBase64?: string;
  fullname: string;
  email: string;
  phone: string;
  message: string;
}

const schema = yup.object({
  id: yup.number().label('Id'),
  avatar: yup.string().optional().label('Image'),
  avatarBase64: yup.string().optional().label('ImageBase64'),
  fullname: yup.string().required().label('Name'),
  email: yup.string().required().email().label('Email'),
  phone: yup.string().required().label('Número de telefone'),
  message: yup.string().required().label('Sobre'),
});

const ProfileBody = () => {
  const loggedUser = getLoggedUser();
  const [userData, setUserData] = useState<Partial<IAdminUser>>({});

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormProfileData>({ resolver: yupResolver(schema), defaultValues: userData });

  const getAdminUserSuccess = (v: any) => {
    setUserData(v.data[0]);
    reset(v.data[0]);
  };

  useEffect(() => {
    getAdminUser(loggedUser.id, getAdminUserSuccess, ['id', 'avatar', 'fullname', 'email', 'phone', 'message']);
  }, []);

  const saveProfile = (data: FormProfileData) => {
    if (data.id) {
      updateAdminUser(data);
      toast('Perfil atualizado com sucesso.', { position: 'top-right', type: 'success' });
    }
    console.info({ data });
  };
  return (
    <form onSubmit={handleSubmit(saveProfile)}>
      <>
        <h2 className="main-title d-block d-lg-none">Perfil</h2>
        <div className="float-end button-group d-inline-flex align-items-center mt-15">
          <Link href="/dashboard/account-settings/password-change" className="dash-btn-one tran3s me-3">
            Trocar a senha{' '}
          </Link>
          <Link onClick={handleSubmit(saveProfile)} href="#" className="dash-btn-two tran3s me-3">
            Salvar
          </Link>
        </div>
        <UserAvatarSetting register={register} errors={errors} setValue={setValue} getValues={getValues} />

      </>
      <div className="col-12"></div>
    </form>
  );
};

export default ProfileBody;
