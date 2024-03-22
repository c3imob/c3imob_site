import DashboardProfile from "@/components/dashboard/profile";
import WrapperDashboard from "@/layouts/WrapperDashboard";

export const metadata = {
   title: "Dashboard Profile C3 Imob - Real Estate React Next js Template",
};
const index = () => {
   return (
      <WrapperDashboard>
         <DashboardProfile />
      </WrapperDashboard>
   )
}

export default index