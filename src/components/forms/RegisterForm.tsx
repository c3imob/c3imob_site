"use client";
import { ReactElement, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from 'next/navigation';


import OpenEye from "@/assets/images/icon/icon_68.svg";
import { apiSignupSubmit } from "src/services/login-services";

interface FormData {
  name: string;
  email: string;
  password: string;
}
const RegisterForm = () => {
  const router = useRouter();

  const schema = yup.object({
    name: yup.string().required().label("Nome"),
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().label("Senha"),
  });
  const randoNumber = Math.floor(Math.random() * 1000);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    ...ot
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: `C3 User${randoNumber}`,
      email: `c3user${randoNumber}@c3imob.com.br`,
      password: `c3user${randoNumber}`,
    },
  });
  const reloadNextPage = () => {
    window.location.reload();
  };
  const notify = (content: string | JSX.Element) =>
    toast(content, { position: "top-right", type: "success" });

  const onSubmit = async (data: FormData) => {
    const success = await apiSignupSubmit(data);
    if (success) notify(<>Registro com <b>sucesso</b></>);
    reloadNextPage();
  };

  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta position-relative mb-25">
            <label>Nome*</label>
            <input
              type="text"
              {...register("name")}
              placeholder="Zubayer Hasan"
            />
            <p className="form_error">{errors.name?.message}</p>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta position-relative mb-25">
            <label>Email*</label>
            <input
              type="email"
              {...register("email")}
              placeholder="seuemail@gmail.com"
            />
            <p className="form_error">{errors.email?.message}</p>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta position-relative mb-20">
            <label>Senha*</label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              {...register("password")}
              placeholder="Digite a senha"
              className="pass_log_id"
            />
            <span className="placeholder_icon">
              <span
                className={`passVicon ${isPasswordVisible ? "eye-slash" : ""}`}
              >
                <Image
                  onClick={togglePasswordVisibility}
                  src={OpenEye}
                  alt=""
                />
              </span>
            </span>
            <p className="form_error">{errors.password?.message}</p>
          </div>
        </div>
        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="remember2" />
              <label htmlFor="remember2">
                Ao clicar no botão Registro, você concorda com os <Link href="#">Termos de condições</Link> & <Link href="#">Política de Privacidade</Link>
              </label>
            </div>
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn-two w-100 text-uppercase d-block mt-20"
          >
            CADASTRAR
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
