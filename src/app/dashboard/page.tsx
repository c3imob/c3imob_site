import DashboardIndex from "@/components/dashboard/index";
import WrapperDashboard from "@/layouts/WrapperDashboard";

export const metadata = {
   title: "Dashboard Index C3 Imob - Real Estate React Next js Template",
};
const index = () => {
   return (
      <WrapperDashboard>
         <DashboardIndex />
      </WrapperDashboard>
   )
}

export default index