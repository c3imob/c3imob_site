import DashboardMessage from "@/components/dashboard/message";
import WrapperDashboard from "@/layouts/WrapperDashboard";

export const metadata = {
   title: "Dashboard Message C3 Imob - Real Estate React Next js Template",
};
const index = () => {
   return (
      <WrapperDashboard>
         <DashboardMessage />
      </WrapperDashboard>
   )
}

export default index