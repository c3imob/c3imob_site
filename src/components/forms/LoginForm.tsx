import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";

import OpenEye from "@/assets/images/icon/icon_68.svg";
import { apiLoginSubmit } from "src/services/login-services";

interface FormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const schema = yup
    .object({
      email: yup.string().required().email().label("Email"),
      password: yup.string().required().label("Senha"),
    });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema),
    defaultValues: {
      email: `c3user1@c3imob.com.br`,
      password: `c3user1`,
    }, });
  const notify = (content: string | JSX.Element) =>
    toast(content, { position: "top-right", type: "success" });
  const reloadNextPage = () => {
    window.location.reload();
  };

  const onSubmit = async (data: FormData) => {
    const success = await apiLoginSubmit(data);
    if (success)
      notify(
        <>
          Registro com <b>sucesso</b>
        </>
      );
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
            <label>Email*</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Seuemail@gmail.com"
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
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Manter-me conectado</label>
            </div>
            <Link href="#">Esqueceu a senha?</Link>
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn-two w-100 text-uppercase d-block mt-20"
          >
            Entrar
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
