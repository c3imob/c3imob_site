'use client';

import { PropertyDetailsAreaDtoInterface } from '../PropertyDetailsAreaDTO';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface PropertySidebarScheduleFormInterface {
  property: PropertyDetailsAreaDtoInterface;
}

export const schemaScheduleForm = yup.object({
   yourName: yup.string().required(),
   yourEmail: yup.string().required(),
   yourPhone: yup.string().required(),
   message: yup.string().required(),
 });

export interface ScheduleFormData {
   yourName: string;
   yourEmail: string;
   yourPhone: string;
   message: string;
 }
const PropertySidebarScheduleForm = ({ property }: PropertySidebarScheduleFormInterface) => {
   
  const {
   register,
   handleSubmit,
   formState: { errors },
 } = useForm<ScheduleFormData>({ resolver: yupResolver(schemaScheduleForm) });

 const scheduleForm = (data: ScheduleFormData) => {
 };

  return (
   <form onSubmit={handleSubmit(scheduleForm)}>
      <div className="input-box-three mb-25">
        <div className="label">Seu nome*</div>
        <input type="text" {...register('yourName')} name="yourName" placeholder="Your full name" className="type-input" />
        <p className="form_error">{errors.yourName?.message}</p>
      </div>
      <div className="input-box-three mb-25">
        <div className="label">Seu email*</div>
        <input type="email" {...register('yourEmail')} name="yourEmail" placeholder="Enter mail address" className="type-input" />
        <p className="form_error">{errors.yourEmail?.message}</p>
      </div>
      <div className="input-box-three mb-25">
        <div className="label">Seu telefone*</div>
        <input type="tel" {...register('yourPhone')} name="yourPhone" placeholder="Your phone number" className="type-input" />
        <p className="form_error">{errors.yourPhone?.message}</p>
      </div>
      <div className="input-box-three mb-15">
        <div className="label">Mensagem*</div>
        <textarea {...register('message')} name="message" placeholder="Hello, I am interested in [Califronia Apartments]"></textarea>
        <p className="form_error">{errors.message?.message}</p>
      </div>
      <button onClick={handleSubmit(scheduleForm)} className="btn-nine text-uppercase rounded-3 w-100 mb-10">INQUIry</button>
    </form>
  );
};

export default PropertySidebarScheduleForm;
