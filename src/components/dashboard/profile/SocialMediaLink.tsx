import Link from 'next/link';
import { UseFormRegister } from 'react-hook-form';
import { FormProfileData } from './ProfileBody';

interface UserSettingInterface {
  register: UseFormRegister<FormProfileData>;
}
const SocialMediaLink = ({ register }: UserSettingInterface) => {
  return (
    <div className="bg-white card-box border-20 mt-40">
      <h4 className="dash-title-three">Mídia social</h4>

      <div className="dash-input-wrapper mb-20">
        <label htmlFor="">Instagram</label>
        <input type="text" placeholder="https://www.facebook.com/zubayer0145" />
      </div>
      <div className="dash-input-wrapper mb-20">
        <label htmlFor="">Whatsapp</label>
        <input type="text" placeholder="https://twitter.com/FIFAcom" />
      </div>
    </div>
  );
};

export default SocialMediaLink;
