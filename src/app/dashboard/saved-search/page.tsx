import DashboardSavedSearch from "@/components/dashboard/saved-search";
import WrapperDashboard from "@/layouts/WrapperDashboard";

export const metadata = {
   title: "Dashboard Saved Search C3 Imob - Real Estate React Next js Template",
};
const index = () => {
   return (
      <WrapperDashboard>
         <DashboardSavedSearch />
      </WrapperDashboard>
   )
}

export default index