import DashboardMembership from "@/components/dashboard/membership";
import WrapperDashboard from "@/layouts/WrapperDashboard";

export const metadata = {
   title: "Dashboard Membership C3 Imob - Real Estate React Next js Template",
};
const index = () => {
   return (
      <WrapperDashboard>
         <DashboardMembership />
      </WrapperDashboard>
   )
}

export default index