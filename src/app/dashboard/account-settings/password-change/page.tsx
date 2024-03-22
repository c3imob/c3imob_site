import PasswordChange from "@/components/dashboard/account-settings/password-change";
import WrapperDashboard from "@/layouts/WrapperDashboard";

export const metadata = {
   title: "Dashboard Account Password Change C3 Imob - Real Estate React Next js Template",
};
const index = () => {
   return (
      <WrapperDashboard>
         <PasswordChange />
      </WrapperDashboard>
   )
}

export default index