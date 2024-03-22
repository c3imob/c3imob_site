import ListingFive from "@/components/inner-listing/listing-05";
import Wrapper from "@/layouts/Wrapper";
import PropertyListFilter from "src/components/site/PropertyListFilter";

export const metadata = {
   title: "Listing Five C3 Imob - Real Estate React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <PropertyListFilter />
      </Wrapper>
   )
}

export default index