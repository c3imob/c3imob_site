import DashboardFavourite from "@/components/dashboard/favourites";
import WrapperDashboard from "@/layouts/WrapperDashboard";

export const metadata = {
   title: "Dashboard Favourite C3 Imob - Real Estate React Next js Template",
};
const index = () => {
   return (
      <WrapperDashboard>
         <DashboardFavourite />
      </WrapperDashboard>
   )
}

export default index