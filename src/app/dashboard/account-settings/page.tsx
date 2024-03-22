import DashboardAccountSetting from "@/components/dashboard/account-settings";
import WrapperDashboard from "@/layouts/WrapperDashboard";

export const metadata = {
   title: "Dashboard Account Setting C3 Imob - Real Estate React Next js Template",
};
const index = () => {
   return (
      <WrapperDashboard>
         <DashboardAccountSetting />
      </WrapperDashboard>
   )
}

export default index