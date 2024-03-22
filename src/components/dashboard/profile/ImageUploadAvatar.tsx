import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import avatar_1 from '@/assets/images/dashboard/avatar_02.jpg';

import { FieldErrors, UseFormGetValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { FormProfileData } from './ProfileBody';
import { BASE_IMG_PATH } from 'src/util/constants';
import { baseApiPath } from 'src/util/entity-utils';
interface UserSettingInterface {
  register: UseFormRegister<FormProfileData>;
  errors: FieldErrors<FormProfileData>;
  setValue: UseFormSetValue<FormProfileData>;
  getValues: UseFormGetValues<FormProfileData>;
}

const ImageUploadAvatar = ({ register, errors, setValue, getValues }: UserSettingInterface) => {
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Use FileReader to read the file content
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const base64String = `${loadEvent?.target?.result}`;
        setValue('avatar', 'uploading');
        setValue('avatarBase64', base64String);
        setSelectedImage(URL.createObjectURL(file)); // Create a URL for the image to display it
      };
      reader.readAsDataURL(file); // Convert the image file to a base64 string
    }
  };
  let avatarValue = baseApiPath(getValues('avatar') || "");
  if (Boolean(selectedImage)) {
    avatarValue = selectedImage;
  }
  return (
    <>
      {avatarValue && <img src={avatarValue} alt="" className="lazy-img user-img" />}
      <div className="upload-btn position-relative tran3s ms-4 me-3">
        Carregar nova foto
        <input type="file" onChange={handleImageChange} accept="image/*" id="uploadImg" name="uploadImg" placeholder="" />
      </div>
      <button className="delete-btn tran3s">Excluir</button>
    </>
  );
};

export default ImageUploadAvatar;
