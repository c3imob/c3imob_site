import PropertyList from "@/components/dashboard/properties-list";
import WrapperDashboard from "@/layouts/WrapperDashboard";

export const metadata = {
   title: "Dashboard Property List C3 Imob - Real Estate React Next js Template",
};
const index = () => {
   return (
      <WrapperDashboard>
         <PropertyList />
      </WrapperDashboard>
   )
}

export default index