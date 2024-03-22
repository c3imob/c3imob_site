'use client';
import DashboardHeader from '@/layouts/headers/dashboard/DashboardHeader';
import Link from 'next/link';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { apiChangePassword } from 'src/services/login-services';
import { useRouter } from 'next/navigation';

export interface FormProfileData {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

const schema = yup.object({
  old_password: yup.string().required().label('Senha anterior'),
  new_password: yup.string().required().label('Senha nova'),
  confirm_password: yup.string().required().label('Confirmar senha nova'),
});

const PasswordChangeBody = () => {
  const router = useRouter(); // Using useNavigate instead of useHistory
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProfileData>({ resolver: yupResolver(schema) });

  const changePassword = (data: FormProfileData) => {
    if (data.new_password === data.confirm_password) {
      apiChangePassword({
        oldPassword: data.old_password,
        newPassword: data.new_password,
      });
      router.push('/dashboard/profile');
      toast('Senha atualizado com sucesso.', { position: 'top-right', type: 'success' });
    } else {
      toast('Senhas não conferem.', { position: 'top-right', type: 'error' });
    }
    console.info({ data });
  };

  return (
    <>
      <div className="bg-white card-box border-20">
        <form onSubmit={handleSubmit(changePassword)}>
          <div className="row">
            <div className="float-end button-group d-flex flex-row-reverse mt-15">
              <Link onClick={handleSubmit(changePassword)} href="#" className="dash-btn-two tran3s me-3">
                Salvar
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="dash-input-wrapper mb-20">
                <label htmlFor="">Senha anterior*</label>
                <input type="password" {...register('old_password')} name="old_password" placeholder="Digite a senha atual" />
                <p className="form_error">{errors.old_password?.message}</p>
              </div>
            </div>
            <div className="col-12">
              <div className="dash-input-wrapper mb-20">
                <label htmlFor="">Senha nova*</label>
                <input type="password" {...register('new_password')} name="new_password" placeholder="Confirme sua nova senha" />
                <p className="form_error">{errors.new_password?.message}</p>
              </div>
            </div>
            <div className="col-12">
              <div className="dash-input-wrapper mb-20">
                <label htmlFor="">Confirmar senha nova*</label>
                <input type="password" {...register('confirm_password')} name="confirm_password" placeholder="Confirme sua nova senha" />
                <p className="form_error">{errors.confirm_password?.message}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PasswordChangeBody;
