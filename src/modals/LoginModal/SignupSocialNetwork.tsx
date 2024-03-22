import Image from "next/image";
import Link from "next/link";

import loginIcon_1 from "@/assets/images/icon/google.png";
import loginIcon_2 from "@/assets/images/icon/facebook.png";


const tab_title: string[] = ["Fazer Login", "Cadastre-se"];
const SignupSocialNetwork = ({ activeTab }: any) => {
  return (
    <>
      <div className="d-flex align-items-center mt-30 mb-10">
        <div className="line"></div>
        <span className="pe-3 ps-3 fs-6">OU</span>
        <div className="line"></div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <Link
            href="#"
            className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10"
          >
            <Image src={loginIcon_1} alt="" />
            <span className="ps-3">{tab_title[activeTab]} com o Google</span>
          </Link>
        </div>
        <div className="col-sm-6">
          <Link
            href="#"
            className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10"
          >
            <Image src={loginIcon_2} alt="" />
            <span className="ps-3">{tab_title[activeTab]} com o Facebook</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignupSocialNetwork;
