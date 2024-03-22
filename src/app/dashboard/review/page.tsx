import DashboardReview from "@/components/dashboard/review";
import WrapperDashboard from "@/layouts/WrapperDashboard";

export const metadata = {
   title: "Dashboard Review C3 Imob - Real Estate React Next js Template",
};
const index = () => {
   return (
      <WrapperDashboard>
         <DashboardReview />
      </WrapperDashboard>
   )
}

export default index