import DashboardAddProperty from "@/components/dashboard/add-property";
import WrapperDashboard from "@/layouts/WrapperDashboard";

export const metadata = {
   title: "Dashboard Add Property C3 Imob - Real Estate React Next js Template",
};
const index = () => {
   return (
      <WrapperDashboard>
         <DashboardAddProperty />
      </WrapperDashboard>
   )
}

export default index