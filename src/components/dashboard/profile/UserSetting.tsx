import NiceSelect from '@/ui/NiceSelect';
import Image from 'next/image';
import avatar_1 from '@/assets/images/dashboard/avatar_02.jpg';
import { FieldErrors, UseFormGetValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { FormProfileData } from './ProfileBody';
import ImageUploadAvatar from './ImageUploadAvatar';

interface UserSettingInterface {
  register: UseFormRegister<FormProfileData>;
  errors: FieldErrors<FormProfileData>;
  setValue: UseFormSetValue<FormProfileData>
  getValues: UseFormGetValues<FormProfileData>
}
const UserSetting = ({ register, errors, setValue, getValues }: UserSettingInterface) => {
  const selectHandler = (e: any) => {};

  return (
    <div className="bg-white card-box border-20">
      <div className="user-avatar-setting d-flex align-items-center mb-30">
        <ImageUploadAvatar  register={register} errors={errors}  setValue={setValue} getValues={getValues} />
   
      </div>
      <div className="row">
        <div className="col-12">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Nome de usuário*</label>
            <input type="text" {...register('fullname')} name="fullname" placeholder="JonyRio" />
            <p className="form_error">{errors.fullname?.message}</p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Email*</label>
            <input type="email" {...register('email')} name="email" placeholder="empresa@email.com" />
            <p className="form_error">{errors.email?.message}</p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Número de telefone*</label>
            <input type="tel" {...register('phone')} name="phone" placeholder="+55 01723801729" />
            <p className="form_error">{errors.phone?.message}</p>
          </div>
        </div>
        <div className="col-12">
          <div className="dash-input-wrapper">
            <label htmlFor="">Sobre*</label>
            <textarea {...register('message')} name="message" className="size-lg" placeholder="Trabalho há 4 anos como designer gráfico, designer de interface do usuário, etc..."></textarea>
            <div className="alert-text">Breve descrição do seu perfil..</div>
            <p className="form_error">{errors.message?.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
